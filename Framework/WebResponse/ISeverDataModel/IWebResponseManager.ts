import {ResponseType} from "../Enum/ResponseType";
import IResponseHandler from "./IResponseHandler";
import ResponseResultObserver from "../../Listener/ObserverType/ResponseObserver/ResponseResultObserver";

export interface IWebResponseManager<T> {

    /**
     * 是否已經回傳該局資料
     */
    isResultOk: boolean;

    /**
     * 獲取是否已經回傳該局資料框架監聽者
     * @return {ResponseResultObserver}
     */
    getResponseOkObserver(): ResponseResultObserver;

    /**
     * 綁定該type需要的model
     * @param {ResponseType} type
     * @param {IResponseHandler<any>} model
     */
    setResponseModule(type: ResponseType, model: IResponseHandler<T>)

    /**
     * 獲取該type以綁定的model
     * @param {ResponseType} type
     * @return {any}
     */
    getResult(type: ResponseType): T;
}