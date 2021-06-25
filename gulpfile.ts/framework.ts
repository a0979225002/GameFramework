// const gulp = require("gulp");
// const ts = require("gulp-typescript");
// const sourcemaps = require('gulp-sourcemaps');
// const rename = require("gulp-rename");
// const uglify = require("gulp-uglify");
// const concat = require('gulp-concat');
// const clean = require('gulp-clean');
// const jsobfuscator = require('gulp-javascript-obfuscator');
// const debug = require('gulp-debug');
// const notify = require('gulp-notify');
// const merge = require('merge2');
// const through = require('through2');
// const fs = require("fs");
// const path = require("path");
// const tsify = require("tsify");
// const browserify = require("browserify");
// const vinylSourceStream = require("vinyl-source-stream");
// const babel = require('gulp-babel');
// const babelify = require('babelify');
// const buffer = require('vinyl-buffer');
// const glob = require('glob');
// const $ = require('gulp-load-plugins')();
// const browserSync = require('browser-sync').create();
//
//
// /**
//  * 清空资源框架
//  */
// function cleanAssetFramework(cb) {
//     if (fs.existsSync('framework')) {
//         console.log("清空舊的打包資源");
//         return gulp.src(['dist'], {read: false, allowEmpty: true})
//             .pipe(clean({force: true}));
//     } else {
//         console.error("查無此資料夾,無法清空舊資料");
//         cb();
//     }
// }
//
// const entrie = "Framework/index.ts";
//
// function buildFramework(cb) {
//
//     //glob: 抓取該底下所有匹配的檔案
//     glob('Framework/**/*.ts', function (err, files) {
//         if (err) cb(err);
//         let file = files.map(function (entry) {
//             return browserify({
//                     entries: [entry],
// 					debug:true,
//                 })
// 				.transform(babelify.configure({
//                     "presets":["@babel/preset-env"],
//                     "plugins":[
//                         [
//                             "@babel/plugin-transform-runtime",
//                             {
//                                 "absoluteRuntime": false,
//                                 "corejs": 3,
//                                 "regenerator": true,
//                                 "useESModules": false
//                             }
//                         ]
//                     ]
//                 }))
//                 .bundle()
//                 .pipe(vinylSourceStream(entry))
//                 .pipe(buffer())
//                 .pipe(uglify())
//                 .pipe(gulp.dest('./dist/framework.js'))
//         })
//
//
//     })
// }
//

import tsify = require("tsify");

const gulp = require('gulp');
const load = require('gulp-load-plugins');
const parseArgs = require('minimist');
const path = require('path');
const browserSync = require('browser-sync').create();
const envOption = parseArgs(process.argv.slice(2)).env;
const uglify = require('gulp-uglify-es').default;
const browserify = require('browserify');
const babelify = require('babelify');
const vinylSourceStream = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const glob = require('glob');
const es = require('event-stream');
const fs = require("fs");
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const through = require('through2');
const plumber = require('gulp-plumber');

/**
 * 清空资源框架
 */
function cleanAssetFramework(cb) {
    if (fs.existsSync('dist')) {
        console.log("清空舊的打包資源");
        return gulp.src(['dist'], {read: false, allowEmpty: true})
            .pipe(clean({force: true}));
    } else {
        console.error("查無此資料夾,無法清空舊資料");
        cb();
    }
}

const entries = "./Framework/**/*.ts";

function buildFramework(cb) {
    glob(entries, function (err, files) {
        if (err) cb(err);
        files.map(function (entry) {
            console.log(entry);
            /*1. 在 browserify 啟用 transform，並用 babelify 來設定 babel 參數*/
            /*2. 參數的方式和於根目錄放置 .babelrc 內的設置是一模一樣的*/
            /*3. 從 babel 7.4 版以後，取消 babel-polyfill*/
            /*4. 由於 gulp 和 node 的資料流格式不同，所以要先用 vinyl-source-stream 來轉換給 gulp 支援*/
            /*5. 由於 uglify 所預期的資料流格式為 buffer ，所以要再度轉換*/
            return browserify({entries: [entry]}, {debug: true})
                .plugin(tsify,{target:'es6'})
                .transform(babelify.configure({
                    "presets": ["@babel/preset-env"],
                    "plugins": [
                        [
                            "@babel/plugin-transform-runtime",
                            {
                                "absoluteRuntime": false,
                                "corejs": 3,
                                "regenerator": true,
                                "useESModules": false
                            }
                        ]
                    ]
                }))
                .bundle()
                .pipe(plumber())
                .pipe(vinylSourceStream(entry))
                .pipe(vinylBuffer())
                .pipe(uglify())
                .pipe(sourcemaps.write())
                .pipe(gulp.dest('dist'))
                .pipe(browserSync.stream())
        })

        // es.merge(tasks).on('end',cb)
    })
}


export const buildAsset = gulp.series(cleanAssetFramework, buildFramework);