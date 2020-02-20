import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'dsds', likesCount: 2},
                {id: 2, message: 'dstrs', likesCount: 5},
                {id: 3, message: 'dsdtrs', likesCount: 6}
            ],
            newPostText: '',
        },
        dialogsPage: {
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
            messanges: [
                {id: 1, message: 'Hi3'},
                {id: 2, message: 'H232'},
                {id: 3, message: 'Good morning'},
                {id: 4, message: '....Set///'},
            ],
            newMessageText: '',
        },
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

    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);

        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._state.navbarPage = navbarReducer(this._state.navbarPage, action);

        this._callSubscriber(this._state);

    },
}





export default store;