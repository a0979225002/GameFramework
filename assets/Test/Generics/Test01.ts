import NoLineResult from "../../script/Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 01:37
 * @Version 1.0
 */
export default class Test01<T extends ISlotResultModel> {
    private _module: T;

    constructor() {


    }

    get module(): T {
        return this._module;
    }

    set module(value: T) {
        this._module = value;
    }
}

export class Test02 {

    public static module;

    static setResult<T extends ISlotResultModel>(module: new () => T) {
        this.module = new module();
    }

    static getResult<T extends ISlotResultModel>(): T {
        return this.module;
    }
}

export class Test03 {
    constructor() {
        Test02.setResult<NoLineResult>(NoLineResult);
        Test02.getResult<NoLineResult>()
    }

}