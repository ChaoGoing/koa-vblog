<template>
    <div class="articles">
        <List item-layout="vertical" style="text-align:left;">
            <ListItem   v-for="item in articleList" 
                        :key="item.title" 
                        @click.native="toInfoPage(item.articleId)"
            >
                <ListItemMeta :title="item.title" :description="'关键词:  '+ item.label + '  ' +item.keyword" />
                正文: {{ item.preview }}
                <template slot="action">
                    <li>
                        <Icon type="ios-star-outline" /> 0
                    </li>
                    <li>
                        <Icon type="ios-thumbs-up-outline" /> 0
                    </li>
                    <li>
                        <Icon type="ios-chatbubbles-outline" /> 0
                    </li>
                    <li>
                        <Icon type="ios-time-outline" />{{item.commitDate}}
                    </li>
                </template>
                <template slot="extra">
                    <img :src="item.url" style="height:100px;">
                </template>
            </ListItem>
        </List>

        <section class="pageFotter" >
             <Page :total="dataCount"  :page-size="pageSize" @on-change="changePage" show-total/>
         </section>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            articleList:[],


            pageSize:6,
            pageNum:1,
            dataCount:0,
        }
    },
    methods:{
        getArticles(){
            this.cAxios.articles(this).then((res)=>{
                this.dataCount = res.data.length;
                this.articleList = res.data.length < this.pageSize? res.data: res.data.slice(0, this.pageSize);
                // console.log(this.articleList)
            })
        },
        changePage(index){
            let _start = (index - 1) * this.pageSize,
                _end = index  * this.pageSize;
            this.articleList = this.articles.data.slice(_start, _end)
        },
        toInfoPage(articleId){
            // console.log(articleId)
            this.$router.push({
                path:'/articleInfo',
                query:{
                    articleId
                }
            })
        }
    },
    computed:{

    },
    mounted(){
        this.getArticles();
    },
    
}
</script>
<style scoped>
    ivu-list ivu-list-default ivu-list-vertical ivu-list-split{
        text-align: left !important;
    }
</style>
<style lang="less" scoped>
    .articles{
        background-color: #fff;
        padding: 10px;
        .ivu-list-item{
            height: auto !important;
        }
        .pageFotter .ivu-page{
            text-align: right;
        }
    }


    
</style>