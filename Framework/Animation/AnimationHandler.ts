namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 動畫處理,處理後的動畫回傳給予manager保存
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class AnimationHandler implements IF.IAnimationHandler {

        private readonly animationManager: IF.IAnimationManager;

        constructor(animationManager: IF.IAnimationManager) {
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
}