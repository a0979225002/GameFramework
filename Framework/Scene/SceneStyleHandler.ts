import {SceneStyleType} from './Enum/SceneStyleType'
import AutoStyle from './SceneStyle/AutoStyle'
import HorizontalStyle from './SceneStyle/HorizontalStyle'
import VerticalStyle from './SceneStyle/VerticalStyle'

export default class SceneStyleHandler {

    private autoStyle: AutoStyle;
    private horizontalStyle: HorizontalStyle;
    private verticalStyle: VerticalStyle;

    constructor() {
        this.autoStyle = new AutoStyle();
        this.horizontalStyle = new HorizontalStyle();
        this.verticalStyle = new VerticalStyle();
    }

    getStyle(sceneStyle: SceneStyleType | ISceneStyle, width: number, height: number) {
        switch (sceneStyle) {
            case SceneStyleType.AUTO:
                this.autoStyle.executionStyle(width, height);
                break;
            case SceneStyleType.HORIZONTAL:
                this.horizontalStyle.executionStyle(width, height)
                break;
            case SceneStyleType.VERTICAL:
                this.verticalStyle.executionStyle(width, height);
                break;
            default :
                sceneStyle.executionStyle(width, height);
        }
    }
}