import ScrollFocusStateNotification from "../../../Event/Notification/GameNotification/ScrollFocusStateNotification";
import SlotRowEndNotification from "../../../Event/Notification/GameNotification/SlotRowEndNotification";
import {fcc} from "../../../System/FCCSystem";
import ABaseSlotTemplate from "../BaseSlot/ABaseSlotTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,可更改各軸停止時間
 *  ```
 *      SLOT STYLE : fcc.NormalSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          推播 {SlotRowEndNotification} : 所有軸停止事件
 *          接收 {StopNowStateNotification} : 即停的推播事件
 *          接收 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {ISlotBaseResultModel} : 一般獲獎model
 *          model {ISlotBaseResultModel} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default class NormalTemplate<T extends fcc.NormalSetting> extends ABaseSlotTemplate<T> {

    /**
     * 一般停止最少轉動次數
     * @type {number}
     * @private
     */
    protected readonly slotTurnCount: number;

    /**
     * 各軸間停止時間
     * @type {number}
     * @protected
     */
    protected readonly slotRowTime: number;

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
     * 瞇排停止時間
     */
    protected readonly lookAtTime: number;

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
     * 漸入時TWEEN動畫類型
     */
    protected readonly sineInEasing: string;

    /**
     * 淡出時TWEEN 動畫類型
     */
    protected readonly sineOutEasing: string;

    /**
     * 瞇排轉動速度
     * ```
     *  公式
     *      如果要加快轉動速度
     *          = 每格格子移動速度 例如 : 0.08 秒一格
     *      如果要降低轉動速度
     *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
     * ```
     * @type {number}
     * @protected
     */
    protected readonly lookAtSpeed: number;

    /**
     * 遊戲每列是否已經結束
     * @type {Array<boolean>}
     * @private
     */
    protected readonly isSlotEnd: Array<boolean>;

    /**
     * 遊戲各列是否開始監聽停止時間
     */
    protected readonly isTimeEndListener: Array<boolean>;

    /**
     * 遊戲即停時加速倍率
     * @type {number}
     * @private
     */
    protected readonly stopNowSpeedMultiple: number;

    /**
     * 遊戲瞇排是否已經確認過
     */
    protected readonly isRowCheckLookAt: Map<number, boolean>;

    /**
     * 儲存SERVER答案的Model
     * @type {ISlotBaseResultModel}
     * @private
     */
    protected resultModel: fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult;

    /**
     * 當前停軸監聽
     * @type {number}
     * @private
     */
    private nowTimer: number;


    public constructor(styleData: T, configManager: fcc.IF.ISlotConfigManager) {
        super(styleData, configManager);
        if (!styleData) return;
        this.styleData = styleData;                                                     //拿取設定檔
        this.slotRowTime = styleData.slotRowTime                                        //SLOT各軸停止間格
        this.slotTurnCount = styleData.slotTurnCount;                                   //拿取一般停止最少轉動次數
        this.slotGirdSpeed = styleData.slotGirdSpeed;                                   //拿取遊戲每格格子間的速度
        this.slotRowGridCount = styleData.slotRowGridCount;                             //拿取遊戲每列的格子數量
        this.slotGridHeight = styleData.slotGridHeight;                                 //拿取老虎機格子高度
        this.speedUpMultiple = styleData.speedUpMultiple;                               //拿取加速倍率
        this.slotColumnToTween = styleData.slotColumnToTween;                           //拿取執行老虎機動畫的列
        this.gridNodeToMap = styleData.gridNodeToMap;                                   //拿取跑遊戲更換位置的grid 節點
        this.gridSpriteToMap = styleData.gridSpriteToMap;                               //拿取跑遊戲更換答案的grid Node
        this.gridImg = styleData.gridImg;                                               //拿取Slot格子的所有圖案
        this.sineInEasing = styleData.sineInEasing;                                     //拿取漸入時TWEEN動畫類型
        this.sineOutEasing = styleData.sineOutEasing;                                   //拿取淡出時TWEEN動畫類型
        this.lookAtSpeed = styleData.lookAtSpeed;                                       //拿取瞇排的加速度
        this.resultModel = styleData.resultModule;                                      //拿取SERVER答案的Model
        this.lookAtTime = styleData.lookAtTime ?? 1;                                    //拿取瞇排時間
        this.stopNowSpeedMultiple = styleData.stopNowSpeedMultiple                      //拿取遊戲即停時加速倍率
        this.isSlotEnd = new Array<boolean>();                                          //遊戲每列是否已經結束
        this.isTimeEndListener = new Array<boolean>();                                  //遊戲各列是否開始監聽停止時間
        this.isRowCheckLookAt = new Map<number, boolean>();                             //該列是否已確認過是否需要瞇排
        this.initializeState();                                                         //初始化該輪所有狀態
    }

    /**
     * 轉動前動畫,先往上,在往下1/2格
     * @return {Promise<void>}
     */
    public sineInSlot(): Promise<void> {
        //計算往上的高度
        let sineInHeight = Math.floor(this.styleData.slotGridHeight / 2);
        return new Promise<void>((resolve) => {
            let index = 0
            const duration: number = this.slotGirdSpeed;
            for (let columnNode of this.slotColumnToTween) {
                //開始執行動畫
                cc.tween(columnNode)
                    .to((duration * 1.5), {y: columnNode.y + sineInHeight}, {easing: this.sineInEasing})
                    .by(duration, {y: -sineInHeight})
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
    @fcc.Effect("SlotTurn")
    public runSlotAnimation(): Promise<void> {
        return new Promise<void>((resolve) => {
            //拿取該slot有幾列
            let columnLength = this.slotColumnToTween.length;
            for (let i = 0; i < columnLength; i++) {
                //如果當前為最後一列,參數增加解除異步阻塞方法
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
     * @param numberOfTimes 監聽第一列跑了幾輪,sever回傳答案後才開始計算圈數
     */
    protected executeSlotAnimation(index: number, resolve?: () => void, numberOfTimes: number = 0): void {
        //緩動時間 = 當前一個格子的跑速 / 當前是否加速(無加速 = 1)
        let duration: number = this.slotGirdSpeed / this.speedRatio;
        //瞇排速率
        if (index > 0) {
            //判斷當前軸是否為瞇排軸,如果是,將更換為瞇排軸速度
            if (this.isSlotEnd[index - 1] && this.resultModel.LookAt[index]) {
                duration = this.slotGirdSpeed * this.lookAtSpeed;
            }
        }
        /*拿取該列,目的:對該列執行LOOP事件*/
        const node: cc.Node = this.slotColumnToTween[index];
        const rowEndCount = this.slotTurnCount * this.slotRowGridCount;
        //遞回 LOOP
        cc.tween(node)
            .to(duration, {y: node.y - this.slotGridHeight})
            .call(() => {
                //更新被Mask的Grid,將之移動到原位子
                this.updateOnlyGridPositionAndRandomImg(this.gridNodeToMap.get(index), index);
                //如果server有回傳答案,將可進入停軸判斷
                if (this.isResultOK) {
                    /*假如當前需要即停,將直接停止slot*/
                    if (this.checkImmediateStopState(index, resolve)) return;
                    /*瞇排事件*/
                    if (index != 0 && this.isSlotEnd[index - 1] && !this.isSpeedUp) {
                        if (this.checkLookAt(index)) {
                            //如果該列不是第一列,且有瞇排事件,當他的上一輪轉完,推撥打開瞇排的事件
                            this.notifyLookAtEvent(true, index);
                        }
                    } else if (index == 0 && this.checkLookAt(index) && !this.isSpeedUp) {
                        //如果是第一列,且有瞇排事件,推撥打開瞇排的事件
                        this.notifyLookAtEvent(true, index);
                    }

                    if (numberOfTimes < rowEndCount) {
                        //如果當前尚未達到需轉動的次數,持續計算
                        numberOfTimes++;
                    }

                    if (index == 0 && numberOfTimes == rowEndCount) {
                        //判斷第一列
                        //判斷該列是否有瞇排事件,如果有,將推播關閉瞇排的事件
                        if (this.resultModel.LookAt[index] == 1) {
                            if (!this.isSpeedUp) {
                                this.notifyLookAtEvent(false, index);
                            }
                        }
                        this.isSlotEnd[index] = true;
                        this.isTimeEndListener[index] = true;
                        //如果當前是第一列,已達到需轉動的次數
                        this.showAnswerAnimation(false, index);
                        //如檔當前非加速狀態,打開下一列的Timer
                        if (!this.isSpeedUp) {
                            this.startRowTimeListener(index + 1);
                        }
                    } else if (index != 0 && numberOfTimes == rowEndCount && this.isSpeedUp) {
                        //如果當前不是第一列,且是加速狀態,
                        this.isSlotEnd[index] = true;
                        //執行顯示結果動畫
                        this.showAnswerAnimation(false, index, resolve);
                    } else if (index != 0 && this.isSlotEnd[index] && !this.isSpeedUp) {
                        //如果當前不是第一列,且並非加速狀態,該列已經可以停止時
                        if (index != this.slotColumnToTween.length - 1) {
                            //打開下一列的Timer
                            this.startRowTimeListener(index + 1);
                        }
                        //執行顯示結果動畫
                        this.showAnswerAnimation(false, index, resolve);
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
     * 開啟時間監聽,當符合該時間時會改變 結束狀態為TRUE;
     * @protected
     */
    protected startRowTimeListener(index: number) {
        if (this.isTimeEndListener[index]) return;
        this.isTimeEndListener[index] = true;
        let timeOut: number;
        /*檢查該軸是否有需要瞇排,將會更換為瞇排時間*/
        if (this.resultModel.LookAt[index]) {
            timeOut = this.lookAtTime;
        } else {
            timeOut = this.slotRowTime;
        }
        this.nowTimer = window.setTimeout(() => {
            this.isSlotEnd[index] = true;
        }, timeOut);
    }

    /**
     * 更新單個GRID格子位置,並給予隨機圖片
     * @param rowNodes - 要更換圖片的該列物件
     * @param rowIndex - 當前是第幾列
     */
    protected updateOnlyGridPositionAndRandomImg(rowNodes: Array<cc.Node>, rowIndex: number) {
        //獲取該列物件長度
        let rowLength = rowNodes.length - 1;
        //隨機數字
        let random: number;
        //最後一個sprite
        let lastSprite: cc.Sprite;
        //獲取該列最後一個sprite
        lastSprite = this.gridSpriteToMap.get(rowIndex)[rowLength];
        //將該列的陣列中的最後一個sprite,複製到該陣列的第一個位置
        this.gridSpriteToMap.get(rowIndex).unshift(lastSprite);
        //刪除陣列中的最後一個 sprite 節點
        this.gridSpriteToMap.get(rowIndex).pop();
        //隨機一個數字
        random = Math.floor(Math.random() * this.gridImg.size);
        this.gridSpriteToMap.get(rowIndex)[0].spriteFrame =
            this.gridImg.get(String(random));
        //重新給予最後一個陣列中的node 更新 y 位置
        rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight;
        //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置
        rowNodes.unshift(rowNodes[rowLength]);
        //刪除陣列中的最後一個 node 節點
        rowNodes.pop();
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
    protected checkImmediateStopState(index: number, resolve: () => void): boolean {
        //如果即停事件觸發
        if (this.isSlotImmediateStop) {
            //清空計時器事件
            if (this.nowTimer) {
                window.clearTimeout(this.nowTimer);
                this.nowTimer = null;
            }
            if (index == this.slotColumnToTween.length - 1) {
                //最後一輪才將異步阻塞傳出去
                this.showAnswerAnimation(true, index, resolve);
            } else {
                //其他輪只傳index
                this.showAnswerAnimation(true, index);
            }
            //將該軸狀態更新為結束
            this.isSlotEnd[index] = true;
            //判斷該列是否有瞇排事件,如果有,將推播關閉瞇排的事件
            if (this.resultModel.LookAt[index] == 1) {
                this.notifyLookAtEvent(false, index);
            }
            return true;
        }
        return false;
    }

    /**
     * 對該列正確結果顯示在頂部,透過動畫,並將結果顯示給user
     * @param {boolean} isImmediateStopState - 是否為即停
     * @param {number} index - 哪一列
     * @param resolve
     */
    protected showAnswerAnimation(isImmediateStopState: boolean, index: number, resolve?) {
        //更新正確答案 答案更新再每列最上面位置
        this.updateGridAnswer(index)
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio;

        //判斷該列是否有瞇排事件,如果有,將給予瞇排倍率
        if (this.resultModel.LookAt[index] == 1) {
            duration = this.slotGirdSpeed * this.slotRowGridCount * this.lookAtSpeed;
        }

        //判斷是否即停,如果有,將給予即停加速倍率
        if (isImmediateStopState) {
            duration = this.slotGirdSpeed * this.slotRowGridCount / this.stopNowSpeedMultiple;
        }

        const node = this.slotColumnToTween[index];
        const rowHeight = this.slotRowGridCount * this.slotGridHeight;
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, {y: node.y - rowHeight})
            .call(() => {
                //判斷該列是否有瞇排事件,如果有,將推播關閉瞇排的事件
                if (this.resultModel.LookAt[index] == 1) {
                    if (!this.isSpeedUp) {
                        this.notifyLookAtEvent(false, index);
                    }
                }
                //更新被Mask的Grid,將之移動到原位子,這裡一次移動所有格子
                for (let i = 0; i < this.slotRowGridCount; i++) {
                    this.updateOnlyGridPositionAndRandomImg(this.gridNodeToMap.get(index), index);
                }
                //給予結束動畫
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
        let isShowLookAt: boolean = false;
        if (!this.isRowCheckLookAt.get(index)) {
            this.isRowCheckLookAt.set(index, true);
            isShowLookAt = !!this.resultModel.LookAt[index];
        }
        return isShowLookAt;
    }

    /**
     * 在答案顯示後,馬上給予回彈效果
     * @param index{number} : 哪一列已經顯示答案完畢
     * @param resolve{()=>void} : 當所有列都顯示答案且回彈效果完畢時,通知可以進行下一步
     */
    protected sineOutAnimation(index: number, resolve: () => void) {
        if (this.isSpeedUp || this.isSlotImmediateStop) {
            //如果當前是加速或是即停狀態,將只對最後一軸結束時才播放停軸音效
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

        //確認當前SLOT 各列是否為分開停止
        let isAllRowEnd = false;
        if (this.isSlotImmediateStop || this.isSpeedUp) {
            isAllRowEnd = true;
        }
        /*推播該軸執行完事件*/
        fcc.notificationMgr<SlotRowEndNotification>()
            .getNotification(fcc.type.NotificationType.SLOT_ROW_END)
            .notify(index, isAllRowEnd);

        const duration: number = this.slotGirdSpeed;
        cc.tween(node)
            .to(duration, {y: node.y - sineOutHeight})
            .by(duration * 6, {y: +sineOutHeight}, {easing: this.sineOutEasing})
            .call(() => {
                if (index === this.slotColumnToTween.length - 1) {
                    resolve();
                }
            })
            .start();
    }

    /**
     * 更新正確答案
     * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
     * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
     * @private
     */
    protected updateGridAnswer(index: number) {
        let start = index * this.slotRowGridCount;
        let end = start + this.slotRowGridCount;
        let gridIndex = 0;
        for (start; start < end; start++) {
            let answer = String(this.resultModel.Grid[start]);
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
        this.isResultOK = false;
        this.nowTimer = null;
        this.isRowCheckLookAt.clear();

        /*是否已經啟動各軸停軸時間結束事件*/
        if (this.isTimeEndListener.length == 0) {
            //如果第一次生成,初始該SLOT列所有結束狀態為false
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isTimeEndListener.push(false);
            }
        } else {
            //如果array內有值時,復原該array內所有所有資料狀態為false
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isTimeEndListener[i] = false;
            }
        }

        /*各軸是否已經結束LOOP*/
        if (this.isSlotEnd.length == 0) {
            //如果第一次生成,初始該SLOT列所有結束狀態為false
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd.push(false);
            }
        } else {
            //如果array內有值時,復原該array內所有所有資料狀態為false
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd[i] = false;
            }
        }
    }
}
