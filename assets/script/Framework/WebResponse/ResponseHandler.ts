import IResponseHandler from './ISlotWebResponse/IResponseHandler'
export default class ResponseHandler<T extends ISlotResultModel> implements IResponseHandler<T> {

    private module: T

    constructor(module: new () => T) {
        this.module = new module();
    }

    setResultModel(module: new() => T) {
        this.module = new module();
    }

    getResult(): T {
        return this.module;
    }
}