<template>
    <div class="imgCard">
        <img :src="itemData.url"  alt="">
        <p class="title">#{{itemData.title}}</p>
        <p class="content">{{itemData.content}}</p>
        <p class="date">
            <Icon type="md-copy" :size="16" />{{itemData.createDate}}
        </p>
    </div>
</template>
<script>
export default {
    props:{
        itemData:{
            type:Object,
            default:{
                title:"无题",
                content:"无解",
                url:"",
                createDate:'不详'
            }
        }



    },
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{

    },
    mounted(){
        this.$nextTick(()=>{
            console.log(this.itemData)
        })
    }
}
</script>
<style lang="less" scoped>
    .imgCard{
        display: inline-block;
        padding: 10px;
        background-color:#fff;
        
        box-shadow: 5px 5px 10px #ddd;
        text-align: left;
        // margin-right: 20px;
        .title{
            font-size: 18px;
            color:#555;
        }
        .content{
            // height:50px;
            
            overflow: hidden;
            text-indent: 10px;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;

        }
        .date{
            margin-top: 10px;
        }
        img{
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center top;
            
        }
    }

</style>