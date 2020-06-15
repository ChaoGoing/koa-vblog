<template>
    <div class="article-header">
        <p class="post-title">{{title}}</p>
        <div class="post-meta">
            <span class="post-time"> 
                <Icon type="md-copy" :size="16" />
                发表于 {{commitDate}}
            </span>
            <div class="post-word">
                <span class="post-word-item">
                    <Icon type="ios-list-box-outline" />
                    字数统计 {{wordNumber}}
                </span>
                <span class="post-divider">|</span>
                <span class="post-word-item">
                    <Icon type="ios-alarm-outline" />
                    阅读时长 {{Math.ceil(wordNumber/60/6)}} 分钟
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
        },
        commitDate:{
            type:String,
            default:"时间不详"
        },
        wordNumber:{
            type:[Number,String],
            default:123
        }
    },
    data(){
        return {

        }
    }
}
</script>
<style lang="less" scoped>
    .article-header{
        padding: 20px 50px;
        .post-title{
            
            color: #555;
            font-size: 22px;
        }
        .post-meta{
            text-align: center;
            margin: 5px 0 0 0;
            color: #999;
            font-family: 'Lato', "PingFang SC", "Microsoft YaHei", sans-serif;
            font-size: 12px;
            text-align: center;
        }
        .post-word{
            padding-top:5px;
            .post-word-item{
                padding:0 5px;
            }

        }
    }
</style>