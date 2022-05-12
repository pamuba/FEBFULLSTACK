import {fork, call, takeLatest, takeEvery, put, take} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

//worker sagas
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        // console.log(result)
        yield put(actions.getUsersSuccess({
            items:result.data
        }))
    }
    catch(e){
        yield put(actions.usersError({
            error: 'An error occurred when trying get all the users'
        }));
    }
}

function* createUser(action){
    // console.log(action)
    // yield
    try{
        yield call(api.createUser, {username:action.payload.username, name:action.payload.name})
        yield call(getUsers)
    }
    catch(e){
        yield put(actions.usersError({
            error: 'An error occurred when trying to create the user'
        }));
    }
}
function* deleteUser(userId){
    try{
        yield call(api.deleteUser, userId);

        yield call(getUsers);
    }catch(e){
        yield put(actions.usersError({
            error: 'An error occurred when trying to delete the user'
        }));
	}
}
function* watchDeleteUserRequest(){
    while(true){
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser,{
            userId:  action.payload.userId
        });
    }
}

//watcher sagas
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}

const userSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest)
    //
]

export default userSagas