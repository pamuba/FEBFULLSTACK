import {fork, call, takeLatest, takeEvery, put} from 'redux-saga/effects'
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

    }
}

function* createUser(action){
    // console.log(action)
    // yield
    try{
        yield call(api.createUser, {username:action.payload.username, name:action.payload.name})
        yield call(getUsers)
    }
    catch(e){}
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
    fork(watchCreateUserRequest)
    //
]

export default userSagas