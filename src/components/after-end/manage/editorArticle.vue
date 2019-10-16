<template>
    <div class="editorArticle">
        <section v-html="msg" class="msg">
            
        </section>
        <section class="tinymce-editor">
            <tinymce-editor ref="editor"
                v-model="msg"
                :disabled="false"
            >
            </tinymce-editor>
        </section>
    </div>
    
</template>
<script>
import tinymceEditor from '../../common/editor'
export default {

    components:{
        tinymceEditor
    },
    data(){
        return {
            msg:''
        }
    },
    methods:{
        
    }

}
</script>
<style lang="less" scoped>
    .editorArticle{
        position: relative;
        height: 100%;
        .msg{
            background-color:#fff;
            height: 55%;
            margin: 2% auto;
            overflow: auto;
            padding: 10px;

        }

        .tinymce-editor{
            
        }
    }
</style>