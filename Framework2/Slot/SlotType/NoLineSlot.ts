import AudioManager from '../../Audio/AudioManager'
import {GameState} from '../../Process/Enum/GameState'
import SlotProcessManager from '../../Process/SlotProcessManager'
import {ResponseType} from "../../WebResponse/Enum/ResponseType";
import NoLineFreeResult from "../../WebResponse/ServerDataModel/FreeResult/NoLineFreeResult";
import NoLineResult from "../../WebResponse/ServerDataModel/NormalResult/NoLineResult";
import {WebResponseManager} from '../../WebResponse/WebResponseManager'
import ASlot from '../ASlot'
import ScrollFocusStateNotification
    from "../../Listener/NotificationType/GameNotification/ScrollFocusStateNotification";
import {StyleData} from '../SlotStyleManager'

export default class NoLineSlot extends ASlot {

    /**
     * 一般停止最少轉動次數
     * @type {number}
     * @private
     */
    private readonly slotTurnCount: number;

    /**
     * 遊戲一般速度
     * @type {number}
     * @private
     */
    private readonly slotGirdSpeed: number;

    /**
     * 遊戲每列的格子數量
     * @type {number}
     * @private
     */
    private readonly slotRowGridCount: number;

    /**
     * 老虎機格子高度
     * @type {number}
     * @private
     */
    private readonly slotGridHeight: number;

    /**
     * 確認該軸是否有 free 圖標
     * @param index
     */
    private freeIconCount: number;

    /**
     * 加速倍率
     * @type {number}
     * @private
     */
    private readonly speedUpMultiple: number;

    /**
     * 執行老虎機動畫的列
     * @type {Array<cc.Node>}
     * @private
     */
    private readonly slotColumnToTween: Array<cc.Node>;

    /**
     * 跑遊戲更換位置的grid 節點
     * @type {Map<number, Array<cc.Node>>}
     * @private
     */
    private readonly gridNodeToMap: Map<number, Array<cc.Node>>;

    /**
     * 跑遊戲更換答案的grid 節點
     * @type {Map<number, Array<cc.Sprite>>}
     * @private
     */
    private readonly gridSpriteToMap: Map<number, Array<cc.Sprite>>;

    /**
     * 遊戲中所有靜態grid圖片
     * @param {StyleData} styleData
     */
    private readonly gridImg: Map<string, cc.SpriteFrame>;
    private readonly rowData: Array<number> // ["當前要跑幾個格子","當前要跑的高度"]
    private normalResult: NoLineResult;
    private freeResult: NoLineFreeResult
    //遊戲每列是否已經結束
    private readonly isSlotEnd: Array<boolean>;

    constructor(styleData: StyleData) {
        super(styleData)
        if (!styleData) return;
        this.normalResult =
            WebResponseManager
                .instance<NoLineResult>()
                .getResult(ResponseType.NORMAL);
        this.freeResult =
            WebResponseManager
                .instance<NoLineFreeResult>()
                .getResult(ResponseType.FREE);
        this.slotTurnCount = this.styleData.slotTurnCount;
        this.slotGirdSpeed = this.styleData.slotGirdSpeed;
        this.slotRowGridCount = this.styleData.slotRowGridCount;
        this.slotGridHeight = this.styleData.slotGridHeight;
        this.speedUpMultiple = this.styleData.speedUpMultiple;
        this.slotColumnToTween = this.styleData.slotColumnToTween;
        this.gridNodeToMap = this.styleData.gridNodeToMap;
        this.gridSpriteToMap = this.styleData.gridSpriteToMap;
        this.gridImg = this.styleData.gridImg;
        //計算每列高度
        let rowHeight = this.slotRowGridCount * this.slotGridHeight;
        this.rowData = new Array<number>();
        //rowData (要往下的格子數量,要下拉的高度);
        this.rowData.push(this.slotRowGridCount, rowHeight);
        this.isSlotEnd = [];
        this.initializeState();
    }

    public sineInSlot(): Promise<void> {
        let time = 0;
        let sineInHeight = Math.floor(this.styleData.slotGridHeight / 2);
        return new Promise<void>((resolve) => {
            let index = 0;
            for (let columnNode of this.slotColumnToTween) {
                cc.tween(columnNode)
                    .delay(time)
                    .to((this.slotGirdSpeed * 1.5), {y: columnNode.y + sineInHeight}, {easing: 'quadOut'})
                    .by(this.slotGirdSpeed, {y: -sineInHeight})
                    .call(() => {
                        index++;
                        if (index === this.slotColumnToTween.length) {
                            resolve();
                        }
                    })
                    .start();
            }
        })

    }

