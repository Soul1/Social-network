import {authAPI, usersAPI} from "../../api/api";
import {updateObjInArr} from "../../utils/objs-helpers";

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = "users/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE-IS-FOLLOWING-PROGRESS";

let initialState = {
  users: [],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users:
          updateObjInArr(
            state.users,
            action.userId,
            'id',
            {followed: true},
          )
      };

    case UNFOLLOW:
      return {
        ...state,
        users:
          updateObjInArr(
            state.users,
            action.userId,
            'id',
            {followed: false},
            )
      };

    case SET_USERS:
      return {...state, users: action.users};

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage};

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.totalCount};

    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching ?
          [...state.followingInProgress, action.userId]
          : [state.followingInProgress.filter(id => id != action.userId)]
      };

    default:
      return state
  }
};

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let data = await usersAPI.getUsers(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setUsersTotalCount(data.totalCount))
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  let data = await apiMethod(userId);
  if (data.resultCode == 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
};

export const follow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let apiMethod = usersAPI.follow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
};

export const unfollow = (userId) => async (dispatch) => {
  dispatch(toggleFollowingProgress(true, userId));
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess)
};


export default usersReducer