<template>
    <div class="afterLogin">
    <Modal class="login-modal" v-model="loginModal" width="360" :closable="false" :mask-closable="false" :mask="false">
      <div>
        <Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
            <h2 style="padding-bottom:20px;text-align:center">欢迎来到阿超的宝藏</h2>

             <!-- <Divider orientation="left"><h3>欢迎来到阿超的宝藏</h3></Divider> -->
            <Form-item prop="name">
                <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
            </Form-item>
            <Form-item prop="password">
                <Input v-model="formValidate.password" @keyup.native.enter="handleSubmit()" type="password" placeholder="请输入密码"></Input>
            </Form-item>
            <Row>
                <Col span="12">
                <Checkbox-group>
                    <Checkbox label="记住我"></Checkbox>
                </Checkbox-group>
                </Col>
                <Col span="12">
                <a style="float:right">新用户注册</a>
            </Col>
          </Row>
        </Form>
      </div>
      <div slot="footer">
        <Button type="primary" size="large" long :loading="modal_loading" @click="handleSubmit()">登录
        </Button>
        <!-- <small style="text-align: center;display:block" class="subText">©copyright by Artiely</small> -->
      </div>
    </Modal>
    <flexNav></flexNav>
    </div>
</template>
<script>
import flexNav from '../../common/flexnav'
import {tokenMixin} from '../../../api/mixin'
export default {
    mixins: [tokenMixin],
    data(){
        return{
            loginModal:true,
            modal_loading:false,
            formValidate: {
                name: '',
                password: '',
                remember:false,
            },
            ruleValidate: {
                name: [
                    {required: true, message: '姓名不能为空', trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '密码错误', trigger: 'blur'}
                ]
            }
        }
    },
    methods:{
        handleSubmit(){
            this.$refs.formValidate.validate((valid) => {
                if (valid) {
                   this.summbit();
                } else {
                    this.$Message.error('请填写登陆信息');
                }
            })

            
        },
        summbit(){
            this.cAxios.login(this,{
                params:{
                    name:this.formValidate.name,
                    pwd:this.formValidate.password,
                }
            }).then((res)=>{
                console.log(res)
               if(!!Number(res.code)){   //code = 1 校验成功，保存token
                    this.handleToken(res.token);
                    this.$nextTick(()=>{
                        this.$router.push({path:'/manage'})
                    })  
               }else{

               }
            })
        }
        
    },
    computed:{

    },
    components:{
        flexNav
    },

}
</script>
<style lang="less">
    .afterLogin{
        width: 100%;
        height: 100vh;
        background: url(/static/img/login-bg.jpg) center center no-repeat ;
        background-size: cover;
        opacity: .75;
    }
</style>