namespace fcc {

    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)無線類免費狀態封包
         * @Date 2021-05-31 下午 03:45
         * @Version 1.0
         */
        export interface INoLineFreeResultModel extends IBaseSlotResultModel {

            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 剩餘免費遊戲次數 (0:沒有 1~99次)
             */
            Count: number;
            /**
             * 免費遊戲累計贏分
             */
            FreeSpinWin: number;
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;

            /**
             * 15格的資料
             */
            Grid: Array<number>;

            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;

            /**
             * 是否有鬼牌 0:沒有 1:有
             */
            ChangeState: number;
            /**
             * 15格的資料 換圖 0:不換 1:換
             */
            Change: Array<number>;
            /**
             * 哪幾格贏 0:沒贏 1:贏
             */
            GridWin: Array<number>;

            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
             */
            LevelWin: number;
            /**
             * 再中免費遊戲次數 0:無 1~99:次
             */
            FreeToFree: number;

            /**
             * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number
            /**
             * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            FreeLevelWin: number;
        }
    }
}
