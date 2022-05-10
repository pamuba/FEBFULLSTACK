import {fork, call, takeEvery} from 'redux-saga/effects'
import * as actions from '../actions/users'
import * as api from '../api/users'

//worker sagas
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
        console.log(result)
    }
    catch(e){

    }
}

//watcher sagas
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

const userSagas = [
    fork(watchGetUsersRequest)
    //
]

export default userSagas