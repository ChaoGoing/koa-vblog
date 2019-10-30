<template>
    <div class="articleInfo">
        <aHeader :title="articleInfo.title" :commitDate="articleInfo.commitDate" ></aHeader>
        <div class="article-content" v-html="articleContent" >

        </div>
    </div>
</template>
<script>
import aHeader from '../../common/articleHeader'
export default {
    components:{
        aHeader
    },
    data(){
        return {
            
            articleId:null,
            articleContent:"",
            articleInfo:{
                title:''
            }
        }
    },
    methods:{
        getArticleInfo(){
            this.cAxios.articleContent(this,{params:{articleId:this.articleId}}).then(res=>{
                // console.log(res.data)
                this.articleInfo = res.data;
                this.articleContent = res.data.content;
            })
        }
    },
    computed:{

    },
    mounted(){
        this.$nextTick(()=>{
            this.articleId = this.$route.query.articleId;
            this.getArticleInfo();
        })
    }
}
</script>
<style lang="less" scoped>
    .articleInfo{
        background-color: #fff;
        .article-content{
            padding: 20px;
            font-size: 16px;
            text-align: justify;
            font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
            .language-javascript{
                overflow-x: auto !important;
                background-color: #fff;
                padding: 10px;
            }
        }
        
    }
</style>
<style>
pre[class^="language"]{
    overflow-x: auto !important;
    background-color: #eee;
    padding: 10px;
}
</style>