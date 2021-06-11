export default interface IResponseHandler<T> {

    setResultModel(module: new() => T);

    getResult(): T;

}