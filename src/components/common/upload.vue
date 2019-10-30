<template>
    <div class="upload">

        <div class="upload-preview" v-if="previewShow">
            <img width="50px;" :src=previewData.url alt="">
            <!--进度条-->
            <div class="upload-progress" v-if="progressShow">
                <div class="upload-progress-inner" ref="progress" ></div>
            </div>
        </div>
        <form enctype="multipart/form-data" ref="formSubmit" style="display:inline-block;margin-left:10px;">
            <label  class="add"  for="file" >choose</label>
            <input  id="file" name="file" type="file" @change = "uploadImg($event)"   accept="image/gif, image/jpeg, image/png">
        </form>
        <iframe id="rfFrame" name="rfFrame" src="about:blank" style="display:none;"></iframe>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:['url'],
    data(){
        return {
            fileList:[],
            progressShow:false,
            previewShow:false,
            previewData:{}
        }
    },
    methods:{
        uploadImg($event){
            let _self = this;
            let previewData = {},
                file = $event.target,
                formData = new FormData();
            
            console.log(file.files);

            function upload(){
            
                //定义axios配置信息
                let progress = 0;
                let config = {
                    headers: {'Content-Type': 'multipart/form-data'},
                    onUploadProgress (progressEvent){
                        
                        if(progressEvent.lengthComputable){
                            progress = progressEvent.total/progressEvent.loaded;
                            //进度条
                            // _self.$refs.progress.style.width = Number(progress).toFixed(2)*100+"%";
                            console.log("进度条", _self.$refs.progress)
                        }
                        
                    }
                }
            

                formData.append('file',file.files[0], file.files[0].name);
                
                //解析图片路径，实现预览
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file.files[0])
                
                fileReader.onload = function(){
                    previewData = {
                        url:fileReader.result,
                        name:file.files[0].name,
                        size:file.files[0].size
                    }
                    _self.fileList.push(previewData);
                    _self.previewData = previewData;
                    _self.progressShow = true
                    _self.previewShow = true;
                }



                fileReader.onloadend = ()=>{
                    _self.progressShow = false;
                    // formData.append('file',fileReader.result);
                    // formData.append('file', file.files[0].type)
                    axios.post(`/uploadImg`,formData,config).then((response)=>{
                        formData.delete('file');
                        let res = response.data;
                        console.log(response.data)
                        _self.$emit('update:url', response.data.url);
                    })
                }
            }
            upload();
            document.forms[0].target="rfFrame";
        }
    }
}
</script>
<style lang="less" scoped>
.upload{
    #file{
        opacity: 0;
    }

    .add{
        display: inline-block;
        width: 50px; height: 50px;
        color: #ccc;
        border: 2px dashed;
        text-indent: -12em;
        transition: color .25s;
        position: relative;
        overflow: hidden;
        &:hover{
            color:red;
        }
        &::after, &::before{
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
        }
        &:before {
            width: 20px;
            border-top: 4px solid;
            margin: -2px 0 0 -10px;
        }
        &:after {
            height: 20px;
            border-left: 4px solid;
            margin: -10px 0 0 -2px;
        }
    }

    .upload-preview{
        display: inline-block;
        width: 50px; height: 50px;
        position: relative;
        // border: 2px dashed #ccc;
        overflow: hidden;
        .upload-progress{
            width: 95%;
            height: 7px;
            position: absolute;
            bottom:40%;
            left:50%;
            margin-left:-47.5%;
            border-radius: 4px;
            overflow: hidden;
            z-index: 9999;
            
        }
        .upload-progress-inner{
            width: 0;
            height: 7px;
            background: #3eb5dd;
            transition: width .2s ease-in
        }
    }   
}
    






</style>