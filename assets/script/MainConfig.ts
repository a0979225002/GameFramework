import ccclass = cc._decorator.ccclass;
import {AutoType, LanguageType} from "./Framework/Config/Enum/ConfigEnum";
import SlotConfigManager from "./Framework/Config/SlotConfigManager";
import ASlotConfig from "./Framework/Template/Config/ASlotConfig";
import {ResponseType} from "./Framework/WebResponse/Enum/ResponseType";
import ResponseHandler from "./Framework/WebResponse/ResponseHandler";
import NoLineFreeResult from "./Framework/WebResponse/SeverDataModel/FreeResult/NoLineFreeResult";
import NoLineResult from "./Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult";
import NoLineTableInfo from "./Framework/WebResponse/SeverDataModel/TableInfo/NoLineTableInfo";
import {WebResponseManager} from "./Framework/WebResponse/WebResponseManager";

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲載入資源前,對整個遊戲的初始簡易設定
 * @Date 2021-06-01 下午 04:57
 * @Version 1.0
 */
@ccclass
export default class MainConfig extends ASlotConfig {
    protected onCreat() {
    }

    /**
     * 初始化當前遊戲
     */
    protected configSetting() {
        SlotConfigManager.instance
            .setAutoCont(AutoType.auto)                         //初始自動次數 AutoType Enum
            .setAutoState(false)                                //自動開關
            .setUserBet(0)                                      //初始玩家押注倍率
            .setSpeedState(false)                               //加速開關
            .setMusicOnMute(false)                              //是否關閉背景音
            .setEffectOnMute(false)                             //是否關閉效果音
            .setGameNumber(84)                                  //遊戲名稱
            .setMusicVolume(1)                                  //初始默認背景音量
            .setEffectVolume(1)                                 //初始默認效果音量
            .setLanguage(LanguageType.America)                  //測試時才有用,當有PHP檔案蓋過WebRequest類時此參數將自動失效
            .setExternallyLoadURL("http://10.10.0.47/games")    //同上
            .setFrameWorkDebug(false)                           //正式上線時關閉
            .builder();
    }

    /**
     * 遊戲network response model;
     */
    protected ResponseDataModelSetting() {

        //初始化一般狀態json接收保存model
        let normalResponse = new ResponseHandler<NoLineResult>(NoLineResult);
        //初始化免費狀態json接收保存model
        let freeResponse = new ResponseHandler<NoLineFreeResult>(NoLineFreeResult);
        //初始化遊戲初始資訊json接收保存model
        let tableInfoResponse = new ResponseHandler<NoLineTableInfo>(NoLineTableInfo);

        WebResponseManager
            .instance<NoLineResult>()
            .setResponseModule(ResponseType.NORMAL, normalResponse);
        WebResponseManager
            .instance<NoLineFreeResult>()
            .setResponseModule(ResponseType.FREE, freeResponse);
        WebResponseManager
            .instance<NoLineTableInfo>()
            .setResponseModule(ResponseType.TABLE_INFO, tableInfoResponse);
    }
}