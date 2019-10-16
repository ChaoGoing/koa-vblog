<template>
    <p>articleList</p>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{

    },
    mounted(){

        this.$nextTick(() => {
                this.cAxios.getArticleList(this).then((res) => {
                    
                })
            })

    }
}
</script>