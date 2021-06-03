import {Effect} from '../../Framework/Audio/AudioManager'
import LoadResManager from '../../Framework/LoadResources/LoadResManager'
import {GameState} from '../../Framework/Process/Enum/GameState'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import ASlotInitializeTemplate from '../../Framework/Template/Slot/ASlotInitializeTemplate'
import {ResponseType} from "../../Framework/WebResponse/Enum/ResponseType";
import NoLineFreeResult from "../../Framework/WebResponse/Model/FreeResult/NoLineFreeResult";
import NoLineResult from "../../Framework/WebResponse/Model/NormalResult/NoLineResult";
import NoLineTableInfo from "../../Framework/WebResponse/Model/TableInfo/NoLineTableInfo";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'

const {ccclass, property} = cc._decorator;

@ccclass
export default class SlotController extends ASlotInitializeTemplate {

    @property(cc.Node)
    protected slotRow: cc.Node[] = [];
    @property(cc.AnimationClip)
    private gridAnimation: cc.AnimationClip[] = [];
    protected gridNodeToMap: Map<number, Array<cc.Node>>;
    protected girdSpriteToMap: Map<number, Array<cc.Sprite>>;
    protected normalResult: NoLineResult;
    protected freeResult: NoLineFreeResult;
    private tableInfo:NoLineTableInfo;
    public static instance: SlotController;

    protected onCreate() {
        SlotController.instance = this;
        this.normalResult =
            WebResponseManager
                .instance<NoLineResult>()
                .getResult(ResponseType.NORMAL);
        this.freeResult =
            WebResponseManager
                .instance<NoLineFreeResult>()
                .getResult(ResponseType.FREE);
        this.tableInfo =
            WebResponseManager
                .instance<NoLineTableInfo>()
                .getResult(ResponseType.TABLE_INFO);
        this.gridNodeToMap = this.getAllGridNode();
        this.girdSpriteToMap = this.getAllGridSprite();
    }

    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    protected slotStyleSetting() {
        SlotStyleManager.instance
            .setSlotTemplate(NoLineSlot)                                 //執行的class
            .setSlotGirdSpeed(0.08)                                      //遊戲一般速度
            .setSlotGridHeight(170)                                      //老虎機格子高度
            .setSlotRowGridCount(3)                                      //老虎機每列格子數
            .setSlotTurnCount(2)                                         //一般停止最少轉動次數
            .setSpeedUpMultiple(2)                                       //加速倍率
            .slotColumnToTween(this.slotRow)                             //執行老虎機動畫的列
            .setGridNodeToMap(this.gridNodeToMap)                        //執行動畫的所有格子
            .setGirdSpriteToMap(this.girdSpriteToMap)                    //更換圖片的所有格子
            .setGridImg(LoadResManager.instance.imgRes.get("gridImg"))   //遊戲中grid的所有格子
            .build();                                                    //實例化setSlotTemplate參數內的Class
    }

    /**
     * 更新所有grid 隨機圖片
     * 如果每列的3~5格格子需要顯示 TableInfo 回傳回來的初始grid答案
     * @private
     */
    protected slotInitialize() {
        let arrayToSprites: IterableIterator<Array<cc.Sprite>> = this.girdSpriteToMap.values();
        let imgLength = LoadResManager.instance.imgRes.get("gridImg").size;
        let gridIndex;
        let answerIndex = 0;
        for (let sprites of arrayToSprites) {
            gridIndex = 0;
            for (let sprite of sprites) {
                let random: number = Math.floor(Math.random() * imgLength);
                //如果該格子是用來顯示初始答案的,將不更新隨機圖片
                if (gridIndex >= 3 && gridIndex <= 5) {
                    this.updateAnswerGrid(gridIndex, answerIndex);
                    answerIndex++;
                } else {
                    sprite.spriteFrame =
                        LoadResManager.instance.imgRes.get("gridImg").get(String(random));
                }
                gridIndex++;
            }
        }
    }

