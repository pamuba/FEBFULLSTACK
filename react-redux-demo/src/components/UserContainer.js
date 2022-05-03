import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../redux'

function UserContainer({userData, fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading</h2>
    ): userData.error ? (
        <h2>{userData.error}</h2>
    ):(
        <div>
            <h2>User List</h2>
            <div>
                {
                    userData && userData.users &&
                    userData.users.map(user => <p>{user.name}</p>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        uesrData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)