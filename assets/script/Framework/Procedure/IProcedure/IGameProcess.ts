interface IGameProcess {

    //自訂開始遊戲前的效果(按鈕,背景....)
    onCustomizeStart(): this;

    //sine in grid
    onSineInGrid(): this;

    //跑格子->監聽事件(即停)
    onRunGrid(): this;

    //停止格子
    onSineOutGrid(): this;

    //自訂義停止效果(更換音樂,更換按鈕圖案,更換背景圖案.......)
    onCustomizeEnd(): this;

    //顯示結果
    onShowAnswer(): this;

    //將所有阻塞的異步方法清除
    remake(): void;

    start();

}