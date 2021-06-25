import {ModulesTree} from './modules';
import {buildDeclaration} from "./declaration";

const gulp = require("gulp");
const debug = require('gulp-debug');

/**
 * 测试
 * @param cb 
 */
export function test(cb:Function){
    const modules = 'index,archive,config,database,function,language,component-multiple-languages,load,log,network-websocket,network-http,pack,pool-node,reference,scene,timer,ui,variable,widget,component-widget-bind';
    let modulesTree = new ModulesTree('src/framework/modules.json');
    modulesTree.keepModules(modules.split(','));
    let sources = modulesTree.collectSources().map((item, index, input) => { return 'src/framework/' + item; });
    sources.push(...['declarations/creator.d.ts', 'src/@types/**/*.ts', '../../temp/declarations/**/*.ts']);
    return gulp.src(sources)
		.pipe(debug({title: 'file:'}));
}

/**
 * 默认构建
 */
export default function build(cb:Function){
	console.log("请选择一个任务:");
	console.log("构建当前扩展\t", "buildExtension");
	console.log("构建资源框架\t", "buildFramework");
	console.log("构建包声明\t", "buildDeclaration [--pack NAME]");
	cb()
}

export { buildAsset as buildFramework} from "./framework";
export { buildDeclaration } from "./declaration";