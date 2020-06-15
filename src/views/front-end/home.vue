<template>
    <div class="layout">
        <Layout :style="{height: '100vh', overflow:'hidden'}">
            <Sider width="25vw" :style="{'z-index':100, 'min-width':'80px'}" >
                <div class="avatar" style="height:220px;">
                    <h2>阿超的宝藏</h2>
                    <!-- <Avatar src="/api/img5.jpg" size="50" /> -->
                    <span class="avatar-img">

                    </span>
                    <p>我用尽全力，过着平凡的一生</p>
                </div>
                <Menu  :active-name="activeName" 
                        theme="light" width="18vw"  
                        @on-select="toPage" >
                    <MenuItem  name="/fIndex" >
                            <span>首页</span>
                    </MenuItem>
                    <MenuItem name="/articles" >
                            <span>文章</span>
                    </MenuItem>
                    <MenuItem name="/fav">
                        
                        <span>收藏</span>
                    </MenuItem>
                    <MenuItem name="/about">
                        
                        <span>关于</span>
                    </MenuItem>
                    <MenuItem name="/manage">
                        
                        <span>后台管理</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Content :style="{padding: '24px', background: '#f5f7f9', overflow:'auto','z-index':0}">
                <!-- <div class="content-header" style="height:100px;width:100%;margin-bottom:5px;"> -->
                    <!-- <p style="font-size:30px;color:#555;text-align:left;"> Achao 的 宝zang</p> -->
                    
                <!-- </div> -->
                <router-view></router-view>
            </Content>
            <!-- 底部播放器 -->
            <section :style="{ position:'absolute', left:'18vw', bottom:'2vh','background-color':'transparent'}">
                <player></player>
            </section>
                
            
            <!-- 底部播放器 -->
        </Layout>
        
    </div>    
</template>
<script>
import player from '../front-end/player/player'
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    data(){
        return {
            openNav:false
        }
    },
    components:{
        player,
    },
    methods:{
        ...mapMutations({
            setFrontPath:'SET_FRONT_PATH'
        }),
        toPage(path){
            if(path == this.$route.path) return
            this.setFrontPath(path)
            // console.log(this.$route.path)
            this.$router.push(path)
        }
    },
    computed:{
        ...mapGetters([
            "frontPath"  //这里记得加引号
        ]),
        activeName(){
            console.log(this.frontPath)
            return this.frontPath
        }
    }
}
</script>
<style scoped>
.content-header{
    /* background:url(../../assets/img/achao-bg.png) right center no-repeat; */
    /* background-color: transparent; */
    background-size: cover;
    background-color:#fff;
    padding:10px;
    box-shadow:1px 1px 2px #ecc
}
.ivu-drawer-body{
    padding: 0 !important;
}
.layout-con{
        height: 100%;
        width: 100%;
    }
.ivu-layout-sider{
    flex:none;
    background: #fff !important; 
    box-shadow: 3px 0 10px rgba(0,0,0, .2);
}

.ivu-menu.ivu-menu-light.ivu-menu-vertical{
    
    min-width: 80px !important;
}
.ivu-menu-item span{
    display: inline-block;
    overflow: hidden;
    font-size: 22px;    
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
    
}
.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    color: #c9c9c9 !important;
    
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    color: #828282 !important;
    
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after{
    left:0;
    width:4px;
    background-color: #63bb67 !important;
}
</style>
<style lang="less" scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height:100%;
        width: 100%;
        .avatar{
            padding:30px 10px 10px 10px;
            .avatar-img{
                    display: inline-block;
                    text-align: center;
                    background:url('/api/img1.jpg') center center no-repeat;
                    background-size: contain;
                    color: #fff;
                    white-space: nowrap;
                    position: relative;
                    overflow: hidden;
                    vertical-align: middle;
                    width: 80px;
                    height: 80px;
                    line-height: 32px;
                    border-radius: 50%;
                    margin:20px auto;
                    margin-top: 10px;
            }

        }
    }
    .footer{
        // background-color:rgba(79, 158, 65, .8);
       
    }
</style>