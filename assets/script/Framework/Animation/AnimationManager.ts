import ErrorManager from '../Error/ErrorManager'
import AnimationHandler from './AnimationHandler'
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'

export default class AnimationManager implements IAnimationManager{

    private _spineName: Map<string, Map<string, string>>

    private static _instance : AnimationManager;
    private readonly _handler: IAnimationHandler

    private constructor() {

        this._spineName = new Map<string, Map<string, string>>();
        this._handler = new AnimationHandler();
    }



    static get instance(): AnimationManager{
        if(!this._instance){

            this._instance = new AnimationManager;

        }

        return this._instance;
    }

    getSpineName(resName:string,key:string|number): string {

        if(this._spineName.has(resName)){

            ErrorManager.instance.executeError(ErrorType.AnimationErrorFW,"resources 資源名錯誤")

        }else if(this._spineName.get(resName).has(`${key}`)){

            ErrorManager.instance.executeError(ErrorType.AnimationErrorFW,"尚未獲取資源,請查看 AnimationManager.instance.spineName")
        }

        return  this.spineName.get(resName).get(`${key}`);

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
