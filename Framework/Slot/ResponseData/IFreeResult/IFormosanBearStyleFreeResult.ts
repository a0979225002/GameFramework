namespace fcc {

    export namespace IF {

        /**
         * 台灣黑熊玩法免費模式RoundDetail內部資料
         */
        export type IFormosanBearStyleFreeRoundDetailData = {
            FreeSpinCount: number
            GameMode: number
            GridAfter: Array<number>,
            GridBefore: Array<number>,
            LineGrid: Array<number>,
            LineWin: Array<number>,
            LookAt: Array<number>,
            RoundLevelWin: number
            RoundWin: string
            ScatterPos: Array<number>,
            TotalWin: string,
            StickyReels: Array<number>
        }

        /**
         * 台灣黑熊玩法免費模式RoundDetailObject物件
         */
        export interface IFormosanBearStyleFreeRoundDetailObject {
            [name: string]: IFormosanBearStyleFreeRoundDetailData;
        }

        /**
         * @Author 蕭立品
         * @Description 台灣黑熊樣式,免費模式回傳參數
         * @Date 2021-10-18 下午 06:26
         * @Version 1.0
         */
        export interface IFormosanBearStyleFreeResult extends IBaseSlotResultModel {
            TotalWinPoint: number;
            UserPointBefore: number;
            UserPointAfter: number;
            GameState: number;
            LevelWin: number;
            RoundDetail: IFormosanBearStyleFreeRoundDetailObject;
        }
    }
}
