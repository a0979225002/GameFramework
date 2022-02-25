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
const rollup = require('gulp-rollup');

/*預設版本*/
const DEFAULT = "1.0.0";

/*遊戲 ID*/
const GAME_ID = "framework-1.0.0";

/*版本資料保存位置*/
const FILE = "D:\\VERSION\\VERSION.txt";

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
                    insertGlobals: false,
                    debug: false,
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
    //更新版本號
    const version = new NIO().updateVersionAction(FILE);
    let date =
        library.replace(
            /@Date [0-9]*-[0-9]*-[0-9]*[^x00-xff]*[0-9]*:[0-9]*/gm,
            `@Date ${nowDate}`
        );

    return date.replace(
        /@Version [0-9]*[.][0-9]*/gm,
        `@Version ${version}`
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
                insertGlobals: false,
                debug: false,
            }))
            .pipe(gulp.dest('dist/fcc'))
    } else {
        console.error("framework not found!");
        cb();
    }
}

export const buildAsset = gulp.series(cleanAssetFramework, buildAssetFramework);
export const buildPublishAsset = gulp.series(buildPublishFramework);


class NIO {

    updateVersionAction(filePath) {
        const data = this.readVersionFile(filePath);
        const listData = data.split(/\r\n|\n/);
        const data2 = this.getVersion(listData);
        let version;
        let key;
        if (data2) {
            key = Array.from(data2.keys())[0];
            const data3 = data2.get(key);
            version = this.updateVersion(data3[key]);
            this.writeVersion(data3, key, version);
        } else {
            version = DEFAULT;
            this.writeVersion(listData);
        }
        return version;
    }

    /**
     * 讀取自己的VERSION版本
     * @return {string}
     */
    readVersionFile(filePath) {
        const data = fs.readFileSync(filePath, 'utf8')
        return data.toString();
    }

    /**
     * 寫入版本號
     * @param data
     * @param index
     * @param version
     */
    writeVersion(data, index?, version?) {
        let st = "";
        if (version) {
            data[index] = version;
            for (let i = 0; i < data.length; i++) {
                if (i !== 0) {
                    st = st + '\n' + data[i];
                } else {
                    st = data[i];
                }
            }
        } else {
            for (let i = 0; i < data.length; i++) {
                if (i !== 0) {
                    st = st + '\n' + data[i];
                } else {
                    st = data[i];
                }

            }
            if (data.length > 0) {
                st = st + '\n' + GAME_ID + " : " + DEFAULT;
            } else {
                st = GAME_ID + " : " + DEFAULT;
            }
        }
        fs.writeFileSync(FILE, st);
    }

    /**
     * 保存版本號
     * @param listData
     * @return {null|*}
     */
    getVersion(listData) {
        if (listData.length > 0) {
            for (let i = 0; i < listData.length; i++) {
                if (listData[i].includes(GAME_ID)) {
                    return new Map([[i, listData]]);
                }
            }
        }
        return null;
    }

    /**
     * 更新版本號
     * @param data
     */
    updateVersion(data) {
        const vs = data.split(" ")[2];
        const vr = vs.split(".");
        let version = "";
        for (let n of vr) {
            version += n;
        }
        let vn = Number(version);
        vn++;
        version = String(vn);
        const vr2 = version.split("");
        let newVersionString
        for (let i = 0; i < vr2.length; i++) {
            if (i !== 0) {
                newVersionString = newVersionString + "." + vr2[i];
            } else {
                newVersionString = vr2[i];
            }
        }
        const gameID = data.split(" ");
        let newVersion = "";
        for (let i = 0; i < gameID.length - 1; i++) {
            if (i !== 0) {
                newVersion = newVersion + " " + gameID[i];
            } else {
                newVersion = gameID[i];
            }
        }
        newVersion = newVersion + " " + newVersionString;
        return newVersion;
    }
}
