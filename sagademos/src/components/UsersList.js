import React from 'react'
import {ListGroup, ListGroupItem, Button} from 'reactstrap'

const UsersList = ({users, onDeleteUser}) => {
  console.log(users)
  return (
    <ListGroup>
        {users.sort((a,b)=>{
            if(a.username > b.username){
                return 1
            }else if(a.username < b.username){
                return -1
            }else if(a.name > b.name){
                return 1
            }else if(a.name < b.name){
                return -1
            }else {
                return 0
            }
            
        }).map((user)=>{     
                return (
                    <ListGroupItem key={user.id}>
                    <section style={{display:'flex'}}>
                        <div style={{flexGrow:1, margin:'auto 0'}}>
                            {user.username} {user.name}
                        </div>
                        <div>
                            <Button onClick={()=>onDeleteUser(user.id)} outline color='danger'>Delete</Button>
                        </div>
                    </section>
                </ListGroupItem>
                )
            })
        }
    </ListGroup>
  )
}

export default UsersList