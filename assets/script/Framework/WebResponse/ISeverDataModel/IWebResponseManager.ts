import {ResponseType} from "../Enum/ResponseType";
import IResponseHandler from "./IResponseHandler";

export interface IWebResponseManager<T> {

    setResponseModule(type: ResponseType, model:IResponseHandler<T>)

    getResult(type: ResponseType): T;
}