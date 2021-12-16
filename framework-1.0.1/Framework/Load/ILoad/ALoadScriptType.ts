namespace fcc {

    export namespace ABS {

        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入外部腳本
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export abstract class ALoadScriptType {

            protected scriptName: string;
            protected type: string;
            protected url: string;
            protected parameter: string;
            protected static head = document.getElementsByTagName("head")[0];

            protected constructor(scriptName: string, type: string, url: string,parameter:string) {
                this.scriptName = scriptName
                this.type = type
                this.url = url
                this.parameter = parameter
            }

            abstract loadScript(): void;
        }
    }
}
