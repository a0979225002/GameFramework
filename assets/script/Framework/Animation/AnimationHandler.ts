import AnimationManager from './AnimationManager'

export default class AnimationHandler implements IAnimationHandler {

    /**
     * 更新動畫管理器內的spineName數據
     * @param resName
     * @param keyName
     * @param spineName
     */
    updateSpineAnimationName(resName: string, keyName: string, spineName: string) {

        AnimationManager
            .instance
            .spineName
            .set(resName,
                new Map<string, string>().set(keyName, spineName))

    }
}
