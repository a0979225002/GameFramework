export enum GameState {

    /**
     * 無狀態,待機狀態...
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

export enum GameType {
    FREE = 'FREE',
    NORMAL = 'NORMAL',
}