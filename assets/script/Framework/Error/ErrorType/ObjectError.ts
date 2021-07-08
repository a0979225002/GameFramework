import {ErrorType} from "../Enum/ErrorManagerEnum";
import FrameWorkError from "./FrameWorkError";

export default class ObjectError {

    private frameWorkError: FrameWorkError;

    constructor() {

        this.frameWorkError = new FrameWorkError();

    }

    checkErrorType(message: string | ErrorType, obj?: any) {

        if (typeof message === "string") {

            this.frameWorkError.checkErrorType(message, obj);

        } else if (message === null) {

            return this.checkObjectType(obj);

        }

    }

    checkObjectType(obj: any) {

        if (obj && obj != 0) {
            console.log("1");
            return typeof obj;

        } else {

            throw Error(`該變數為null`);
        }
    }

}