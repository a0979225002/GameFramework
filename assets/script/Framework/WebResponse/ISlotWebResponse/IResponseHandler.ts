export default interface IResponseHandler<T> {

    setResultModel(module: new() => T);

    getResult():T;
    //
    // setFreeResultModel(freeResultModule: new() => F);
    //
    // setTableInfo(tableInfoModule: new() => T);
}