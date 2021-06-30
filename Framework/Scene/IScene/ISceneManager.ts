/// <reference path="../Enum/SceneStyleType.ts" />
/// <reference path="../Enum/SceneDirectionType.ts" />

namespace fcc {

    export namespace IF{

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 場景管理器
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface ISceneManager {

            sceneDirection: type.SceneDirectionType;

            /**
             * cavers 設計寬度
             * @param {number} width - 寬度
             * @returns {this}
             */
            setDesignWidth(width: number): this;

            /**
             * cavers 設計高度
             * @param {number} height - 高度
             * @return {this}
             */
            setDesignHeight(height: number): this;

            /**
             * 更新當前示配寬高,會保存上次的scene更動模式
             * 如不添加 style 參數 ,第一次將會使用預設模式更動,
             * 如果已經更動過,將會使用你上次的style樣式
             * @param {SceneStyleType | Function} style : 可自定義更動樣式,但實作(介面)ISceneStyle
             * @return {this}
             */
            updateSize(style?: type.SceneStyleType | ISceneStyle): this;

            /**
             * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
             * 將會比照上次更動的樣式進行更動
             * 如果需求更動樣式,須先更新 updateSize()
             * @param {number} time : 更新的頻率 單位毫秒 ms
             */
            startListener(time: number): void;

            /**
             * 更換場景
             * @param {string} name - 場景資源名稱為你Res動態加載的自訂義的scene名稱
             */
            changeScene(name: string): void;

            /**
             * 清除該scene所有動作
             * @param scene{cc.Component} - 要清除的scene class
             */
            removeScene(scene: cc.Component): void;

        }
    }
}