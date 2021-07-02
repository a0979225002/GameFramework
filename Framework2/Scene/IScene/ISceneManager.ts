import {SceneStyle, SceneDirectionType} from "../Enum/SceneStyle";

export interface ISceneManager {

    sceneDirection: SceneDirectionType;

    /**
     * cavers 設計寬度
     * @param {number} width
     * @returns {this}
     */
    setDesignWidth(width: number): this;

    /**
     * cavers 設計高度
     * @param {number} height
     * @return {this}
     */
    setDesignHeight(height: number): this;

    /**
     * 更新當前示配寬高,會保存上次的scene更動模式
     * 如不添加 style 參數 ,第一次將會使用預設模式更動,
     * 如果已經更動過,將會使用你上次的style樣式
     * @param {SceneStyle | Function} style : 可自定義更動樣式,但實作(介面)ISceneStyle
     * @return {this}
     */
    updateSize(style?: SceneStyle | ISceneStyle): this;

    /**
     * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
     * 將會比照上次更動的樣式進行更動
     * 如果需求更動樣式,須先更新 updateSize()
     * @param {number} time : 更新的頻率 單位毫秒 ms
     */
    startListener(time: number): void;

    /**
     * 更換場景
     * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
     */
    changeScene(name: string): void;

    /**
     * 清除該scene所有動作
     * @param scene{any} : 要清除的scene class
     */
    removeScene(scene: any): void;

}