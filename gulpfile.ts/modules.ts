
const fs = require('fs');

/**
 * 模块配置
 */
 export interface ModulesConfig {
    [key:string]:{
        /**
         * 保留此模块
         */
		keep?:boolean;
		
		/**
		 * 是否为基础模块
		 */
        baseModule?:boolean;

		/**
		 * 默认是否保留此模块
		 */
		keepDefault?:boolean;

		/**
		 * 模块描述
		 */
		description?:string;

        /**
         * 库文件
         */
        libs?:string[];

        /**
         * 模块依赖
         */
        dependences?:string[];

        /**
         * 模块源文件
         */
        sources?:string[];

        /**
         * 模块关键字
         */
        keywords?:string[];
    }
}

/**
 * 模块树
 */
export class ModulesTree {

    /**
     * 模块表
     */
    private _modules:ModulesConfig = {};

    /**
     * 构建模块树
     * @param configFile 模块配置文件
     */
    constructor(config:string|ModulesConfig){
		if(typeof config == "string"){
			this._modules = JSON.parse(fs.readFileSync(config, { encoding : 'utf-8' }));
		}else{
			this._modules = config;
		}
    }

    /**
     * 保留模块数组
     * @param mnames 
     */
    public keepModules(mnames:string[]){
        if(mnames){
            for(let mname of mnames){
                this.keepModule(mname);
            }
        }
    }

    /**
     * 保留模块
     * @param mname 
     */
    public keepModule(mname:string){
        let module = this._modules[mname];
        if(module){
            if(!module.keep){
                module.keep = true;
                this.keepModules(module.dependences);
            }
        }
	}

    /**
     * 保留所有模块
     */
    public keepAllModules(){
        for(let mname in this._modules){
            let module = this._modules[mname];
            module.keep = true;
        }
    }
	
	/**
	 * 收集模块
	 */
	public collectModules(){
		let modules:string[] = [];
        for(let mname in this._modules){
            let module = this._modules[mname];
            if(module.keep){
                modules.push(mname);
            }
        }
        return modules;
	}

    /**
     * 收集源文件
     */
    public collectSources(){
        let sources:string[] = [];
        for(let mname in this._modules){
            let module = this._modules[mname];
            if(module.keep && module.sources){
                sources.push(...module.sources);
            }
        }
        return sources;
    }

    /**
     * 收集LIB库文件
     */
    public collectLibs(){
        let libs:string[] = [];
        for(let mname in this._modules){
            let module = this._modules[mname];
            if(module.keep && module.libs){
                libs.push(...module.libs);
            }
        }
        return libs;
    }
}
