const Fs = require("fs");
const Path = require("path");

/**
 * 查找文件类型
 */
export enum FindFileType {
	FILE = 1,
	DIRECTORY = 2,
}

/**
 * 在指定目录中查找文件
 * @param dir 
 * @param filename 
 */
export function findFile(dir:string, filename:string, types:number = FindFileType.FILE | FindFileType.DIRECTORY){
	for(let file of Fs.readdirSync(dir)){
		let npath = Path.join(dir, file);
		var info = Fs.statSync(npath);
		if((file == filename) && (info.isDirectory() ? types & FindFileType.DIRECTORY : types & FindFileType.FILE)){
			return npath;
		}else if(info.isDirectory()){
			let result = findFile(npath, filename, types);
			if(result){
				return result;
			}
		}
	}
}

/**
 * 获得游戏包
 */
export function getGamePacks(){
    let packs = {};
    let _collectGamePacks;
    _collectGamePacks = (path:string)=>{
        for(let f of Fs.readdirSync(path)){
            let fpath = Path.join(path, f);
            let fstate = Fs.statSync(fpath);
            if(fstate.isDirectory()){
                let metafile = fpath + ".meta";
                if(Fs.existsSync(metafile)){
                    let meta = JSON.parse(Fs.readFileSync(metafile, { encoding : 'utf-8' }));
                    if(meta && meta.isBundle){
                        packs[meta.bundleName || f] = Path.normalize(fpath);
                        continue;
                    }
                }
                _collectGamePacks(fpath);
            }
        }
    };
	packs['main'] = Path.normalize("../Framework");
	_collectGamePacks("../Framework");
    return packs;
}