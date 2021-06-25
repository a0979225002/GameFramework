export default class AnimationHandler implements IAnimationHandler {

    private readonly animationManager: IAnimationManager;

    constructor(animationManager: IAnimationManager) {
        this.animationManager = animationManager;
    }
    /**
     * 更新動畫管理器內的spineName數據
     * @param resName
     * @param keyName
     * @param spineName
     */
    updateSpineAnimationName(resName: string, keyName: string, spineName: string) {
        const spineMap: Map<string, string> = new Map<string, string>();
        spineMap.set(keyName, spineName);
        this.animationManager.spineName.set(resName, spineMap);
    }
}