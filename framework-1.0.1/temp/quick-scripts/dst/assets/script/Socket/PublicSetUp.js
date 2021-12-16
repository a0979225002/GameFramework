
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Socket/PublicSetUp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTb2NrZXRcXFB1YmxpY1NldFVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7SUFBQTtJQXlIQSxDQUFDO0lBdkhHLE1BQU07SUFDQyxvQkFBUSxHQUFXLEVBQUUsQ0FBQztJQUc3QixjQUFjO0lBQ1AsNkJBQWlCLEdBQVcsZ0JBQWdCLENBQUM7SUFDcEQsWUFBWTtJQUNMLHVCQUFXLEdBQVcsSUFBSSxDQUFDO0lBQ2xDLFlBQVk7SUFDTCx3QkFBWSxHQUFXLEdBQUcsQ0FBQztJQUNsQyxzQkFBc0I7SUFDZix5QkFBYSxHQUFXLEVBQUUsQ0FBQztJQUNsQyxJQUFJO0lBQ0csZ0NBQW9CLEdBQVcsRUFBRSxDQUFDO0lBQ3pDLFFBQVE7SUFDRCxxQkFBUyxHQUFXLEVBQUUsQ0FBQztJQUM5QixVQUFVO0lBQ0gscUJBQVMsR0FBVyxFQUFFLENBQUM7SUFDOUIsVUFBVTtJQUNILDBCQUFjLEdBQVcsRUFBRSxDQUFDO0lBQ25DLGFBQWE7SUFDTiw0QkFBZ0IsR0FBVyxFQUFFLENBQUM7SUFDckMsaUJBQWlCO0lBQ1YsMkJBQWUsR0FBVSxFQUFFLENBQUM7SUFDbkMsVUFBVTtJQUNILHNCQUFVLEdBQVcsRUFBRSxDQUFDO0lBUy9CLFNBQVM7SUFDRix5QkFBYSxHQUFXO1FBQzNCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsRUFBRTtRQUNQLEdBQUcsRUFBRSxFQUFFO0tBQ1YsQ0FBQztJQUVGLFNBQVM7SUFDRiwyQkFBZSxHQUFXO1FBQzdCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsR0FBRyxFQUFFLEVBQUU7UUFDUCxHQUFHLEVBQUUsRUFBRTtRQUNQLEdBQUcsRUFBRSxFQUFFO0tBQ1YsQ0FBQztJQUVGLFNBQVM7SUFDRix5QkFBYSxHQUFXO1FBQzNCLEdBQUcsRUFBRSxDQUFDO1FBQ04sR0FBRyxFQUFFLENBQUM7UUFDTixHQUFHLEVBQUUsQ0FBQztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1QsQ0FBQztJQUVGLFNBQVM7SUFDRiwyQkFBZSxHQUFXO1FBQzdCLEdBQUcsRUFBRSxPQUFPO1FBQ1osR0FBRyxFQUFFLE9BQU87UUFDWixHQUFHLEVBQUUsT0FBTztRQUNaLEdBQUcsRUFBRSx3QkFBd0I7S0FDaEMsQ0FBQztJQUVGLFVBQVU7SUFDSCw2QkFBaUIsR0FBVztRQUMvQixHQUFHLEVBQUU7WUFDRCxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxHQUFHO2FBQ1o7WUFDRCxVQUFVLEVBQUUsT0FBTztTQUN0QjtRQUNELEdBQUcsRUFBRTtZQUNELFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLEdBQUc7YUFDWjtZQUNELFVBQVUsRUFBRSxPQUFPO1NBQ3RCO1FBQ0QsR0FBRyxFQUFFO1lBQ0QsUUFBUSxFQUFFLEVBQUU7WUFDWixVQUFVLEVBQUUsRUFBRTtZQUNkLFFBQVEsRUFBRTtnQkFDTixPQUFPLEVBQUUsQ0FBQztnQkFDVixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsR0FBRzthQUNaO1lBQ0QsVUFBVSxFQUFFLHdCQUF3QjtTQUN2QztRQUNELEdBQUcsRUFBRTtZQUNELFFBQVEsRUFBRSxFQUFFO1lBQ1osVUFBVSxFQUFFLEVBQUU7WUFDZCxRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFLENBQUM7Z0JBQ1YsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLEdBQUc7YUFDWjtZQUNELFVBQVUsRUFBRSx3QkFBd0I7U0FDdkM7UUFDRCxHQUFHLEVBQUU7WUFDRCxRQUFRLEVBQUUsRUFBRTtZQUNaLFVBQVUsRUFBRSxFQUFFO1lBQ2QsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRSxDQUFDO2dCQUNWLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxHQUFHO2FBQ1o7WUFDRCxVQUFVLEVBQUUsd0JBQXdCO1NBQ3ZDO0tBQ0osQ0FBQztJQUNOLGtCQUFDO0NBekhELEFBeUhDLElBQUE7a0JBekhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gR0FNRSDlhbHnlKjlj4PmlbhcclxuaW1wb3J0IGFycmF5ID0gY2MuanMuYXJyYXk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQdWJsaWNTZXRVcCB7XHJcblxyXG4gICAgLy/pgYrmiLLlkI3nqLFcclxuICAgIHN0YXRpYyBHYW1lTmFtZTogbnVtYmVyID0gODQ7XHJcbiAgICAvL+ipsuasoemBiuaIsuW6j+iZn1xyXG4gICAgc3RhdGljIEdyb3VwSUQ6IG51bWJlcjtcclxuICAgIC8v5Li76YGK5oiy5aC05pmvU2NlbmXlkI3nqLFcclxuICAgIHN0YXRpYyBNYWluR2FtZVNjZW5lTmFtZTogc3RyaW5nID0gXCJNYWluX0dhbWVTY2VuZVwiO1xyXG4gICAgLy9jYXZlcnPoqK3oqIjlr6zluqZcclxuICAgIHN0YXRpYyBEZXNpZ25XaWR0aDogbnVtYmVyID0gMTI4MDtcclxuICAgIC8vY2F2ZXJz6Kit6KiI6auY5bqmXHJcbiAgICBzdGF0aWMgRGVzaWduSGVpZ2h0OiBudW1iZXIgPSA3MjA7XHJcbiAgICAvL+mAmuefpXNlcnZlcuW3sumAsuWFpeWkp+W7s+eUqE9iamVjdFxyXG4gICAgc3RhdGljIFNsb3RUYWJsZUluZm86IG9iamVjdCA9IHt9O1xyXG4gICAgLy/ntIDpjIRcclxuICAgIHN0YXRpYyBHZXRHYW1lSGlzdG9yeVJlc3VsdDogb2JqZWN0ID0ge307XHJcbiAgICAvL+mAsuWFpeaIv+mWk+izh+ioilxyXG4gICAgc3RhdGljIFRhYmxlSW5mbzogb2JqZWN0ID0ge307XHJcbiAgICAvL+S4gOiIrOaooeW8j+eNsueNjuizh+ioilxyXG4gICAgc3RhdGljIEJldFJlc3VsdDogb2JqZWN0ID0ge307XHJcbiAgICAvL+WFjeiyu+aooeW8j+eNsueNjuizh+ioilxyXG4gICAgc3RhdGljIEZyZWVTcGluUmVzdWx0OiBvYmplY3QgPSB7fTtcclxuICAgIC8v5YWN6LK75qih5byP6Kmy6Kqe57O7TG9nb1xyXG4gICAgc3RhdGljIGZyZWVMb2dvU2tlbGV0b246IG9iamVjdCA9IHt9O1xyXG4gICAgLy/lhY3osrvmqKHlvI/ntZDnrpfnlavpnaLoqbLoqp7ns7tMb2dvXHJcbiAgICBzdGF0aWMgZnJlZUVuZFRpdGxlSW1nOiBhcnJheSA9IFtdO1xyXG4gICAgLy/pn7PmqILovInlhaXlrZjmlL7kvY3nva5cclxuICAgIHN0YXRpYyBtdXNpY1RvTWFwOiBvYmplY3QgPSB7fTtcclxuXHJcbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIHN0YXRpYyBKb2luUm9vbTogc3RyaW5nO1xyXG4gICAgc3RhdGljIFJhdGlvOiBudW1iZXI7XHJcbiAgICBzdGF0aWMgR2FtZUxvYmJ5TmFtZTogc3RyaW5nO1xyXG4gICAgc3RhdGljIENhaVNoZW5UYWJsZUluZm86IG9iamVjdDtcclxuXHJcblxyXG4gICAgLy/lkIToqp7ns7vmloflrZflpKflsI9cclxuICAgIHN0YXRpYyBsYW5nX2ZvbnRTaXplOiBvYmplY3QgPSB7XHJcbiAgICAgICAgVVNEOiAzMCxcclxuICAgICAgICBOVEQ6IDM2LFxyXG4gICAgICAgIENOWTogMzYsXHJcbiAgICAgICAgVk5EOiAzMCxcclxuICAgIH07XHJcblxyXG4gICAgLy/lkIToqp7ns7vmloflrZfpq5jluqZcclxuICAgIHN0YXRpYyBsYW5nX2xpbmVIZWlnaHQ6IG9iamVjdCA9IHtcclxuICAgICAgICBVU0Q6IDQwLFxyXG4gICAgICAgIE5URDogNDYsXHJcbiAgICAgICAgQ05ZOiA0NixcclxuICAgICAgICBWTkQ6IDQwLFxyXG4gICAgfTtcclxuXHJcbiAgICAvL+WQhOiqnuezu+aWh+Wtl+avlOS+i1xyXG4gICAgc3RhdGljIGxhbmdfdHh0U2FjbGU6IG9iamVjdCA9IHtcclxuICAgICAgICBVU0Q6IDEsXHJcbiAgICAgICAgTlREOiAxLFxyXG4gICAgICAgIENOWTogMSxcclxuICAgICAgICBWTkQ6IDEsXHJcbiAgICB9O1xyXG5cclxuICAgIC8v5ZCE6Kqe57O75paH5a2X5a2X6auUXHJcbiAgICBzdGF0aWMgbGFuZ19mb250RmFtaWx5OiBvYmplY3QgPSB7XHJcbiAgICAgICAgVVNEOiBcIuW+rui7n+ato+m7kemrlFwiLFxyXG4gICAgICAgIE5URDogXCLlvq7ou5/mraPpu5Hpq5RcIixcclxuICAgICAgICBDTlk6IFwi5b6u6Luf5q2j6buR6auUXCIsXHJcbiAgICAgICAgVk5EOiBcIkFyaWFsIFVuaWNvZGUgTVMsQXJpYWxcIixcclxuICAgIH07XHJcblxyXG4gICAgLy/liJ3lp4vljJboqbLoqp7ns7vni4DmhYtcclxuICAgIHN0YXRpYyBsYW5nX0xhYmVsU2V0dGluZzogb2JqZWN0ID0ge1xyXG4gICAgICAgIENOWToge1xyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQ2LFxyXG4gICAgICAgICAgICB0eHRTYWNsZToge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgICAgICBUZXh0OiAwLjhcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCLlvq7ou5/mraPpu5Hpq5RcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTlREOiB7XHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgbGluZUhlaWdodDogNDYsXHJcbiAgICAgICAgICAgIHR4dFNhY2xlOiB7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgICAgICAgICAgVGl0bGU6IDEuMixcclxuICAgICAgICAgICAgICAgIFRleHQ6IDAuOFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIuW+rui7n+ato+m7kemrlFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBVU0Q6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgdHh0U2FjbGU6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogMS4yLFxyXG4gICAgICAgICAgICAgICAgVGV4dDogMC44XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwgVW5pY29kZSBNUyxBcmlhbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBWTkQ6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgdHh0U2FjbGU6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogMS4yLFxyXG4gICAgICAgICAgICAgICAgVGV4dDogMC44XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwgVW5pY29kZSBNUyxBcmlhbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBUSEI6IHtcclxuICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiA0NixcclxuICAgICAgICAgICAgdHh0U2FjbGU6IHtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBUaXRsZTogMS4yLFxyXG4gICAgICAgICAgICAgICAgVGV4dDogMC44XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwgVW5pY29kZSBNUyxBcmlhbFwiXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXX0=