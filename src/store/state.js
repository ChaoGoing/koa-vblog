const state = {
    token:null,

    /**播放器 */
    singer:'',
    isPlaying:false,
    playMode:'none',
    playList:[],
    sequenceList:[],
    currentIndex:-1,
    /**播放器 */

    /**后台 */
    //路由
    currentPath:'',
    frontPath:'/fIndex'
    /**后台 */


}

export default state