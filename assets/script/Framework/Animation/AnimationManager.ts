import ErrorManager from '../Error/ErrorManager'
import AnimationHandler from './AnimationHandler'
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'

export default class AnimationManager implements IAnimationManager {

    private _spineName: Map<string, Map<string, string>>

    private static _instance: AnimationManager;
    private readonly _handler: IAnimationHandler
    private readonly configManager: IConfigManager;

    private constructor(configManager: IConfigManager) {
        this.configManager = configManager;
        this._spineName = new Map<string, Map<string, string>>();
        this._handler = new AnimationHandler(this);
    }

    /**
     *  懶漢加載
     *  初始化,只讓一個專案只有一次產生此class
     */
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new AnimationManager(configManager);
        }
    }

    /**
     *  獲取已經初始化的靜態實例class
     */
    public static get instance(): IAnimationManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.AUDIO_FW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    getSpineName(resName: string, key: string | number): string {

        if (this._spineName.has(resName)) {

            ErrorManager.instance.executeError(ErrorType.ANIMATION_FW, "resources 資源名錯誤")

        } else if (this._spineName.get(resName).has(`${key}`)) {

            ErrorManager.instance.executeError(ErrorType.ANIMATION_FW, "尚未獲取資源,請查看 AnimationManager.instance.spineName")
        }

        return this.spineName.get(resName).get(`${key}`);

    }


    set spineName(value: Map<string, Map<string, string>>) {
        this._spineName = value
    }

    get spineName(): Map<string, Map<string, string>> {
        return this._spineName
    }

    get handler(): IAnimationHandler {
        return this._handler
    }
}