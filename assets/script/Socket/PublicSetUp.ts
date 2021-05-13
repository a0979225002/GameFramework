// GAME 共用參數
import array = cc.js.array;

export default class PublicSetUp {

    //遊戲名稱
    static GameName: number = 84;
    static userPoint: number;
    //該次遊戲序號
    static GroupID: number;
    //主遊戲場景Scene名稱
    static MainGameSceneName: string = "Main_GameScene";
    //cavers設計寬度
    static DesignWidth: number = 1280;
    //cavers設計高度
    static DesignHeight: number = 720;
    //通知server已進入大廳用Object
    static SlotTableInfo: object = {};
    //紀錄
    static GetGameHistoryResult: object = {};
    //進入房間資訊
    static TableInfo: object = {};
    //一般模式獲獎資訊
    static BetResult: object = {};
    //免費模式獲獎資訊
    static FreeSpinResult: object = {};
    //免費模式該語系Logo
    static freeLogoSkeleton: object = {};
    //免費模式結算畫面該語系Logo
    static freeEndTitleImg: array = [];
    //音樂載入存放位置
    static musicToMap: object = {};

    //----------------------------------------
    static JoinRoom: string;
    static Ratio: number;
    static GameLobbyName: string;
    static CaiShenTableInfo: object;


    //各語系文字大小
    static lang_fontSize: object = {
        USD: 30,
        NTD: 36,
        CNY: 36,
        VND: 30,
    };

    //各語系文字高度
    static lang_lineHeight: object = {
        USD: 40,
        NTD: 46,
        CNY: 46,
        VND: 40,
    };

    //各語系文字比例
    static lang_txtSacle: object = {
        USD: 1,
        NTD: 1,
        CNY: 1,
        VND: 1,
    };

    //各語系文字字體
    static lang_fontFamily: object = {
        USD: "微軟正黑體",
        NTD: "微軟正黑體",
        CNY: "微軟正黑體",
        VND: "Arial Unicode MS,Arial",
    };

    //初始化該語系狀態
    static lang_LabelSetting: object = {
        CNY: {
            fontSize: 36,
            lineHeight: 46,
            txtSacle: {
                default: 1,
                Title: 1.2,
                Text: 0.8
            },
            fontFamily: "微軟正黑體"
        },
        NTD: {
            fontSize: 36,
            lineHeight: 46,
            txtSacle: {
                default: 1,
                Title: 1.2,
                Text: 0.8
            },
            fontFamily: "微軟正黑體"
        },
        USD: {
            fontSize: 30,
            lineHeight: 40,
            txtSacle: {
                default: 1,
                Title: 1.2,
                Text: 0.8
            },
            fontFamily: "Arial Unicode MS,Arial"
        },
        VND: {
            fontSize: 30,
            lineHeight: 40,
            txtSacle: {
                default: 1,
                Title: 1.2,
                Text: 0.8
            },
            fontFamily: "Arial Unicode MS,Arial"
        },
        THB: {
            fontSize: 30,
            lineHeight: 46,
            txtSacle: {
                default: 1,
                Title: 1.2,
                Text: 0.8
            },
            fontFamily: "Arial Unicode MS,Arial"
        }
    };
}