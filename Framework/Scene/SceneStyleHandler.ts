
/// <reference path="./Enum/SceneStyleType.ts" />
/// <reference path="./SceneStyle/AutoStyle.ts" />
/// <reference path="./SceneStyle/HorizontalStyle.ts" />
/// <reference path="./SceneStyle/VerticalStyle.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 依照初始設定對應的更新模式,更新當前遊戲場景
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class SceneStyleHandler {

        private autoStyle: AutoStyle;
        private horizontalStyle: HorizontalStyle;
        private verticalStyle: VerticalStyle;

        constructor(sceneManager: IF.ISceneManager) {
            this.autoStyle = new AutoStyle(sceneManager);
            this.horizontalStyle = new HorizontalStyle();
            this.verticalStyle = new VerticalStyle();
        }

        /**
         * 匹對對應的更新類,做相對應的更新
         * @param {fcc.type.SceneStyleType | fcc.IF.ISceneStyle} sceneStyle - 對應的的樣式 or 自訂義樣式
         * @param {number} width - 寬
         * @param {number} height - 高
         */
        getStyle(sceneStyle: type.SceneStyleType | IF.ISceneStyle, width: number, height: number) {
            switch (sceneStyle) {
                case type.SceneStyleType.AUTO:
                    this.autoStyle.executionStyle(width, height);
                    break;
                case type.SceneStyleType.HORIZONTAL:
                    this.horizontalStyle.executionStyle(width, height)
                    break;
                case type.SceneStyleType.VERTICAL:
                    this.verticalStyle.executionStyle(width, height);
                    break;
                default :
                    sceneStyle.executionStyle(width, height);
            }
        }
    }
}