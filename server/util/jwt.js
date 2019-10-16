const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');


class Jwt{
    constructor(data){
        this.token = data;
    }
    generatorToken(){
        let data = this.data,
            created = Math.floor(Date.now() / 1000),
            cert = fs.readFileSync(__dirname, '../pem/rsa_private_key.pem');
        
        let token = jwt.sign({ data, exp:created + 3600,}, cert, {algorithm:'RS256'} );
        return token;
    }
    verifyToken(){
        let token = this.token,
            cert = fs.readFileSync(__dirname, '../pem/rsa_public_key.pem');

        try{
            let result = jwt.verify(token, cert, {algorithm:['RS256']}) || {};
            let { exp = 0 } = result, current = Math.floor(Date.now() / 1000);
            console.log(result);
            return current < exp ? result.data : true;
 
        }catch(e){
            return 'err'
        }
    
    
    }   

}

module.exports = Jwt