
const gulp = require("gulp");
const debug = require('gulp-debug');


/**
 * 默認構建
 */
export default function build(cb: Function) {
    console.log("建構框架\t", "buildFramework");
    console.log("建構混淆加密框架\t", "buildFramework2");
    cb()
}

export {buildAsset as buildFramework, buildPublishAsset as buildFramework2} from "./framework";