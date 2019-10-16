let SET_CURRENT_PATH = 'SET_CURRENT_PATH'

const mutations = {
    test(){
        console.log("test")
    },

    SET_SINGER(state, singer){
        state.singer = singer
    },

    SET_PLAYING_STATE(state, isplaying){
        state.isplaying = isplaying
    },


    SET_PLAYLIST(state, list){
        state.playlist = list
    },

    SET_CURRENT_INDEX(state, index){
        state.currentIndex = index
    },


    SET_CURRENT_PATH(state, path){
        state.currentPath = path;
    }

}

export default mutations