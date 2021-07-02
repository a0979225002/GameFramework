export default abstract class ALoadScriptType {

    protected scriptName: string;
    protected type: string;
    protected url: string;

    protected static head = document.getElementsByTagName("head")[0];


    protected constructor(scriptName: string, type: string, url: string) {
        this.scriptName = scriptName
        this.type = type
        this.url = url
    }

    abstract loadScript(): void;

}