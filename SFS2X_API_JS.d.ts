declare module SFS2X{
    class SFSEvent {
        static CONNECTION: string;    
        static ROOM_JOIN_ERROR: string;
        static LOGIN: string;
        static ROOM_JOIN: string;
        static ROOM_ADD: string;
        static ROOM_CREATION_ERROR: string;
        static LOGIN_ERROR: string;
        static CONNECTION_LOST: string;
        static USER_ENTER_ROOM: string;
        static USER_EXIT_ROOM: string;
        static USER_VARIABLES_UPDATE: string;
        static LOGOUT: string;
        
        success:boolean;
    }      
    module Entities{
        class SFSUser{
            
        }
        module Variables{
            class SFSUserVariable{
                constructor(name: string,value: any,type?: number);
            }
        }
    }
    module Requests{
        module System{
            class SetUserVariablesRequest{
                constructor(userVariables:SFS2X.Entities.Variables.SFSUserVariable[]);
            }
            class LoginRequest{
                constructor(userName:string,password?:string,params?:any,zoneName?:string);
            }
            class JoinRoomRequest{
                constructor(room:any,password?:string,roomIdToLeave?:number,asSpect?:boolean);
            }
        }
    }
    
}
declare class SmartFox{
    constructor(config:any);
    config: any;
    connect(host?:string,port?:string,useSSL?:boolean);
    addEventListener(evtType:string, listener:Function, scope:any);
    send(request:any);
}

