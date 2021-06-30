import {ModulesTree} from './modules';
import {buildDeclaration} from "./declaration";

const gulp = require("gulp");
const debug = require('gulp-debug');

/**
 * 测试
 * @param cb
 */
export function test(cb: Function) {
    const modules = 'index,archive,config,database,function,language,component-multiple-languages,load,log,network-websocket,network-http,pack,pool-node,reference,scene,timer,ui,variable,widget,component-widget-bind';
    let modulesTree = new ModulesTree('src/framework/modules.json');
    modulesTree.keepModules(modules.split(','));
    let sources = modulesTree.collectSources().map((item, index, input) => {
        return 'src/framework/' + item;
    });
    sources.push(...['declarations/creator.d.ts', 'src/@types/**/*.ts', '../../temp/declarations/**/*.ts']);
    return gulp.src(sources)
        .pipe(debug({title: 'file:'}));
}

/**
 * 默认构建
 */
export default function build(cb: Function) {
    console.log("建構框架\t", "buildFramework");
    console.log("建構混淆加密框架\t", "buildFramework2");
    console.log("建構模板\t", "buildTemplate");
    console.log("建構混淆加密模板\t", "buildTemplate2");
    cb()
}

export {buildAsset as buildFramework, buildPublishAsset as buildFramework2} from "./framework";
export {buildTemplate, buildTemplate2} from "./template";
export {buildDeclaration} from "./declaration";