const state ={
    isCollapse:false,
    selectMeun:[]
}

const mutations = {
    collapseMenu(state){
        state.isCollapse = !state.isCollapse
    }
}

export default{
    state,
    mutations
}