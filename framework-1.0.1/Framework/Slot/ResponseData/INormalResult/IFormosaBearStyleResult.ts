namespace fcc {

    export namespace IF {

        /**
         * 台灣黑熊玩法RoundDetail內部資料
         */
        export type IFormosanBearStyleRoundDetailData = {
            CloneReels: Array<number>,
            FreeSpinCount: number
            GameMode: number
            GridAfter: Array<number>,
            GridBefore: Array<number>,
            IsClone: boolean
            LineGrid: Array<number>,
            LineWin: Array<number>,
            LookAt: Array<number>,
            RoundLevelWin: number
            RoundWin: string
            ScatterPos: Array<number>,
            ScatterWin:number,
            TotalWin: string
        }

        /**
         * 台灣黑熊玩法RoundDetailObject物件
         */
        export interface IFormosanBearStyleRoundDetailObject {
            [name: string]: IFormosanBearStyleRoundDetailData;
        }

        /**
         * @Author 蕭立品
         * @Description 台灣黑熊樣式,一般模式,回傳參數
         * @Date 2021-10-18 下午 06:26
         * @Version 1.0
         */
        export interface IFormosanBearStyleResult extends IBaseSlotResultModel {
            TotalWinPoint: number;
            UserPointBefore: number;
            UserPointAfter: number;
            GameState: number;
            LevelWin: number;
            RoundDetail: IFormosanBearStyleRoundDetailObject;
        }
    }
}
