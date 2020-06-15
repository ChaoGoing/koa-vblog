<template>
    <div>
        <!-- 这里不是input，editor里已经有双向绑定，向外层暴露时依旧需要结合value和emit进行v-model绑定，总共进行了两次的v-model -->
        <editor 
            v-model="text"  
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
        </editor>
    </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import Editor from '@tinymce/tinymce-vue'
//这下面是tinymce的插件
import 'tinymce/themes/silver/theme'
import 'tinymce/plugins/image'
import 'tinymce/plugins/link'
import 'tinymce/plugins/code'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/textcolor'
import 'tinymce/plugins/codesample'


export default {
    components: {
        Editor
    },
    props:{
        value:[String, Number],
         disabled: {
            type: Boolean,
            default: false
        },
        plugins: {
            type: [String, Array],
            default: 'lists image media table wordcount codesample'
        },
        toolbar: {
            type: [String, Array],
            default: 'undo redo |  formatselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | file image media | removeformat | codesample'
        }
    },
    data () {
        return {
            init:{
                language_url: '/tinymce/langs/zh_CN.js',
                language: 'zh_CN',
                skin_url: '/static/tinymce/skins/ui/oxide',
                // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系
                height: 500,
                plugins: this.plugins,
                toolbar: this.toolbar,
                branding: false,
                menubar: false,
                // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
                // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
                images_upload_handler: (blobInfo, success, failure) => {
                    const img = 'data:image/jpeg;base64,' + blobInfo.base64()
                    success(img)
                }
            },
            text:this.value
        }
    },
    methods:{
        onClick(){
            
        }
    } ,
    watch:{
        text(item){
           this.$emit('input', item)
        },
        value(v){
            this.text = v
        }
    }
}
</script>