export enum AutoType {
    /**
     * 無限AUTO
     * @type {AutoType.auto}
     */
    auto = -1,

    /**
     * 直到Free出現後,結束AUTO狀態
     * @type {AutoType.auto}
     */
    freeEnd = -2,

    /**
     * AUTO 50次
     * @type {AutoType.auto50}
     */
    auto50 = 50,

    /**
     * AUTO 100次
     * @type {AutoType.auto100}
     */
    auto100 = 100,

    /**
     * AUTO 500次
     * @type {AutoType.auto100}
     */
    auto500 = 500,

    /**
     * AUTO 1000次
     * @type {AutoType.auto1000}
     */
    auto1000 = 1000
}

export enum LanguageType {
    /**
     * 台灣
     * @type {LanguageType.Taiwan}
     */
    Taiwan = "NTD",

    /**
     * 中國
     * @type {LanguageType.Chinese}
     */
    Chinese = "CNY",

    /**
     * 印度
     * @type {LanguageType.India}
     */
    India = "IND",

    /**
     * 泰國
     * @type {LanguageType.Thailand}
     */
    Thailand = "THB",

    /**
     * 美國
     * @type {LanguageType.America}
     */
    America = "USD",

    /**
     * 越南
     * @type {LanguageType.Vietnam}
     */
    Vietnam = "VND",

}