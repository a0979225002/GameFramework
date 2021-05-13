/**
 * 待刪除,誤使用
 */
export default class SlotProperties {


   //是否要開啟Debug 模式,注意 : 正式上線時須關閉
   public static isDebug:boolean = true;//

   //自訂義回傳參數(測試用)
   public static isJunit:boolean = true;//

   //贏分時的Gird 動畫使用 動畫呈現(注意 : 只能選擇一個打開)
   public static gridImageIsAnimation:boolean = false;//

   //贏分時的Grid 動畫使用 Spine呈現(注意 : 只能選擇一個打開)
   public static gridImageIsSpine:boolean = false;//

   //是否要API幫你執行 一般贏分的動畫
   public static isCanWinAnmation:boolean = false;

   //是否API幫你執行 免費的開始動畫
   public static hasFreeStartAnimation:boolean = false;

   //是否要API幫你執行結束免費的畫面
   public static hasFreeEndAnimation:boolean = false;

   //一般模式
   public static slotPattern : string = "Normal";//

   //免費模式
   public static slotFreePattern : string = "Normal";//

   //該Slot格子圖片種類 起始 index = 0
   public static gridImgQuantity : number = 10;

   //一般狀態到顯示結果前,需跑得圈數
   public static slotTurn : number = 5;

   //急速模式到顯示結果前,需跑得圈數
   public static slotSpeedUpTurn : number = 4;

   //是否要API幫你執行起始隨機圖片的功能
   public static randomAllGridImg : boolean = true;

   //老虎及每個格子的高度,請讓每個格子高度一致
   public static slotGridHeight : number = 170;

   //當前老虎機每列有幾個格子
   public static slotRowNum : number = 3;

   //老虎機速度(注意 : 此速度是一個格子的移動速度)
   public static slotGirdSpeed : number = 0.05;//

   //老虎機加速倍率
   public static speedUp : number = 2;//

   //加速模式開始時是否整條列一起跑
   public static speedUpColumn = true;

   //一般模式開始時整條列一起跑
   public static normalSlotColumn = false;

   //非加速模式,Slot 每條列 啟動時的間隔時間 (注意 : 加速模式默認全部一起跑)
   public static intervalTimeForEachRow : number = 0.1;


}
