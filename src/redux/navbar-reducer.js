
let initialState = {
    navbarPage: {
        users: [
            {
                id: 1,
                name: 'Andrew',
                avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"
            },
            {
                id: 2,
                name: 'Sveta',
                avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"
            },
            {
                id: 3,
                name: 'Sasha',
                avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"
            },
            {
                id: 4,
                name: 'Viktor',
                avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"
            },
        ],
    },
}

const navbarReducer = (state = initialState, action) => {
    return state
}
export default navbarReducer