const gulp = require("gulp");
const ts = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const clean = require('gulp-clean');
const jsobfuscator = require('gulp-javascript-obfuscator');
const merge = require('merge2');
const through = require('through2');
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const tsify = require("tsify");
const uglify = require("gulp-uglify");
const buffer = require("vinyl-buffer");
const concat = require('gulp-concat');
const fs = require("fs");

/**
 * 清空资源框架
 */
function cleanAssetFramework(cb) {
    if (fs.existsSync('framework')) {
        console.log("cleanAssetFramework");
        return gulp.src(['dist/temp/**'], {read: false, allowEmpty: true})
            .pipe(clean({force: true}));
    } else {
        console.error("framework not found!");
        cb();
    }
}

/**
 * 构建资源框架
 */
function buildAssetTemplate(cb) {
    if (fs.existsSync('Template')) {
        console.log("buildAssetTemplate");
        let tsResult = gulp.src(['Template/**/*.ts', '@types/creator.d.ts'])
            .pipe(sourcemaps.init())
            .pipe(ts.createProject('Template/tsconfig.json', {
                target: "ES2015",
            })())
            .on("error", function (err: any) {
                console.error(err.message);
            });
        return merge(
            browserify({
                basedir: "Template/BaseTemplate",
                insertGlobals : true,
                debug: true,
                entries: ["AGenericTemplate.ts"],
                cache: {},
                packageCache: {}
            })
                .plugin(tsify)
                .bundle()
                .pipe(source('fcc-template.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true}))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest("dist/tcc")),
            tsResult.dts
                .pipe(concat("fcc-template.d.ts"))
                .pipe(through.obj(function (chunk, enc, callback) {
                    let sdata = chunk.contents.toString();
                    chunk.contents = Buffer.from(sdata);
                    this.push(chunk)
                    callback();
                }))
                .pipe(gulp.dest('dist/tcc'))
        );
    } else {
        console.error("framework not found!");
        cb();
    }
}


/**
 * 构建资源框架
 */
function buildPublishTemplate(cb) {
    if (fs.existsSync('Template')) {
        console.log("buildPublishTemplate");
        let tsResult = gulp.src(['Template/**/*.ts', '@types/creator.d.ts'])
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
                controlFlowFlattening: true
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
            .pipe(gulp.dest('dist/temp'))
    } else {
        console.error("framework not found!");
        cb();
    }
}

export const buildTemplate = gulp.series(cleanAssetFramework, buildAssetTemplate);
export const buildTemplate2 = gulp.series(buildPublishTemplate);