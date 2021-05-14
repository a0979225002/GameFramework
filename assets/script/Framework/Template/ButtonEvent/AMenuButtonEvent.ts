import AudioManager from '../../Audio/AudioManager'
import {AutoType} from '../../Config/Enum/ConfigEnum'
import {GameEventType} from '../../Listener/Enum/gameEventType'
import EventManager from '../../Listener/EventManager'
import SlotGameManager from '../../Procedure/SlotGameManager'
import {WebResponseManager} from '../../WebResponse/WebResponseManager'

const {ccclass} = cc._decorator;

@ccclass
export default abstract class AMenuButtonEvent extends cc.Component {

    protected onLoad() {

        this.autoEventListener();
        this.totalBetChangeEventListener();

    }

    protected musicEventListener() {

        AudioManager.instance.updateMusicOnMute();

        this.musicEvent(AudioManager.instance.musicOnMute);

    }

    protected effectEventListener() {

        AudioManager.instance.updateEffectOnMute();
        this.effectEvent(AudioManager.instance.effectOnMute);

    }

    protected betUpEventListener() {

        let beforeBetIndex = SlotGameManager.instance.userBetPoint.LineBet;
        let afterBetIndex = ++beforeBetIndex;
        if (afterBetIndex > WebResponseManager.instance.tableInfo.LineBet.length - 1) {
            afterBetIndex = 0;
        }

        EventManager
            .instance
            .setEvent(EventManager.gameTarget, GameEventType.USER_TOTAL_BET, afterBetIndex);
    }

    protected betDownEventListener() {

        let beforeBetIndex = SlotGameManager.instance.userBetPoint.LineBet;
        let afterBetIndex = --beforeBetIndex;

        if (afterBetIndex < 0) {
            afterBetIndex = WebResponseManager.instance.tableInfo.LineBet.length - 1;
        }

        EventManager
            .instance
            .setEvent(EventManager.gameTarget, GameEventType.USER_TOTAL_BET, afterBetIndex);

    }

    private totalBetChangeEventListener() {

        SlotGameManager.instance.userTotalBetEventListener((beforeIndex, afterIndex) => {

            this.totalBetChangeEvent(beforeIndex, afterIndex);

        })
    }

    protected autoButtonEventListener(event, callbackType: AutoType) {

        EventManager.instance.setEvent(
            EventManager.gameTarget, GameEventType.AUTO, true, callbackType);

    }

    private autoEventListener() {

        SlotGameManager.instance.autoStateEventListener((isAutomaticState, beforeAutoCount, afterAutoCount) => {

            this.autoEvent(beforeAutoCount, afterAutoCount);

        })
    }


    protected abstract onCreate();

    protected abstract musicEvent(isOnMute: boolean);

    protected abstract effectEvent(isOnMute: boolean);

    protected abstract autoEvent(beforeAutoCount: AutoType, afterAutoCount: AutoType);

    protected abstract settingPageTouchEvent();

    protected abstract recordPageTouchEvent();

    protected abstract descriptionPageEvent();

    protected abstract totalBetChangeEvent(beforeIndex, afterIndex)

    protected abstract goBackTouchEvent();

    protected abstract goHomeTouchEvent();

}