    /**
     * 更新 TableInfo 回傳回來的初始grid答案
     * @param {number} gridIndex
     * @param {number} answerIndex
     * @private
     */
    private updateAnswerGrid(gridIndex: number, answerIndex: number) {
        let rowIndex = Math.floor(answerIndex / 3);
        let answer: number = this.tableInfo.Grid[answerIndex];
        this.girdSpriteToMap
            .get(rowIndex)[gridIndex]
            .spriteFrame = LoadResManager.instance.imgRes.get("gridImg").get(String(answer));
    }

    /**
     * 拿取要跑grid輪播的Node
     * return Map<number , Array<cc.Node>>
     */
    protected getAllGridNode(): Map<number, Array<cc.Node>> {
        let grids: Map<number, Array<cc.Node>> = new Map<number, Array<cc.Node>>();
        for (let i = 0; i < this.slotRow.length; i++) {
            let nodes: Array<cc.Node> = this.slotRow[i].children;
            let nodeToArray: Array<cc.Node> = new Array<cc.Node>();
            for (let j = nodes.length - 1; j >= 0; j--) {
                nodeToArray.push(nodes[j]);
            }
            grids.set(i, nodeToArray);
        }
        return grids;
    }

    /**
     * 拿取所有要更改圖片的Grid
     */
    protected getAllGridSprite(): Map<number, Array<cc.Sprite>> {
        let sprites: Map<number, Array<cc.Sprite>> = new Map<number, Array<cc.Sprite>>();
        for (let i = 0; i < this.slotRow.length; i++) {
            let nodes = this.slotRow[i].children;
            let spriteToArray = new Array<cc.Sprite>();
            for (let j = nodes.length - 1; j >= 0; j--) {
                spriteToArray.push(nodes[j].children[0].getComponent(cc.Sprite));
            }
            sprites.set(i, spriteToArray);
        }
        return sprites;
    }

    private winGrid: Array<number>;
    private timer: number;
    private answerToArray: Array<number>;
    public showWinGrid(winGrid: Array<number>) {
        if (this.timer) clearInterval(this.timer);
        if (SlotGameManager.instance.gameState == GameState.FREEING) {
            this.answerToArray = this.freeResult.Grid;
        } else {
            this.answerToArray = this.normalResult.Grid;
        }
        this.winGrid = winGrid;
        this.playGridAnimation(this.answerToArray);
        this.timer = window.setInterval(() => {
            this.playGridAnimation(this.answerToArray);
        }, 1500);
    }

    @Effect("WinSingleLine")
    private playGridAnimation(answerToArray) {
        let columnIndex = 0;
        let gridIndex = 3;
        for (let i = 0; i < this.winGrid.length; i++) {
            if (gridIndex > 5) gridIndex = 3;
            columnIndex = Math.floor(i / 3);
            if (this.winGrid[i] == 1) {
                let anima = this.girdSpriteToMap
                    .get(columnIndex)[gridIndex].getComponent(cc.Animation);
                let answer = answerToArray[i];
                anima.addClip(this.gridAnimation[answer], `${answer}`);
                anima.play(String(answer));
            }
            gridIndex++;
        }
    }

    public closeWinGrid() {
        if (!this.winGrid && !this.timer) return;
        clearInterval(this.timer);
        let columnIndex = 0;
        let gridIndex = 3;
        for (let i = 0; i < this.winGrid.length; i++) {
            if (gridIndex > 5) gridIndex = 3;
            columnIndex = Math.floor(i / 3);
            if (this.winGrid[i] == 1) {
                let answer = this.answerToArray[i];
                let anima = this.girdSpriteToMap
                    .get(columnIndex)[gridIndex].getComponent(cc.Animation);
                anima.removeClip(this.gridAnimation[answer], true);
                this.girdSpriteToMap.get(columnIndex)[gridIndex].spriteFrame =
                    LoadResManager.instance.imgRes.get("gridImg").get(String(answer))
            }
            gridIndex++;
        }
        this.winGrid = null;
        this.timer = null;
    }
}