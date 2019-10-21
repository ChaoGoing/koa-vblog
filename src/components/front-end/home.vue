<template>
    <div class="layout">
        <Layout :style="{height: '100vh', overflow:'hidden'}">
            <Sider width="25vw" >
                <div style="height:250px">

                </div>
                <Menu active-name="1-1" theme="light" width="18vw" >
                    <MenuItem name="1-1" >
                        
                        <span>首页</span>
                    </MenuItem>
                    <MenuItem name="1-2">
                        
                        <span>文章</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        
                        <span>收藏</span>
                    </MenuItem>
                    <MenuItem name="1-3">
                        
                        <span>关于</span>
                    </MenuItem>
                </Menu>
            </Sider>
            <Content :style="{padding: '24px', background: '#f5f7f9', overflow:'auto'}">
                <router-view></router-view>
            </Content>
        </Layout>
        <!-- 底部播放器 -->
        <section :style="{width:'12vw', position:'fixed', right:0, bottom:'2vh'}">
            <player></player>
        </section>
            
        
        <!-- 底部播放器 -->
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
    color: #c9c9c9;
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    color: #828282;
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