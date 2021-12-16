"use strict";
cc._RF.push(module, '4bce11ddqRA8LWwkiGlejRG', 'PublicSetUp');
// script/Socket/PublicSetUp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PublicSetUp = /** @class */ (function () {
    function PublicSetUp() {
    }
    //遊戲名稱
    PublicSetUp.GameName = 84;
    //主遊戲場景Scene名稱
    PublicSetUp.MainGameSceneName = "Main_GameScene";
    //cavers設計寬度
    PublicSetUp.DesignWidth = 1280;
    //cavers設計高度
    PublicSetUp.DesignHeight = 720;
    //通知server已進入大廳用Object
    PublicSetUp.SlotTableInfo = {};
    //紀錄
    PublicSetUp.GetGameHistoryResult = {};
    //進入房間資訊
    PublicSetUp.TableInfo = {};
    //一般模式獲獎資訊
    PublicSetUp.BetResult = {};
    //免費模式獲獎資訊
    PublicSetUp.FreeSpinResult = {};
    //免費模式該語系Logo
    PublicSetUp.freeLogoSkeleton = {};
    //免費模式結算畫面該語系Logo
    PublicSetUp.freeEndTitleImg = [];
    //音樂載入存放位置
    PublicSetUp.musicToMap = {};
    //各語系文字大小
    PublicSetUp.lang_fontSize = {
        USD: 30,
        NTD: 36,
        CNY: 36,
        VND: 30,
    };
    //各語系文字高度
    PublicSetUp.lang_lineHeight = {
        USD: 40,
        NTD: 46,
        CNY: 46,
        VND: 40,
    };
    //各語系文字比例
    PublicSetUp.lang_txtSacle = {
        USD: 1,
        NTD: 1,
        CNY: 1,
        VND: 1,
    };
    //各語系文字字體
    PublicSetUp.lang_fontFamily = {
        USD: "微軟正黑體",
        NTD: "微軟正黑體",
        CNY: "微軟正黑體",
        VND: "Arial Unicode MS,Arial",
    };
    //初始化該語系狀態
    PublicSetUp.lang_LabelSetting = {
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
    return PublicSetUp;
}());
exports.default = PublicSetUp;

cc._RF.pop();