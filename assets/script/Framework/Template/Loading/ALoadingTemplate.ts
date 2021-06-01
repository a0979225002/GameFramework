import {socketJS} from '../../../Socket/Socket'
import SlotConfigManager from '../../Config/SlotConfigManager'
import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import {ServerEventType} from '../../Listener/Enum/ServerEventType'
import EventManager from '../../Listener/EventManager'
import {ResponseType} from "../../WebResponse/Enum/ResponseType";
import {WebResponseManager} from '../../WebResponse/WebResponseManager'
import OverrideComponent from "../OverrideComponent";

const {ccclass} = cc._decorator;

@ccclass
export default abstract class ALoadingTemplate extends OverrideComponent implements ILoadTemplate {

    private _canPlayGame: boolean;

    /**
     * 執行個人自定義設定
     * 注意,所有override的方法,皆不要放入這裡面
     */
    abstract onCreat();

    /**
     * 載入主資源
     */
    abstract onLoadResources();

    /**
     * 載入次資源
     */
    abstract loadAssetBundle();

    /**
     * 載入外部資源
     */
    abstract loadExternalScript();

    /**
     * 更新讀取條文字動畫
     */
    abstract updateProgressText();

    /**
     * 當前scene模式,更新當前畫面是配寬高
     */
    abstract sceneStyle();

    get canPlayGame(): boolean {
        return this._canPlayGame
    }

    protected onLoad() {
        this._canPlayGame = false;          //由 Server TableInfo Event 改變狀態
        this.tableInfoEvent.apply(this);    //TableInfo Event 事件
        socketJS.SFSLoad(SlotConfigManager.instance.gameNumber);
        ALoadingTemplate.updateUserIp();    //如果是正式上線,將自動更新拿取外部資源的IP
        this.onCreat();                     //自訂義初始 例:拿取node...
    }

    /**
     * 如果為上線模式,將會獲取外部IP,自動更新遊戲配置Config內的URL
     */
    private static updateUserIp() {

        if (!window.test) {
            let path =
                window.libraryPath && window.libraryPath != ""
                    ? window.libraryPath.replace(/\/([^\/]+\/[^\/]+)$/, "")
                    : "../..";
            // 打包與測試讀取不同路徑
            SlotConfigManager.instance.setExternallyLoadURL(path);
        }
    }

    protected start() {
        this.sceneStyle();
        this.loadExternalScript();          //外部資源
        this.onLoadResources();             //載入資源方法
        this.loadAssetBundle();             //次資源
        this.updateProgressText();          //更新讀取條文字
    }

    /**
     * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
     */
    private tableInfoEvent() {
        EventManager.instance.serverEventListener(
            ServerEventType.TABLE_INFO, (target) => {
                let tableInfo = WebResponseManager.instance<ITableInfoModel>().getResult(ResponseType.TABLE_INFO);
                for (let name of Object.keys(target)) {
                    if (tableInfo[name] === undefined) {
                        ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name} 無此參數,請更換 TableInfo Type`)
                    } else {
                        tableInfo[name] = target[name];
                    }
                }
                cc.log(WebResponseManager.instance<ITableInfoModel>().getResult(ResponseType.TABLE_INFO))
                this._canPlayGame = true;
            }, true);
    }
}