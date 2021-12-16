"use strict";
cc._RF.push(module, '7bf204lZ1VGcY774jWN1AD+', 'GameState');
// script/Framework/Process/Enum/GameState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameType = exports.GameState = void 0;
var GameState;
(function (GameState) {
    /**
     * 無狀態,待機狀態...
     * @type {GameState.STANDBY}
     */
    GameState["STANDBY"] = "STANDBY";
    /**
     * 一般狀態遊戲中....
     * @type {GameState.PLAYING}
     */
    GameState["PLAYING"] = "PLAYING";
    /**
     * 免費遊戲中....
     * @type {GameState.FREEING}
     */
    GameState["FREEING"] = "FREEING";
})(GameState = exports.GameState || (exports.GameState = {}));
var GameType;
(function (GameType) {
    GameType["FREE"] = "FREE";
    GameType["NORMAL"] = "NORMAL";
})(GameType = exports.GameType || (exports.GameType = {}));

cc._RF.pop();