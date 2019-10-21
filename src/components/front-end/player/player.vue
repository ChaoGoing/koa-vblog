<template>
<div class="p-footer" id="p-footer">
    <div class="footer-in">
            <div class="control" style="display:none">
                <a class="control-mode" href="javascript:"></a>
                <!-- <a class="control-fav" href="javascript:"></a>
                <a class="control-download" href="javascript:"></a>
                <a class="control-comment" href="javascript:"></a>
                <a class="control-only" href="javascript:"></a> -->
            </div>
            <span class="play">
                <span><a  href="javascript:"></a></span>
                <span><a class="f-play" href="javascript:"></a></span>
                <span><a href="javascript:"></a></span>
            </span>
            <div class="progress" v-if="false">
                <div class="progress-info">
                    <span>魔鬼中的天使</span>
                    <span>-</span>
                    <span>康树龙</span>
                    <span>03：18</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-line">
                        <div class="progress-dot"></div>
                    </div>
                </div>
            </div>
            
            <!--<div class="voice">-->
            <audio src=""></audio>
    </div>
</div>

</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .p-footer{
        box-shadow: 0 5px 10px #ccc;
        background: url(../../../assets/bfq-Bg.jpg) center top no-repeat;
        width: 100%;
        height: 60px;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 5;
        user-select: none;
        .footer-in{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin:auto;

            .play{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                span{
                    width: 80px;
                    // height: 100%;
                    a{
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        background: url("../../../assets/player.png") no-repeat;
                        
                    }
                    &:nth-child(1) a{
                        margin-top: 5px;
                        background-position: 0 -30px;
                    }
                    &:nth-child(3) a{
                        margin-top: 5px;
                        background-position: 0 -52px;
                    }
                }
                .f-play{
                    width: 30px;
                    height: 30px;
                    background-position: 5px 0;
                }
                .f-stop{
                    background-position: -30px 0 !important;
                }
            }

            .progress{
                display: inline-block;
                width: 42%;
                height: 100%;
                padding-right: 20px;
                margin-top: -10px;
                .progress-info{
                    width: 100%;
                    height: 23px;
                    color: #ffffff;
                    span{
                        font-size: 13px;
                        height: 30px;
                        opacity: 0.5;
                        &:nth-child(odd):hover{
                            opacity:1;
                        }
                        &:last-child{
                            float: right;
                        }
                    }
                }
               
            }
        }
    }
</style>
<style>

.footer-in .progress .progress-bar{
    width: 100%;
    height: 4px;
    margin-top: 5px;
    background-color: rgba(255, 255, 255, .5);
    position: relative;
}
.footer-in .progress .progress-bar .progress-line{
    width: 0;
    height: 4px;
    background-color: #fff;
}
.footer-in .progress .progress-bar .progress-line .progress-dot{
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position:absolute;
    left: 0;
    top: -5px;
    background-color: #fff;

}
.footer-in .control{
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 28%;
    /* height: 100%; */
}
.footer-in .voice{
    display: inline-block;
    width: 10%;
    height: 100%;
    background-color:pink;
}
.footer-in .control a{
    display: inline-block;
}
.footer-in .control .control-mode{
    width: 26px;
    height: 25px;
    background: url("../../../assets/player.png") no-repeat 0 -205px;
}
.footer-in .control .control-download{
    width: 22px;
    height: 21px;
    background: url("../../../assets/player.png") no-repeat 0 -120px;
}
.footer-in .control .control-fav{
    width: 24px;
    height: 21px;
    background: url("../../../assets/player.png") no-repeat 0 -96px;
}
.footer-in .control .control-comment{
    width: 24px;
    height: 24px;
    background: url("../../../assets/player.png") no-repeat 0 -400px;
}
.footer-in .control .control-only{
    width: 74px;
    height: 27px;
    background: url("../../../assets/player.png") no-repeat 0 -281px;
}

</style>

