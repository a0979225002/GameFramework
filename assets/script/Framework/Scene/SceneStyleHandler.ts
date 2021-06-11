import {SceneStyle} from './Enum/SceneStyle'
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

    getStyle(sceneStyle: SceneStyle | ISceneStyle, width: number, height: number) {
        switch (sceneStyle) {
            case SceneStyle.AUTO:
                this.autoStyle.executionStyle(width, height);
                break;
            case SceneStyle.Horizontal:
                this.horizontalStyle.executionStyle(width, height)
                break;
            case SceneStyle.Vertical:
                this.verticalStyle.executionStyle(width, height);
                break;
            default :
                sceneStyle.executionStyle(width, height);
        }
    }
}