export default class HorizontalStyle implements ISceneStyle {

    //當前cavers寬高
    private curDR: any;

    public executionStyle(width: number, height: number) {

        let cvs = cc.find('Canvas').getComponent(cc.Canvas);

        //保存原始設計分辨率，供屏幕大小變化時使用
        if (!this.curDR) {
            this.curDR = cc.size(width, height);
        }
        let dr = this.curDR;
        let s = cc.view.getFrameSize();
        let rw = s.width;
        let rh = s.height;
        let finalW = rw;
        let finalH = rh;

        if ((rw / rh) > (dr.width / dr.height)) {
            //橫向
            //!#zh: 是否優先將設計分辨率高度撐滿視圖高度 。 */
            cvs.fitHeight = true;
            cvs.fitWidth = false;
            //如果更長，則用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        } else {
            //直向
            /*!#zh: 是否優先將設計分辨率寬度撐滿視圖寬度 。 */
            cvs.fitHeight = false;
            cvs.fitWidth = true;
            //如果更短，則用定寬
            finalW = dr.width;
            finalH = rh / rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
    }

}