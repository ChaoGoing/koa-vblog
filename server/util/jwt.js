const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');


let jwtUtil = {

    generatorToken(data){
        let 
            created = Math.floor(Date.now() / 1000),
            cert = fs.readFileSync(path.join(__dirname, '../pem/rsa_private_key.pem'));
        
        let token = jwt.sign({ data, exp:created + 3600,}, cert, {algorithm:'RS256'} );
        return token;
    },
    verifyToken(token){
        console.log("处理token",token)
        let 
            cert = fs.readFileSync(path.join(__dirname, '../pem/rsa_public_key.pem'));
        try{
            let result = jwt.verify(token, cert, {algorithms: ['RS256']}) || {};
            // let result = jwt.verify(token, cert, {algorithm:['RS256']}) || {};
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            
            return current < exp ? result.data : true;
 
        }catch(e){
            return e
        }
    
    
    }   

}

module.exports = jwtUtil