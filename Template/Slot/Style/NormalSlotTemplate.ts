import ASlotTemplate from "./ASlotTemplate";

import ScrollFocusStateNotification from "../../Event/Notification/GameNotification/ScrollFocusStateNotification";
import ISlotBaseResultModel from "../../NetWork/ISeverDataModel/INormalResult/ISlotBaseResultModel";
import ISlotFreeBaseResultModel from "../../NetWork/ISeverDataModel/IFreeResult/ISlotFreeBaseResultModel";

/**
 * @Author XIAO-LI-PIN
 * @Description 無線一般版老虎機
 *  ```
 *      SLOT STYLE : fcc.SlotImgSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          推撥 {StopNowStateNotification} : 即停的推播事件
 *          推撥 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {ISlotBaseResultModel} : 一般獲獎model
 *          model {ISlotBaseResultModel} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default class NormalSlotTemplate extends ASlotTemplate {

    /**
     * 一般停止最少轉動次數
     * @type {number}
     * @private
     */
    protected readonly slotTurnCount: number;

    /**
     * 遊戲每格格子間的速度
     * @type {number}
     * @private
     */
    protected readonly slotGirdSpeed: number;

    /**
     * 遊戲每列的格子數量
     * @type {number}
     * @private
     */
    protected readonly slotRowGridCount: number;

    /**
     * 老虎機格子高度
     * @type {number}
     * @private
     */
    protected readonly slotGridHeight: number;

    /**
     * 確認該軸是否有 free 圖標
     * @param index
     */
    protected freeIconCount: number;

    /**
     * 加速倍率
     * @type {number}
     * @private
     */
    protected readonly speedUpMultiple: number;

    /**
     * 執行老虎機動畫的列
     * @type {Array<cc.Node>}
     * @private
     */
    protected readonly slotColumnToTween: Array<cc.Node>;

    /**
     * 跑遊戲更換位置的grid 節點
     * @type {Map<number, Array<cc.Node>>}
     * @private
     */
    protected readonly gridNodeToMap: Map<number, Array<cc.Node>>;

    /**
     * 跑遊戲更換答案的grid 節點
     * @type {Map<number, Array<cc.Sprite>>}
     * @private
     */
    protected readonly gridSpriteToMap: Map<number, Array<cc.Sprite>>;

    /**
     * 遊戲中所有靜態grid圖片
     * @param {StyleData} styleData
     */
    protected readonly gridImg: Map<string, cc.SpriteFrame>;

    /**
     * 遊戲每列是否已經結束
     * @type {Array<boolean>}
     * @private
     */
    protected readonly isSlotEnd: Array<boolean>;

    /**
     * ["當前要跑幾個格子","slot高度"]
     * @type {Array<number>}
     * @private
     */
    protected readonly rowData: Array<number>;

    /**
     * 一般狀態回傳 model
     * @type {ISlotBaseResultModel}
     * @private
     */
    protected normalResult: ISlotBaseResultModel;

    /**
     * 免費結果回傳 model
     * @type {NoLineFreeResult}
     * @private
     */
    protected freeResult: ISlotFreeBaseResultModel;

    /**
     * 瞇排轉動次數
     * @type {number}
     * @private
     */
    private readonly lookAtCount: number;

    /**
     * 記錄每輪轉動次數
     * @type {Array<number>}
     * @private
     */
    private rowTurnCount: Array<number>;

    constructor(styleData: fcc.SlotImgSetting, configManager: fcc.IF.ISlotConfigManager) {
        super(styleData, configManager);
        if (!styleData) return;
        this.styleData = styleData;                                                     //拿取設定檔
        this.slotTurnCount = styleData.slotTurnCount;                                   //拿取一般停止最少轉動次數
        this.slotGirdSpeed = styleData.slotGirdSpeed;                                   //拿取遊戲每格格子間的速度
        this.slotRowGridCount = styleData.slotRowGridCount;                             //拿取遊戲每列的格子數量
        this.slotGridHeight = styleData.slotGridHeight;                                 //拿取老虎機格子高度
        this.speedUpMultiple = styleData.speedUpMultiple;                               //拿取加速倍率
        this.slotColumnToTween = styleData.slotColumnToTween;                           //拿取執行老虎機動畫的列
        this.gridNodeToMap = styleData.gridNodeToMap;                                   //拿取跑遊戲更換位置的grid 節點
        this.gridSpriteToMap = styleData.gridSpriteToMap;                               //拿取跑遊戲更換答案的grid Node
        this.gridImg = styleData.gridImg;                                               //拿取Slot格子的所有圖案
        this.normalResult = styleData.normalResult;                                     //拿取一般獲獎 model
        this.freeResult = styleData.freeResult;                                         //拿取免費獲獎 model
        this.rowData = new Array<number>();                                             //初始化Slot每列的資料
        this.lookAtCount = styleData.lookAtCount;                                             //初始化Slot每列的資料
        this.isSlotEnd = [];                                                            //遊戲每列是否已經結束
        this.rowData.push(this.slotRowGridCount, this.getCalculateSlotHeight());        //rowData [每列的格子數量,slot高度];
        this.rowTurnCount = new Array<number>();
        this.initializeState();                                                         //初始化該輪所有狀態
    }

    /**
     * 計算當前格子高度
     * @private
     */
    protected getCalculateSlotHeight(): number {
        return this.slotRowGridCount * this.slotGridHeight;
    }

    /**
     * 轉動前動畫,先往上,在往下1/2格
     * @return {Promise<void>}
     */
    public sineInSlot(): Promise<void> {
        //計算往上的高度
        let sineInHeight = Math.floor(this.styleData.slotGridHeight / 2);
        return new Promise<void>((resolve) => {
            let index = 0;
            for (let columnNode of this.slotColumnToTween) {

                //開始執行動畫
                cc.tween(columnNode)
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

    /**
     * Loop 老虎機方法
     * @return {Promise<void>}
     */
    public runSlotAnimation(): Promise<void> {

        return new Promise<void>((resolve) => {
            //拿取該slot有幾列
            let columnLength = this.slotColumnToTween.length;
            //播放slot轉動音校
            fcc.audioMgr.effectPlay("SlotTurn");
            for (let i = 0; i < columnLength; i++) {
                //如果當前為最後一列,將異步阻塞傳出去
                if (i == columnLength - 1) {
                    this.executeSlotAnimation(i, resolve);
                    return;
                }
                this.executeSlotAnimation(i);
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
    protected executeSlotAnimation(index: number, resolve?: () => void, numberOfTimes: number = 0) {
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration: number = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio;
        let node: cc.Node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, {y: node.y - this.rowData[1]})
            .call(() => {
                //如果該列不是第一列,且有瞇排事件,當他的上一輪轉完,推撥打開瞇排的事件
                if (index != 0 && this.checkLookAt(index) && this.isSlotEnd[index - 1]) {
                    if (!this.isSpeedUp) {
                        this.notifyLookAtEvent(true, index);
                    }
                }
                //更新被Mask的Grid,將之移動到原位子
                this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(index), index);
                //如果server有回傳答案,將可進入停軸判斷
                if (this.isResultOK) {
                    // 假如當前需要即停,將直接停止slot
                    if (this.isCanStop(index, resolve)) return;
                    numberOfTimes++;
                    if (index == 0 && numberOfTimes == this.getSlotTurnCount(index)) {
                        //如果當前是第一列,將判斷是否已達到需轉動的次數
                        this.showAnswer(index);
                        this.isSlotEnd[index] = true;
                    } else if (
                        index != 0 &&
                        this.isSlotEnd[index - 1] &&
                        numberOfTimes == this.getSlotTurnCount(index)
                    ) {
                        //如果當前不是第一列,且上一列已經停止時,將判斷該列是否已達到需轉動的次數
                        this.showAnswer(index, resolve);
                        this.isSlotEnd[index] = true;
                        //判斷該列是否有瞇排事件,如果有,將推播關閉瞇排事件
                        if (this.checkLookAt(index)) {
                            if (!this.isSpeedUp) {
                                this.notifyLookAtEvent(false, index);
                            }
                        }
                    } else {
                        //無達成上述條件,持續轉動
                        this.executeSlotAnimation(index, resolve, numberOfTimes);
                    }
                } else {
                    //server還沒回傳答案,持續轉動
                    this.executeSlotAnimation(index, resolve, numberOfTimes);
                }
            })
            .start();
    }

    /**
     * 拿取該要跑的次數
     * @param index - 哪一列
     * @return {number} - 該列要Loop的數字
     * @private
     */
    protected getSlotTurnCount(index: number): number {
        let count: number;
        if (this.isSpeedUp) {
            //如果是加速狀態,全軸一起停止
            count = this.slotTurnCount;
        } else if (this.checkLookAt(index)) {
            //如果有瞇排事件,增加該軸的轉動次數
            let totalCount = 0;
            if (index != 0) {
                totalCount = this.rowTurnCount[index - 1]
            }
            count = this.lookAtCount + totalCount;
        } else {
            //如果是一般狀態,每列都多一輪的轉動時間
            count = this.slotTurnCount + index;
        }
        if (!this.rowTurnCount[index]) {
            this.rowTurnCount[index] = count
        }
        return count;
    }

    /**
     * 推送瞇排事件
     * @param {boolean} isShow - 是否要打開該列的瞇排特效
     * @param {number} index - 第幾列
     */
    protected notifyLookAtEvent(isShow: boolean, index: number) {
        fcc.notificationMgr<ScrollFocusStateNotification>()
            .getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE)
            .notify(index, isShow)
    }

    /**
     * 檢查是否可以即停
     * @param {number} index - 當前第幾列觸發即停事件
     * @param {() => void} resolve - 異步阻塞
     * @return {boolean}
     */
    protected isCanStop(index: number, resolve: () => void): boolean {
        //如果即停事件觸發
        if (this.isSlotImmediateStop) {
            if (index == this.slotColumnToTween.length - 1) {
                //最後一輪才將異步阻塞傳出去
                this.showAnswer(index, resolve);
            } else {
                //其他輪只傳index
                this.showAnswer(index);
            }
            //將該軸狀態更新為結束
            this.isSlotEnd[index] = true;
            //如果有瞇排事件,關閉瞇排事件
            if (this.checkLookAt(index)) {
                this.notifyLookAtEvent(false, index);
            }
            return true;
        }
        return false;
    }

    /**
     * 更新輪播格子位置
     * @param rowNodes - 哪一列的 node 需要更換圖片位置
     * @param columnIndex - 當前是第幾列
     */
    protected updateGridPositionAndRandomImg(rowNodes: Array<cc.Node>, columnIndex: number) {
        //獲取該列物件長度
        let rowLength = rowNodes.length - 1;
        //隨機數字
        let random: number;
        //最後一個sprite
        let lastSprite: cc.Sprite;
        for (let i = 0; i < this.rowData[0]; i++) {
            //獲取該列最後一個sprite
            lastSprite = this.gridSpriteToMap.get(columnIndex)[rowLength];
            //將該列的陣列中的最後一個sprite,複製到該陣列的第一個位置
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
     * 對該列正確結果顯示在頂部,透過動畫,並將結果顯示給user
     * @param {number} index : 哪一列
     * @param resolve
     */
    protected showAnswer(index: number, resolve?) {
        //更新正確答案 答案更新再每列最上面位置
        this.updateGridAnswer(index);
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration = this.slotGirdSpeed * this.rowData[0] / this.speedRatio;
        let node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, {y: node.y - this.rowData[1]})
            .call(() => {
                //更新被Mask的Grid,將之移動到原位子
                this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(index), index);
                //給予彈跳動畫
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
    protected checkLookAt(index: number): boolean {
        let lookAt: Array<number>;
        let isShowLookAt: boolean;
        if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
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
    protected sineOutAnimation(index: number, resolve: () => void) {
        if (this.isSpeedUp || this.isSlotImmediateStop) {
            //如果當前是瞇排或是即停狀態,將只對最後一軸結束時才播放停軸音效
            if (index == this.slotColumnToTween.length - 1) {
                fcc.audioMgr.effectPlay("SlotStop");
            }
        } else {
            //各軸停止皆有音效
            fcc.audioMgr.effectPlay("SlotStop");
        }

        /*關閉轉動音效*/
        if (index === this.slotColumnToTween.length - 1) {
            fcc.audioMgr.effectStop("SlotTurn");
        }

        //獲取該Slot格子高度的一半
        let sineOutHeight = Math.floor(this.styleData.slotGridHeight / 2);
        let node = this.slotColumnToTween[index];
        cc.tween(node)
            .to((this.slotGirdSpeed), {y: node.y - sineOutHeight})
            .by(this.slotGirdSpeed * 6, {y: +sineOutHeight}, {easing: 'bounceOut'})
            .call(() => {
                this.checkFreeIconToMusic(index);
                if (index === this.slotColumnToTween.length - 1) {
                    resolve();
                }
            })
            .start();
    }

    /**
     * 確認當前答案是否有Free圖標,如果有將播放該數量的音效
     * @param index
     */
    protected checkFreeIconToMusic(index) {
        let gridAnswer: Array<number>;
        if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
            gridAnswer = this.freeResult.Grid;
        } else {
            gridAnswer = this.normalResult.Grid;
        }
        let start = index * this.slotRowGridCount;
        let end = start + this.slotRowGridCount;
        for (start; start < end; start++) {
            if (gridAnswer[start] == 10) {
                this.freeIconCount++;
                //如果非加速模式,對個別列疊播放數量增加時的音樂
                if (!this.isSpeedUp || !this.isSlotImmediateStop) {
                    fcc.audioMgr.effectPlay(
                        `getFreeIcon${this.freeIconCount}`
                    );
                }
            }
        }
        //如果是加速模式,直接拿取該slot中Free總數量需播放的音樂
        if (this.isSpeedUp && this.freeIconCount >= 1
            && index == this.slotColumnToTween.length - 1) {
            fcc.audioMgr.effectPlay(
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
    protected updateGridAnswer(index: number) {
        let gridAnswer: Array<number>;
        if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
            gridAnswer = this.freeResult.Grid;
        } else {
            gridAnswer = this.normalResult.Grid;
        }
        let start = index * this.slotRowGridCount;
        let end = start + this.slotRowGridCount;
        let gridIndex = 0;
        for (start; start < end; start++) {
            let answer = String(gridAnswer[start]);
            this.gridSpriteToMap
                .get(index)[gridIndex]
                .spriteFrame = this.gridImg.get(answer);
            gridIndex++;
        }
    }

    /**
     * 初始化該輪所有狀態
     */
    public initializeState() {
        this.isSlotImmediateStop = false;
        this.isSpeedUp = this.speedRatio > 1;
        this.freeIconCount = 0;
        this.isResultOK = false;
        this.rowTurnCount.length = 0;
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
