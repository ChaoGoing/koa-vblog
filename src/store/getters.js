export const isPlaying = state => state.isPlaying
export const singer  = state => state.singer
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentSong = (state) =>{
    return state.playList[state.currentIndex] || {}
}


export const currentPath = state => state.currentPath
export const frontPath = state => state.frontPath
export const token = state => state.token