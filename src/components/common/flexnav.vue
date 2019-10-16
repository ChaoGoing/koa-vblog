<template>
    <div class="nav-menu" :class="{'expanded':expanded}" @click="togglePlay">
        <div class="nav-container">
            <div class="nav-toggle" :class="{'close' :close}"></div>
        </div>
        <span :class="{ 'item':'true', 'hidden':hidden, 'active':active }"><a href="/">首页 </a></span>
        <span :class="{ 'item':'true', 'hidden':hidden, 'active':active }"><a href="/all">所有文章 </a></span>
        <span :class="{ 'item':'true', 'hidden':hidden, 'active':active }"><a href="/login">登陆 </a></span>
        <span :class="{ 'item':'true', 'hidden':hidden, 'active':active }"><a href="#">联系我们 </a></span>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hidden:true,
            expanded:false,
            close:false,
            active:false,
        }
    },
    methods:{
        togglePlay(){
            this.hidden = !this.hidden;
            this.expanded = !this.expanded;
            this.close = !this.close;
            this.active = !this.active;
        }
    },
    computed:{
        isActive(){
            return {

            }
        }
    }

}
</script>
<style scoped>
/* 汉堡包导航样式 */
.nav-menu{
    display: block;
    box-sizing: border-box;
    float: right;
    position: relative;
    padding: 10px;
    background-color:rgba(0,0,0,.5);
    z-index: 99;
    overflow: hidden;
    border-radius: 10px;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    width: 50px;
    height: 50px;
    margin: 30px;
    box-shadow: 0 8px 22px rgba(0, 0, 0, 0.15);
    transition: 1.4s cubic-bezier(0.53, 0, 0.15, 1.3);
    white-space: nowrap;
}
.nav-menu.expanded {
    width: 310px;
}
.nav-container{
    display: inline-block;
    width: 30px;
    height: 30px;
    /*background-color:white;*/
    float: right;
}
.nav-toggle{
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: relative;
    opacity: .8;
}
.nav-toggle:hover{
    opacity: 1;
}

.nav-toggle:after, .nav-toggle:before{
    content: "";
    background-color: rgba(255,255,255,.8);
    width: 20px;
    height: 3px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    transition: 1.3s cubic-bezier(0.53, 0, 0.15, 1.3);
}
.nav-toggle:before{
    top: -30%;
}
.nav-toggle:after{
    top: 30%;
}

.nav-toggle.close:before {
    transform: rotate(-225deg);
    top: 0;
}

.nav-toggle.close:after {
    transform: rotate(225deg);
    top: 0;
}

.nav-menu .item{
    float: left;
    visibility: hidden;
    opacity: 0;
    transition: .3s;
    margin-right: 10px;
    margin-top: 5px;
}
.nav-menu .item:nth-of-type(1){
    transition-delay: .3s;
}
.nav-menu .item:nth-of-type(2){
    transition-delay: .4s;
}
.nav-menu .item:nth-of-type(3){
    transition-delay: .5s;
}
.nav-menu .item:nth-of-type(4){
    transition-delay: .6s;
}
.nav-menu .item.active{
    visibility: visible;
    opacity: 1;

}
.nav-menu .item.hidden{
    opacity: 0;
    visibility: hidden;
    transition: 0.9s;
    transform: rotateY(90deg);
}
.nav-menu .item.hidden:nth-of-type(1){
    transition-delay: .4s;
}
.nav-menu .item.hidden:nth-of-type(1){
    transition-delay: .3s;
}
.nav-menu .item.hidden:nth-of-type(1){
    transition-delay: .2s;
}
.nav-menu .item.hidden:nth-of-type(1){
    transition-delay: .1s;
}

.nav-menu span a{
    text-decoration: none;
    opacity: .6;
    color: #fff;
    font-size: 16px;
}
.nav-menu span a:hover{
    opacity: 1;
}
</style>