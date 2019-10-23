<template>
    <div class="layout">
        <Layout :style="{height: '100vh', overflow:'hidden'}">
            <Sider width="25vw" :style="{'z-index':100}" >
                <div style="height:250px">

                </div>
                <Menu active-name="index" theme="light" width="18vw" @on-select="toPage">
                    <MenuItem name="fIndex" >
                            <span>首页</span>
                    </MenuItem>
                    <MenuItem name="articles" >
                            <span>文章</span>
                    </MenuItem>
                    <MenuItem name="fav">
                        
                        <span>收藏</span>
                    </MenuItem>
                    <MenuItem name="about">
                        
                        <span>关于</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Content :style="{padding: '24px', background: '#f5f7f9', overflow:'auto','z-index':0}">
                <div style="height:100px;background-color:#ccc;width:100%;margin-bottom:10px"></div>
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
        toPage(path){
            this.$router.push('/'+path)
        }
    }
}
</script>
<style scoped>
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
    }
    .footer{
        // background-color:rgba(79, 158, 65, .8);
       
    }
</style>