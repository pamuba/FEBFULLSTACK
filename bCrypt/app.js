const bcrypt = require('bcrypt');
//IIFE
(
    async function main(){
        const saltRounds = 10
        const originalPassword = "Complex@123"
        const password = "Complex@123"

        const salt = await bcrypt.genSalt(saltRounds);

        const hashPass = await bcrypt.hash(originalPassword, salt)
        console.log(hashPass)//save in the database

        const isMatch = await bcrypt.compare(password, hashPass);
        console.log(isMatch)
    }
)();