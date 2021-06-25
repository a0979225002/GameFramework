import {getGamePacks, findFile, FindFileType} from './utils'

const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const jsobfuscator = require('gulp-javascript-obfuscator');
const debug = require('gulp-debug');
const notify = require('gulp-notify');
const merge = require('merge2');
const through = require('through2');
const yargs = require('yargs');
const FS = require("fs");
const Path = require("path");

/**
 * 收集TS文件
 */
function collectTsFiles(files:string[], path:string, excPaths:string[]){
	for(let f of FS.readdirSync(path)){
		let fpath:string = Path.normalize(Path.join(path, f));
		let fstate = FS.statSync(fpath);
		if(fstate.isDirectory() && excPaths.indexOf(fpath) == -1){
			collectTsFiles(files, fpath, excPaths);
		}else if(fpath.endsWith('.ts')){
			files.push(fpath);
		}
	}
}

/**
 * 构建包声明
 */
export function buildDeclaration(cb) {
	let argv = yargs.default('pack', 'main').argv;
	let pack = argv.pack;
	let files:string[] = ['../../@types/**/*.ts', '!../../@types/packs/' + pack + '.d.ts', '../@types/creator.d.ts','../@types/index.d.ts'];
	let fwpath = findFile("../Framework", "dist", FindFileType.DIRECTORY);
	if(fwpath){
		files.push(`${fwpath}/**/*.ts`);
	}
	let gamePacks = getGamePacks();
	let packPaths = [];
	for(let p in gamePacks){
		packPaths.push(gamePacks[p]);
	} 
	collectTsFiles(files, gamePacks[pack], packPaths);
	let sources = gulp.src(files);//.pipe(debug({title: 'file:'}));
	console.log("buildDeclaration " + pack);
	
	//let filecount:{[key:string]:number} = {};
	let tsResult = sources.pipe(ts.createProject('../tsconfig.json')())
	.on("error",function(err:any){
		console.error(err.message);
	});
	return tsResult.dts
		/*
		.pipe(through.obj(function (chunk, enc, callback){
			let basename = path.basename(chunk.path, ".d.ts")
			let count = filecount[basename] || 0;
			filecount[basename] = count + 1;
			if(count > 0){
				basename = basename + "_" + count;
			}
			let sdata = chunk.contents.toString();
			sdata = "declare module " + basename + "{\n" + sdata + "\n}\n";
			chunk.contents = Buffer.from(sdata);
			this.push(chunk)
			callback();
		}))
		*/
		.pipe(concat(pack + ".d.ts"))
		.pipe(through.obj(function (chunk, enc, callback){
			let sdata = chunk.contents.toString();
			sdata = `// generate by lcc-framework\n\ndeclare namespace lcc$PACKS.${pack.replace('-','_')} {\n\n${sdata.replace(/([ \t]+(default|declare)[ \t]+)+/g, " ")}\n\n}`;
			chunk.contents = Buffer.from(sdata);
			this.push(chunk)
			callback();
		}))
		.pipe(gulp.dest("../../@types/packs"));
}