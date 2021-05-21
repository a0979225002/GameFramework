interface IWebResponseManager {

    /**
     * tableInfo Model
     */
    tableInfo: ITableInfoModel;

    /**
     * Result Model
     */
    result: ISlotResultModel;

    /**
     * freeResult Model
     */
    freeResult: IFreeResultModel;

    /**
     * 添加當前遊戲的TableInfo Model
     * @param {ITableInfoModel} model
     */
    setTableInfoModel(model: ITableInfoModel);

    /**
     * 添加當前遊戲的Result Model
     * @param {IFreeResultModel} model
     */
    setResultModel(model: INoLineResultModel);

    /**
     * 添加當前遊戲的FreeResult Model
     * @param {IFreeResultModel} model
     */
    setFreeResultModel(model: IFreeResultModel);


}