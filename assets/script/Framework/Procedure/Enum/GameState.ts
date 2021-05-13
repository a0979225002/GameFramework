enum GameState {

    /**
     * 無狀態,待機押注狀態...
     * @type {GameState.STANDBY}
     */
    STANDBY = 'STANDBY',

    /**
     * 一般狀態遊戲中....
     * @type {GameState.PLAYING}
     */
    PLAYING = 'PLAYING',

    /**
     * 免費遊戲中....
     * @type {GameState.FREEING}
     */
    FREEING = 'FREEING',

}

export {GameState};

enum GameType {

    FREE = 'FREE',
    NORMAL = 'NORMAL',

}

export {GameType};

enum ProcedureState {

    customizeStart = 'customizeStart',
    sineInGrid = 'sineInGrid',
    runGrid = 'runGrid',
    sineOutGrid = 'sineInGrid',
    customizeEnd = 'customizeStart',
    showAnswer = 'showAnswer',

}

export {ProcedureState};