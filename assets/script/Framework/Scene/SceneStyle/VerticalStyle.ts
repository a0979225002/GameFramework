import ErrorManager from '../../Error/ErrorManager'

export default class VerticalStyle implements IStyle {
    
    public executionStyle(width:number,height:number) {
        ErrorManager.instance.executeError("尚未完成直向是配模式")
    }
}
