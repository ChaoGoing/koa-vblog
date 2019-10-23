var config = require('./databaseConfig')
var mysql = require('mysql')

var pool = mysql.createPool({
    host: config.HOST,
    user: config.USERNAME,
    password: config.PASSWORD,
    database: config.DATABASE,
})

let query = function(sql, value){
    try{
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
    }catch(e){
        return "sql error"
    }
    
}

let test = function(){
    let _sql = `select * from ${config.articleTable} `
    return query(_sql)
}

let article = {
    add({title, content, preview="", commitDate, keyword="", label }){
        let _sql = `insert into ${config.articleTable}
        (article_title,article_content,article_preview,article_date,article_keyword)
        values(?,?,?,?,?)`
        return query(_sql, [title,content,preview,commitDate,keyword])
    },
    delete(id){
        let _sql = `DELETE FROM ${config.articleTable} WHERE article_id = ?`
        return query(_sql, [id])
    },
    update({id, title, content, preview="", commitDate, keyword="",  }){
        let _sql = `UPDATE zc_articles
                    SET article_title = ?,article_content = ?,article_preview = ?, article_date = ?,article_keyword =?
                    WHERE article_id = ?`
        return query(_sql, [title, content, preview, commitDate, keyword, id])
    },
    getList(){
        let _sql = `SELECT article_id AS articleId, article_title AS title,  article_preview AS preview, article_keyword AS keyword , DATE_FORMAT(article_date,'%Y-%m-%d %H:%i:%s') as commitDate
                    
                    FROM zc_articles ORDER BY commitDate DESC`
        return query(_sql)
    },
    getArticleInfo(id){
        let _sql = `SELECT label_name AS label, article_title AS title, article_content AS content, article_keyword AS keyword, 
                    DATE_FORMAT(article_date,'%Y-%m-%d %H:%i:%s') AS commitDate 
                    FROM  zc_articles AS a,zc_labels AS l 
                    WHERE article_id = ? AND a.label_id = l.label_id`
        return query(_sql, [id])
    },
    getLabels(){
        let _sql = `SELECT label_id AS index, label_name AS name FROM zc_labels ORDER BY label_id`
        return query(_sql)
    }



}

let common = {
    checkLogin(name, password){
        let _sql = `SELECT COUNT(user_name) AS count FROM zc_users WHERE user_name =? AND user_password = ?`;
        return query(_sql, [name, password])
    },
    getToken(){

    },
    setToken(){

    }

}

module.exports = {
    article, common
}
