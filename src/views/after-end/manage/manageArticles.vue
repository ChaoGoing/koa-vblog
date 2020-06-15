<template>
    <div class="wrapper">
        <section class="serarchBar"> 
            <Row>
                <Col span="12">
                    <Input @click.native="search" search enter-button="Search" placeholder="文章标题或内容" v-model="searchText" />
                
                </Col>
                <Col>
                    <Button type="primary" style="margin-left:5px">刷新</Button>
                    <Button type="primary" style="margin-left:5px" @click="toAddPage">添加</Button>
                </Col>
                
            </Row>
            

        </section>
         <Table :style="{'min-height':'450px'}" border :columns="columns" :data="listData" size="small"></Table>
         <section class="pageFotter">
             <Page :total="dataCount"  :page-size="pageSize" @on-change="changePage" show-total/>
         </section>
          
    </div>
</template>
<script>
export default {
    data(){
        return {
            listData:[],
            columns: [
                        {
                            title: '文章名称',
                            key: 'title',
                        },
                        {
                            title: '内容预览',
                            key: 'preview'
                        },
                        {
                            title: '提交时间',
                            key: 'commitDate'
                        },
                        {
                            title: '操作',
                            key: 'action',
                            width: 150,
                            align: 'center',
                            render: (h, params) => {
                                return h('div', [
                                    h('Button', {
                                        props: {
                                            type: 'primary',
                                            size: 'small'
                                        },
                                        style: {
                                            marginRight: '5px'
                                        },
                                        on: {
                                            click: () => {
                                                this.toEditPage(params.row.articleId)
                                            }
                                        }
                                    }, '编辑'),
                                    h('Button', {
                                        props: {
                                            type: 'error',
                                            size: 'small'
                                        },
                                        on: {
                                            click: () => {
                                                this.remove(params.index)
                                            }
                                        }
                                    }, '删除')
                                ]);
                            }
                        }
            ],
            searchText:"",
            pageSize:10,
            pageNum:1,
            dataCount:0,
                // listData: [
                //     {
                //         title: 'John Brown',
                //         preview: 18,
                //         commitDate: 'New York No. 1 Lake Park'
                //     },
                // ]
        }
    },
    methods:{
        getList(){
            this.cAxios.getArticleList(this).then((res) => {
                this.dataCount = res.data.length;
                this.listData = res.data.length < this.pageSize? res.data: res.data.slice(0, this.pageSize);
                // console.log(this.listData)
            })
        },
        toEditPage(articleId){
            // console.log(articleId)
            this.$router.push({
                path:'/editArticle',
                query:{
                    articleId
                }
            })
        },
        search(){
            
            if(!this.searchText) return this.listData = this.getArticleList;
            
            this.listData = this.getArticleList.data.filter((item)=>{
                return item.title.includes(this.searchText)
            })
        },
        changePage(index){
            let _start = (index - 1) * this.pageSize,
                _end = index  * this.pageSize;
            this.listData = this.getArticleList.data.slice(_start, _end)
        },

        toAddPage(){
            this.$router.push({
                path:'/addArticle',
                // query:""     这里偷懒，后台user_id默认为1,反正没其他人用吧哈哈哈
            })
        }
    },
    mounted(){
        this.$nextTick(() => {
                this.getList();
                console.log(this.getArticleList)
        })

    }
}
</script>
<style lang="less" scoped>
    .wrapper{
        height: auto;
        min-height: 100%;
        padding: 10px;
        // background-color: #fff;
        .serarchBar{
            margin-bottom: 10px;
        }
        .pageFotter{
            margin:10px 0;
        }
    }
</style>