<template>
    <p>阿超的宝藏</p>
</template>
<script>
    export default {
        data() {
            return {
                //mydata: null,

            }
        },
        methods: {

        },
        computed: {

        },
        mounted() {
            this.$nextTick(() => {
                console.log(this.mydata);
                this.cAxios.login(this, { method: "post", params: { name: "achao" } }).then(() => {
                    console.log("finish")
                    console.log(this.login);
                })
            })
        }



    }

</script>
 <style>

</style>