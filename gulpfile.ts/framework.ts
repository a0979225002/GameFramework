const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const clean = require('gulp-clean');
const jsobfuscator = require('gulp-javascript-obfuscator');
const browserify = require('gulp-browserify');
const merge = require('merge2');
const through = require('through2');
const fs = require("fs");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

const FCC_VERSION = "0.0.4";

/**
 * 清空資源框架
 */
function cleanAssetFramework(cb) {
    if (fs.existsSync('dist')) {
        console.log("cleanAssetFramework");
        return gulp.src(['dist/fcc/**'], {read: false, allowEmpty: true})
            .pipe(clean({force: true}));
    } else {
        console.error("framework not found!");
        cb();
    }
}

/**
 * 建構開發模式框架
 */
function buildAssetFramework(cb) {
    if (fs.existsSync('Framework')) {
        console.log("buildAssetFramework");
        let tsFrameWork = gulp.src(['Framework/**/*.ts', '@types/creator.d.ts'])
            .pipe(sourcemaps.init())
            .pipe(ts.createProject('Framework/tsconfig.json', {
                target: "ES5",
            })())
            .on("error", function (err: any) {
                console.error(err.message);
            });

        return merge(
            tsFrameWork.js
                .pipe(uglify())
                .pipe(sourcemaps.write())
                .pipe(browserify({
                    insertGlobals: true,
                    debug: true,
                }))
                .pipe(through.obj(function (chunk, enc, callback) {
                    let sdata = chunk.contents.toString();
                    chunk.contents = Buffer.from(sdata);
                    this.push(chunk)
                    callback();
                    //fcc-framework.js
                }))
                // .pipe(uglify())
                .pipe(gulp.dest('dist/fcc')),
            tsFrameWork.dts
                .pipe(through.obj(function (chunk, enc, callback) {
                    let sdata = chunk.contents.toString();
                    let replace = updateVersion(sdata);
                    chunk.contents = Buffer.from(replace);
                    this.push(chunk)
                    callback();
                }))
                .pipe(gulp.dest('dist/fcc'))
        );
    } else {
        console.error("framework not found!");
        cb();
    }
}

/**
 * 打包時更新版本與日期
 */
function updateVersion(library: string): string {

    let nowDate = new Date().toLocaleString();
    let date =
        library.replace(
            /@Date [0-9]*-[0-9]*-[0-9]*[^x00-xff]*[0-9]*:[0-9]*/gm,
            `@Date ${nowDate}`
        );

    return date.replace(
        /@Version [0-9]*[.][0-9]*/gm,
        `@Version ${FCC_VERSION}`
    );
}

/**
 * 建構混淆加密框架
 */
function buildPublishFramework(cb) {
    if (fs.existsSync('Framework')) {
        console.log("buildPublishFramework");
        let tsResult = gulp.src(['Framework/**/*.ts', '@types/creator.d.ts'])
            .pipe(sourcemaps.init())
            .pipe(ts.createProject('Framework/tsconfig.json', {
                target: "ES5",
                outFile: "framework-production.js",
                removeComments: true,
            })())
            .on("error", function (err: any) {
                console.error(err.message);
            });
        return tsResult.js
            .pipe(jsobfuscator({
                compact: true,
                controlFlowFlattening: true,
            }))
            .pipe(sourcemaps.write())
            .pipe(browserify({
                insertGlobals: true,
                debug: true,
            }))
            .pipe(through.obj(function (chunk, enc, callback) {
                let sdata = chunk.contents.toString();
                chunk.contents = Buffer.from(sdata);
                this.push(chunk)
                callback();
            }))
            .pipe(gulp.dest('dist/fcc'))
    } else {
        console.error("framework not found!");
        cb();
    }
}

export const buildAsset = gulp.series(cleanAssetFramework, buildAssetFramework);
export const buildPublishAsset = gulp.series(buildPublishFramework);
