/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Load/LoadResManager.ts" />
/// <reference path="./Enum/SceneStyleType.ts" />
/// <reference path="./Enum/SceneDirectionType.ts" />
/// <reference path="./IScene/ISceneManager.ts" />
/// <reference path="./SceneSizeChangeListener.ts" />
/// <reference path="./SceneStyleHandler.ts" />

namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class SceneManager implements IF.ISceneManager {

        private configManager: IF.IConfigManager;
        private static _instance: IF.ISceneManager;
        private style: type.SceneStyleType | IF.ISceneStyle;
        private _designWidth: number;
        private _designHeight: number;
        private sceneSizeChangeListener: SceneSizeChangeListener;
        private sceneStyleHandler: SceneStyleHandler;
        private _sceneDirection: type.SceneDirectionType;

        private constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
            this._designWidth = 1280;                                                   //初始預設寬度
            this._designHeight = 720;                                                   //初始預設高度
            this.sceneSizeChangeListener = new SceneSizeChangeListener(configManager, this);
            this.sceneStyleHandler = new SceneStyleHandler(this);           //實例化scene樣式導向器
            this.style = type.SceneStyleType.HORIZONTAL;                                //初始預設scene畫面調整的模式
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         * @param {fcc.IF.IConfigManager} configManager
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new SceneManager(configManager);
                sceneMgr = this._instance;
            }
        }

        /**
         *  獲取已經初始化的靜態實例class
         */
        public static get instance(): IF.ISceneManager {
            if (!this._instance) {
                ErrorManager.instance.executeError(type.ErrorType.SCENE_FW, "該類尚未實例化");
                return;
            }
            return this._instance;
        }

        /**
         * cavers 設計寬度
         * @param {number} width - 寬度
         * @return {this}
         */
        setDesignWidth(width: number): this {
            this._designWidth = width;
            return this;
        }

        /**
         * cavers 設計高度
         * @param {number} height - 高度
         * @return {this}
         */
        setDesignHeight(height: number): this {
            this._designHeight = height;
            return this;
        }

        /**
         * 更新當前示配寬高,會保存上次的scene更動模式
         * 如不添加參數,第一次將會使用預設模式更動
         * @param {SceneStyleType | Function} style - 可自定義更動樣式,但需實作(介面)ISceneStyle
         * @return {this}
         */
        updateSize(style?: type.SceneStyleType | IF.ISceneStyle): this {
            if (style) {
                this.style = style;
                switch (style) {
                    case type.SceneStyleType.HORIZONTAL:
                        this._sceneDirection = type.SceneDirectionType.PORTRAIT;
                        break;
                    case type.SceneStyleType.VERTICAL:
                        this._sceneDirection = type.SceneDirectionType.LANDSCAPE;
                        break;
                    case type.SceneStyleType.AUTO:
                        break;
                    default:
                        console.log("該更新模式尚未包含在框架中,請確認是否有實作ISceneStyle")
                        break;
                }
            }
            this.sceneStyleHandler.getStyle(this.style, this._designWidth, this._designHeight);
            return this;
        }

        /**
         * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
         * 將會比照上次更動的樣式進行更動
         * 如果需求更動樣式,須先更新 updateSize()
         * @param {number} time : 更新的頻率 單位毫秒 ms
         */
        public startListener(time: number) {
            this.sceneSizeChangeListener.designSceneEventListener(time);
        }

        /**
         * 更換場景
         * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
         */
        public changeScene(name: string) {
            if (!LoadResManager.instance.sceneRes.has(name)) {
                ErrorManager.instance.executeError(type.ErrorType.SCENE_FW, "加載不到你的Scene資源,請檢查該資源名是否正確");
            }
            cc.director.runScene(LoadResManager.instance.sceneRes.get(name));
        }

        /**
         * 清除該scene所有動作
         * @param scene{cc.Component} - 要清除的scene class
         */
        public removeScene(scene: cc.Component) {
            scene.destroy();
        }


        get sceneDirection(): type.SceneDirectionType {
            return this._sceneDirection;
        }

        set sceneDirection(value: type.SceneDirectionType) {
            this._sceneDirection = value;
        }
    }
}