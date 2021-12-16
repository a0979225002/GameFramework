namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description 擴展有線Slot遊戲狀態封包
         * @Date 2021-06-03 下午 04:58
         * @Version 1.0
         */
        export interface IExtendHasLineResult extends IBaseSlotResultModel {

            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 玩家現有金額(押注後)
             */
            UserPointBefore: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 是否有神秘寶箱 0:沒有 1:有
             */
            SecretState: number;
            /**
             * 神秘寶箱位置 0:沒有 1:有
             */
            SecretChange: Array<number>;
            /**
             * 神秘寶箱格子圖案
             */
            SecretSymbol: number;
            /**
             * 每條線贏分
             */
            LineWin: Array<number>;
            /**
             * 每條線贏幾格
             */
            LineGrid: Array<number>;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 免費遊戲次數 (0:沒有 1~99次)
             */
            FreeSpinCount: number;
            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
            /**
             * 活動轉數
             */
            BonusEventCount: number;
        }
    }
}
