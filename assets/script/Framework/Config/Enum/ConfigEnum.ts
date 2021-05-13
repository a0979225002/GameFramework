enum AutoType {
    auto = -1,
    freeEnd = -2,
    auto50 = 50,
    auto100 = 100,
    auto500 = 500,
    auto1000 = 1000
}

export {AutoType};

enum LanguageType {
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

export {LanguageType};