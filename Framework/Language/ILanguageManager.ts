namespace fcc {

    export namespace IF {

        /**
         * @Author 蕭立品
         * @Description (介面) 語言樣是樣式表
         * @Date 2021-06-28 下午 12:07
         * @Version 1.0
         */
        export interface ILanguageStyle {
            fontSize: number,
            lineHeight: number,
            textScale: {
                default: number,
                title: number,
                text: number,
            }
            fontFamily: string;
        }

        /**
         * @Author 蕭立品
         * @Description (介面)語系管理
         * @Date 2021-06-28 下午 12:07
         * @Version 1.0
         */
        export interface ILanguageManager {

            /**
             * 當前語系
             */
            nowLang: string | type.LanguageType;

            /**
             * 當前綁定的組件
             */
            nowLanguageLabel: Map<cc.Label, string>;

            /**
             * 當前所有語系樣式列表
             */
            style: Map<string | type.LanguageType, IF.ILanguageStyle>;

            /**
             * 額外添加新的語系樣式
             * @param {string | fcc.type.LanguageType} key - 額外語系鍵值
             * @param {fcc.IF.ILanguageStyle} style - 新樣式
             */
            addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle): void;

            /**
             * 更新語系,會更新當前所有已經綁定的 cc.Label
             * @param {string | fcc.type.LanguageType} language - 要更新的語系
             */
            updateLanguage(language: string | type.LanguageType): void;

            /**
             * 重新載入語系
             */
            reLoadNowLanguage();

            /**
             * 更新文字,會順便更新當前語系樣式
             * @param {cc.Label} target - 要更新的目標
             * @param {string} textKey -
             * @return {this}
             */
            updateText(target: cc.Label, textKey: string): this;

            /**
             * 更新所有透過 updateText更新的組件,更新該組件樣是
             * 注意 : 須配合 updateText 一起使用
             */
            updateStyle(): void;

            /**
             * 清除無用的語系緩存
             */
            removeStringBuffer(): void;

            /**
             * 獲取當前語系數據,返回該key對應的文字
             * @param {string | undefined} key - 拿取當前緩存語系文本的某一段文字
             * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
             */
            getText(key: string): string;

            /**
             * 獲取當前語系數據
             * @return {object} - 獲取當前語系數據,返回所有數據
             */
            getAllText(): object;

            /**
             * 獲取當前語系
             * @return {string}
             */
            getLanguage(): string;
        }
    }
}