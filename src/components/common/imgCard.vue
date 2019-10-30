<template>
    <div class="imgCard">
        <img :src="imgUrl"  alt="">
        <p class="title">#生而为魔</p>
        <p class="content">#生而为魔</p>
        <span>
            <Icon :size="16" type="ios-thumbs-up-outline" />0
        </span>
    </div>
</template>
<script>
export default {
    props:{
        imgUrl:{
            type:String,
            default:"/api/character/character1.jpg"
        },



    },
    data(){
        return {

        }
    },
    methods:{

    },
    computed:{

    },
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
            height:50px;
        }
        img{
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center top;
        }
    }

</style>