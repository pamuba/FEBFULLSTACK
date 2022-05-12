import {quotes,users} from './fakedb.js'
import {randomBytes} from 'crypto'
const resolvers = {
    Query:{
       users:()=>users,
       user:(_,{_id})=>users.find(user=>user._id == _id),
       quotes:()=>quotes,
       iquote:(_,{by})=>quotes.filter(quote=>quote.by == by)
    },
    User:{
        quotes:(ur)=>quotes.filter(quote=>quote.by == ur._id)
    },
    Mutation:{
        signupUser:(_,{userNew})=>{
             
        }
    }
}

export default resolvers