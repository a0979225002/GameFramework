import {GameEventType} from '../../Listener/Enum/gameEventType'
import EventManager from '../../Listener/EventManager'

const {ccclass} = cc._decorator;

@ccclass
export default abstract class ALookAtTemplate extends cc.Component {

    protected abstract allLookAtEffect: Array<cc.Animation>;

    protected abstract onCreate();

    protected abstract showLookAtEffect(index: number);

    protected abstract removeLookAtEffect(index: number);

    protected onLoad() {
        this.onCreate();
        this.lookAtEventListener();
    }

    private lookAtEventListener() {
        EventManager.instance.gameEventListener(GameEventType.LOOK_AT, (index, isShowLookAt) => {

            if (isShowLookAt) {
                if (this.allLookAtEffect[index].node.active) return;

                this.showLookAtEffect(index);


            } else {

                if (!this.allLookAtEffect[index].node.active) return;

                this.removeLookAtEffect(index);
            }

        }, false);
    }

}