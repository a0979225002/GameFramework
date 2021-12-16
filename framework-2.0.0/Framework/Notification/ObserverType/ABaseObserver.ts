namespace fcc {

    export namespace ABS {

        /**
         * @Author XIAO-LI-PIN
         * @Description 推撥持有者,可綁定於該推播者底下,當有事件推播時,將會推播給該class
         * @Date 2021-06-11 下午 05:03
         * @Version 1.0
         */
        export abstract class ABaseObserver implements IF.IBaseObserver {

            /**
             * 是否常駐推撥
             * @type {boolean}
             * @private
             */
            private _isPermanent: boolean;

            /**
             * 推撥事件指向的 this
             * @type {any}
             * @private
             */
            private readonly _self: any;

            /**
             * 返回方法
             * @type {(...any) => void} - 正確參數數量由子類實現
             * @private
             */
            private readonly _callFun: (...any) => void;

            protected constructor(callFun: (...any) => void, self) {
                this._isPermanent = false;
                this._self = self;
                this._callFun = callFun;
            }

            /**
             * 推播事件
             * @param any - 正確參數數量由子類實現
             */
            public pushNotification(...any): void {
                this._callFun.call(this._self, ...any);
            }

            /**
             * 是否常駐推撥
             * @return {boolean}
             */
            get isPermanent(): boolean {
                return this._isPermanent;
            }

            /**
             * 是否常駐推撥
             * @param {boolean} value
             */
            set isPermanent(value: boolean) {
                this._isPermanent = value;
            }
        }
    }
}
