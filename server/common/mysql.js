var config = require('./databaseConfig')
var mysql = require('mysql')

var pool = mysql.createPool({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
})

let query = function(sql, value){
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, connection)=>{
            if(err){
                reject(err)
            }else{
                
                connection.query(sql, value, (err, rows)=>{
                    if(err){
                        reject(err)
                    }else{
                        console.log("rows=>", rows)
                        resolve(rows)
                    }
                    connection.release();
                })
            }


        })



    })
}

let test = function(){
    let _sql = `select * from zc_users`
    return query(_sql)
}

let article = {
    add(){


    },
    getList(){
        let _sql = `SELECT article_title as title, DATE(article_date) as commitDate FROM zc_articles ORDER BY article_date DESC`
        return query(_sql)
    }


}

let common = {
    checkLogin(account, password){
        let _sql = `SELECT COUNT(user_name) FROM zc_users WHERE user_name = ${account} AND user_password = ${password}`;
        return query(_sql)
    },
    getToken(){

    },
    setToken(){

    }

}

module.exports = {
    article, common
}
