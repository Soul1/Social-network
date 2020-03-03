import profileReducer, {addPostActionCreator, deletePost} from "../Reducers/profile-reducer";

let state = {
  posts: [
    {id: 1, message: 'dsds', likesCount: 2},
    {id: 2, message: 'dstrs', likesCount: 5},
    {id: 3, message: 'dsdtrs', likesCount: 6}
  ]
};
it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('Hi');
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(4)
  expect(newState.posts[3].message).toBe('Hi')
  expect(newState.posts[3].likesCount).toBe(0)

});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(2)

});
it(`after deleting length shouldn't if id is incorrect`, () => {
  // 1. test data
  let action = deletePost(122);
  // 2. action
  let newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(3)

});

