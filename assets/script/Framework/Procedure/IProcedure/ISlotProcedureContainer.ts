interface ISlotProcedureContainer {

    //自訂一開始效果(按鈕,背景.....)
    onCustomizeStart(): Promise<void>;

    //sine in grid
    onSineInGrid(): Promise<void>;

    //跑格子->監聽事件(即停)
    onRunGrid(): Promise<void>;

    //停止格子
    onSineOutGrid(): Promise<void>;

    //自訂義停止效果(更換音樂,更換按鈕圖案,更換背景圖案.......)
    onCustomizeEnd(): Promise<void>;

    //顯示結果
    onShowAnswer(): Promise<void>;

}