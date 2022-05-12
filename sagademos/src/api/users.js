import axios from 'axios'

export const getUsers = () => {
    return axios.get('/users', {
        params:{
            limit:1000
        }
    })
}
export const createUser = ({username, name}) => {
    return axios.post('/users', {
        username,
        name
    })
}

export const deleteUser = ({userId}) => {
    console.log(userId)
    return axios.delete(`/users/${userId}`);
};