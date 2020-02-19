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
            ]
        },
        navBarPage: {
            users: [
                {id: 1, name: 'Andrew', avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"},
                {id: 2, name: 'Sveta',avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"},
                {id: 3, name: 'Sasha', avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"},
                {id: 4, name: 'Viktor', avatarImg: "https://static.wixstatic.com/media/60a4cc_7cd4ab091bc442f699f05caf5269f937~mv2_d_2083_2083_s_2.png/v1/fit/w_1024,h_1024,al_c,q_80/file.png"},
            ],
        },

    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
}



export default store;