    public runSlotAnimation(): Promise<void> {

        return new Promise<void>((resolve) => {

            let columnLength = this.slotColumnToTween.length;

            AudioManager.instance.effectPlay("SlotTrun");

            for (let i = 0; i < columnLength; i++) {

                if (i == columnLength - 1) {
                    this.makeSlotAnimation(i, resolve);
                    return;
                }
                this.makeSlotAnimation(i);
            }

        })
    }

    /**
     * 開始執行格子輪播動畫
     * 如果server未回傳正確答案,將持續隨機圖片無限跑
     * @param index{number} 當前跑的是哪一列
     * @param resolve 當跑完時回傳Promise 讓Api執行下一段方法
     * @param numberOfTimes 監聽當前跑了幾輪,sever回傳答案後才開始計算圈數
     */
    private makeSlotAnimation(index: number, resolve?: () => void, numberOfTimes: number = 0) {
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration = this.slotGirdSpeed * this.slotRowGridCount / this.speed;
        let node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, {y: node.y - this.rowData[1]})
            .call(() => {
                //更新被Mask的Grid,將之移動到原位子
                this.updateGridPosition(this.gridNodeToMap.get(index), index);
                //如果server有回傳答案,將可進入停軸判斷
                if (WebResponseManager.instance().isResultOk) {
                    numberOfTimes++;
                    // 假如當前需要即停,將直接停止slot
                    if (this.isCanStop(index, resolve)) return;
                    if (index == 0 && numberOfTimes == this.checkSlotTurnCount(index)) {
                        //如果當前是第一列,將判斷是否已達到需轉動的次數
                        this.showAnswer(index);
                        this.isSlotEnd[index] = true;
                    } else if (
                        index != 0 &&
                        this.isSlotEnd[index - 1] &&
                        numberOfTimes == this.checkSlotTurnCount(index)
                    ) {
                        //如果當前不是第一列,且上一列已經停止時,將判斷該列是否已達到需轉動的次數
                        this.showAnswer(index, resolve);
                        this.isSlotEnd[index] = true;
                        this.setLookAtEventNotify(false, index);
                        AudioManager.instance.effectPlay("SlotStop");
                    } else {
                        this.makeSlotAnimation(index, resolve, numberOfTimes);
                    }
                } else {
                    this.makeSlotAnimation(index, resolve, numberOfTimes);
                }
            })
            .start();
    }

    private checkSlotTurnCount(index): number {
        let count: number;
        if (this.isSpeedUp) {
            count = this.slotTurnCount;
        } else if (this.checkLookAt(index)) {
            //瞇排增加的數量
            count = index * 4 + this.slotTurnCount;
            this.setLookAtEventNotify(true, index);
        } else {
            count = this.slotTurnCount + index;
        }
        return count;
    }

    setLookAtEventNotify(isShow: boolean, index: number) {
        if (this.isSlotEnd[index - 1] && this.checkLookAt(index)) {
            ScrollFocusStateNotification.instance.notify(index, isShow);
        }
    }

    /**
     * 檢查是否可以即停
     */
    isCanStop(index: number, resolve: () => void): boolean {
        if (this.isSlotImmediateStop) {
            this.showAnswer(index, resolve);
            this.isSlotEnd[index] = true;
            this.setLookAtEventNotify(false, index);
            return true;
        }
        return false;
    }

    /**
     * 更新輪播格子位置
     * @param rowNodes 哪一列的 node 需要更換圖片位置
     * @param columnIndex 當前是第幾列
     */
    private updateGridPosition(rowNodes: Array<cc.Node>, columnIndex: number) {
        let rowLength = rowNodes.length - 1;
        let random: number;
        let lastSprite: cc.Sprite;
        let end = this.rowData[0];
        for (let i = rowLength; i > end; i--) {
            lastSprite = this.gridSpriteToMap.get(columnIndex)[rowLength];
            //將該列的陣列中的最後一個sprite 節點 更新到該陣列的第一個位置
            this.gridSpriteToMap.get(columnIndex).unshift(lastSprite);
            //刪除陣列中的最後一個 sprite 節點
            this.gridSpriteToMap.get(columnIndex).pop();
            //隨機一個數字
            random = Math.floor(Math.random() * this.gridImg.size)
            this.gridSpriteToMap.get(columnIndex)[0].spriteFrame =
                this.gridImg.get(String(random));
            //重新給予最後一個陣列中的node 更新 y 位置
            rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight;
            //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置
            rowNodes.unshift(rowNodes[rowLength]);
            //刪除陣列中的最後一個 node 節點
            rowNodes.pop();
        }
    }

    /**
     * 對該列顯示結果的同時,並給予彈跳效果
     * @param {number} index : 哪一列
     * @param resolve
     */
    private showAnswer(index: number, resolve?) {
        this.updateGridAnswer(index);
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration = this.slotGirdSpeed * this.rowData[0] / this.speed;
        let node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, {y: node.y - this.rowData[1]})
            .call(() => {
                //更新被Mask的Grid,將之移動到原位子
                this.updateGridPosition(this.gridNodeToMap.get(index), index);
                this.sineOutAnimation(index, resolve);
            })
            .start();
    }

    /**
     * 檢查是否需要瞇牌
     * @param index{number}:檢查該列是否需要瞇牌
     * @return {boolean} : 如果需要瞇牌,返回true
     * @private
     */
    private checkLookAt(index: number): boolean {
        let lookAt: Array<number>;
        let isShowLookAt: boolean;
        if (SlotProcessManager.instance.gameState === GameState.FREEING) {
            lookAt = this.freeResult.LookAt;
        } else {
            lookAt = this.normalResult.LookAt;
        }
        isShowLookAt = !!lookAt[index];
        return isShowLookAt;
    }

    /**
     * 在答案顯示後,馬上給予回彈效果
     * @param index{number} : 哪一列已經顯示答案完畢
     * @param resolve{()=>void} : 當所有列都顯示答案且回彈效果完畢時,通知可以進行下一步
     */
    private sineOutAnimation(index: number, resolve: () => void) {
        if ((this.isSpeedUp || this.isSlotImmediateStop) &&
            index == this.slotColumnToTween.length - 1) {
            AudioManager.instance.effectPlay("SlotStop");
        } else if (!this.isSpeedUp) {
            AudioManager.instance.effectPlay("SlotStop");
        }
        let sineOutHeight = Math.floor(this.styleData.slotGridHeight / 2);
        let node = this.slotColumnToTween[index];
        cc.tween(node)
            .to((this.slotGirdSpeed), {y: node.y - sineOutHeight})
            .by(this.slotGirdSpeed * 6, {y: +sineOutHeight}, {easing: 'bounceOut'})
            .call(() => {
                this.checkFreeIcon(index);
                if (index === this.slotColumnToTween.length - 1) {
                    AudioManager.instance.effectStop("SlotTrun");
                    resolve();
                }
            })
            .start();
    }

    checkFreeIcon(index) {
        let gridAnswer: Array<number>;
        if (SlotProcessManager.instance.gameState === GameState.FREEING) {
            gridAnswer = this.freeResult.Grid;
        } else {
            gridAnswer = this.normalResult.Grid;
        }
        let start = index * 3;
        let end = start + 3;
        for (start; start < end; start++) {
            if (gridAnswer[start] == 10) {
                this.freeIconCount++;
                //如果非加速模式,對個別列蝶家事撥放數量增加時的個別音樂
                if (!this.isSpeedUp) {
                    AudioManager.instance.effectPlay(
                        `getFreeIcon${this.freeIconCount}`
                    );
                }
            }
        }
        //如果是加速模式,直接拿取該slot中Free總數量需播放的音樂
        if (this.isSpeedUp && this.freeIconCount >= 1
            && index == this.slotColumnToTween.length - 1) {
            AudioManager.instance.effectPlay(
                `getFreeIcon${this.freeIconCount}`
            );
        }
    }

    /**
     * 更新正確答案
     * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
     * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
     * @private
     */
    private updateGridAnswer(index: number) {
        let gridAnswer: Array<number>;
        if (SlotProcessManager.instance.gameState === GameState.FREEING) {
            gridAnswer = this.freeResult.Grid;
        } else {
            gridAnswer = this.normalResult.Grid;
        }
        let start = index * this.slotRowGridCount;
        let end = start + this.slotRowGridCount;
        let gridIndex = 0;
        for (start; start < end; start++) {
            let answer = gridAnswer[start];
            this.gridSpriteToMap.get(index)[gridIndex].spriteFrame
                = this.gridImg.get(String(answer));
            gridIndex++;
        }
    }

    /**
     * 初始化該輪所有狀態
     */
    public initializeState() {
        this.isSlotImmediateStop = false;
        this.isSpeedUp = this.speed > 1;
        this.freeIconCount = 0;
        if (!this.isSlotEnd) {
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd.push(false);
            }
        } else {
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd[i] = false;
            }
        }
    }
}