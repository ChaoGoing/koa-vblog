<template>
    <div class="editorArticle">
    
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
            <Row>
                <Col span="14">
                    <FormItem label="文章标题" prop="title">
                        <Input v-model="formValidate.title" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="关键词" prop="keyword">
                        <Input v-model="formValidate.keyword" placeholder=""></Input>
                    </FormItem>
                    <FormItem label="类型" prop="type">
                        <Select v-model="formValidate.type" placeholder="">
                            <Option value="beijing">New York</Option>
                            <Option value="shanghai">London</Option>
                            <Option value="shenzhen">Sydney</Option>
                        </Select>
                    </FormItem>
                    <FormItem label="日期">
                        <Row>
                            <Col span="11">
                                <FormItem prop="date">
                                    <DatePicker type="date" placeholder="年月日" v-model="preDate"></DatePicker>
                                </FormItem>
                            </Col>
                            <Col span="2" style="text-align: center">-</Col>
                            <Col span="11">
                                <FormItem prop="time">
                                    <TimePicker type="time" placeholder="时分秒" v-model="sufDate"></TimePicker>
                                </FormItem>
                            </Col>
                        </Row>
                    </FormItem>
                    <!-- <FormItem label="Gender" prop="gender">
                        <RadioGroup v-model="formValidate.gender">
                            <Radio label="male">Male</Radio>
                            <Radio label="female">Female</Radio>
                        </RadioGroup>
                    </FormItem>
                    <FormItem label="Hobby" prop="interest">
                        <CheckboxGroup v-model="formValidate.interest">
                            <Checkbox label="Eat"></Checkbox>
                            <Checkbox label="Sleep"></Checkbox>
                            <Checkbox label="Run"></Checkbox>
                            <Checkbox label="Movie"></Checkbox>
                        </CheckboxGroup>
                    </FormItem> -->
                </Col>
            </Row>

            <section>
                <div class="demo-upload-list" v-for="item in uploadList">
                    <template v-if="item.status === 'finished'">
                        <img :src="item.url">
                        <div class="demo-upload-list-cover">
                            <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                            <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                        </div>
                    </template>
                    <template v-else>
                        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                    </template>
                </div>
                <Upload
                    ref="upload"
                    :show-upload-list="false"
                    :default-file-list="defaultList"
                    :format="['jpg','jpeg','png']"
                    :max-size="2048"
                    :on-format-error="handleFormatError"
                    :on-exceeded-size="handleMaxSize"
                    :before-upload="handleBeforeUpload"
                    :on-success	= "postResult"
                    multiple
                    type="drag"
                    action="http://127.0.0.1:1029/uploadImg"
                    style="display: inline-block;width:58px;">
                    <div style="width: 58px;height:58px;line-height: 58px;">
                        <Icon type="ios-camera" size="20"></Icon>
                    </div>
                </Upload>
                <Modal title="View Image" v-model="visible">
                    <img :src=" imgName + '/large'" v-if="visible" style="width: 100%">
                </Modal>


            </section>

            <section class="tinymce-editor">
                <tinymce-editor ref="editor"
                    v-model="msg"
                    :disabled="false"
                >
                </tinymce-editor>
            </section>
            <FormItem>
                <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
                <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
            </FormItem>
        </Form>

        
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
            articleId:null,
            msg:'',

            formValidate: {
                title: '',
                keyword: '',
                type: '',
                gender: '',
                interest: [],
                commitDate: "2019-01-01 00:00:00",
                time: '',
                desc: ''
            },
            ruleValidate: {
                title: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                keyword: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    
                ],
                type: [
                    { required: true, message: 'Please select the city', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
                date: [
                    { required: false, type: 'date', message: 'Please select the date', trigger: 'change' }
                ],
                time: [
                    { required: false, type: 'string', message: 'Please select time', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                ]
            },
            


            defaultList: [
                {
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'http://127.0.0.1:1029/img01.jpg'
                },
            ],
            imgName: '',
            visible: false,
            uploadList: []
            
        }
    },
    mounted () {
        this.$nextTick(()=>{
            // this.uploadList = this.$refs.upload.fileList;
            this.articleId = this.$route.query.articleId;
            console.log(this.articleId)
            this.cAxios.articleInfo(this, { params:{articleId:this.articleId} }).then(res=>{

                this.formValidate = res.data
                this.msg = res.data.content
            })
        })
            
    },
    computed:{
        preDate:{
            get(){
                // console.log(new Date(this.formValidate.commitDate.substr(0,10)))
                return new Date(this.formValidate.commitDate)
            },
            set(){
                
            }
            
        },
        sufDate:{
            get(){
                return new Date(this.formValidate.commitDate)
            },
            set(){
                
            }
            
        }

    },
    methods:{
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                   this.summbit();
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        summbit(){
                this.cAxios.updateArticle(this,
                {params:{
                    id:Number(this.articleId),
                    title:this.formValidate.title,
                    content:this.msg,
                    keyword:this.formValidate.keyword,
                    commitDate:this.formValidate.commitDate,

                }}).then(res=>{
                    if(res.code){
                        this.$Message.info("修改成功")
                    }else{
                        this.$Message.info("修改失败")
                    }
                })
        },
        handleView (name) {
            this.imgName = name;
            this.visible = true;
        },
        handleRemove (file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess (res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError (file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize (file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleBeforeUpload (file) {

            let keyID = Math.random().toString().substr(2);
            console.log("before", file)
            const check = this.uploadList.length < 2;
            if (!check) {
                this.$Notice.warning({
                    title: '最多上传一张图片'
                });
            }
            return check;
        },
        postResult(res, file, list){

            console.log(res)
            // console.log(file)
            // console.log(list)

        }
            
    },
    watch:{
        msg(item){
            console.log(item)
        }
    }

}
</script>
<style lang="less" scoped>
    .editorArticle{
        position: relative;
        min-height: 100%;
        height: auto;
        // background-color:#fff;
        padding: 10px 20px 40px 20px ;

        .tinymce-editor{
            margin-bottom: 10px;
            
        }
        .ivu-form-item-content{
            margin-left: 0 !important;
        }
    }
    
</style>
<style scoped>
.demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
</style>