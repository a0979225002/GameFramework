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
             * 額外添加新的語系樣式
             * @param {string | fcc.type.LanguageType} key - 國家簡寫
             * @param {fcc.IF.ILanguageStyle} style - 新樣式
             */
            addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle): void;

            /**
             * 更新語系,會更新當前所有已經綁定的 cc.Label
             * @param {string | fcc.type.LanguageType} language - 要更新的語系
             */
            updateLanguage(language: string | type.LanguageType): void;

            /**
             * 重新獲取語系,並更新緩衝內
             * @param {object} languageObject - 語系資源
             * @param {string | fcc.type.LanguageType} language - 有參數為強制更新該參數語系,無參為當前拿取當前語系更新緩衝
             */
            reTakeLanguageBuffer(languageObject:object,language?: string | type.LanguageType);

            /**
             * 更新文字該label文字
             * @param {cc.Label} target - 要更新的目標
             * @param {string?} textKey - 要更新的文字 key
             * @return {this}
             */
            updateText(target: cc.Label, textKey?: string): this;

            /**
             * 更新所有透過 updateText更新的組件,更新該組件樣是
             * 注意 : 須配合 updateText 一起使用
             * @param {boolean} save - 是否要保存 label組件,可配合updateLanguage()方法將已經綁定的label全部再次更換語系文字
             * @param {number} customFontSize - 強制更新字定義的大小
             */
            updateStyle(save: boolean, customFontSize?: number): void;

            /**
             * 清除無用的語系緩存
             */
            removeStringBuffer(language?: string | type.LanguageType): void;

            /**
             * 添加當前語系
             */
            setLanguage(languageObject:object):void;

            /**
             * 獲取當前語系數據,返回該key對應的文字
             * @param {string | undefined} key - 拿取當前緩存語系文本的某一段文字
             * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
             */
            getText(key: string): string;

            /**
             * 獲取當前語系緩存
             * @return {object}
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
