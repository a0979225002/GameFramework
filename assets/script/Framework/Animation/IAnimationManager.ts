interface IAnimationManager {
    handler : IAnimationHandler;
    spineName :Map<string,Map<string,string>>;

    getSpineName(resName:string,key:string):string;

}
