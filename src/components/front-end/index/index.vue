<template>
    <div class="index">
        <template v-for="item in waterfallList"> 
            <imgCard :style="{width:waterfallImgWidth + 'px',position:'absolute', left:item.left + 'px', top:item.top +'px'}" :imgUrl="item.url"></imgCard>
        </template>
        
    </div>
</template>
<script>
import imgCard from '../../common/imgCard'
    export default {
        components:{
            imgCard,
        },
        
        data() {
            return {
                //mydata: null,
                listData:[
                    { url:"/api/character/character1.jpg", title:"", content:"", goodNum:0, },
                    { url:"/api/character/character2.jpg", title:"", content:"", goodNum:0, },
                    { url:"/api/character/character3.jpg", title:"", content:"", goodNum:0, },
                    { url:"/api/character/character4.jpg", title:"", content:"", goodNum:0, },
                ],


                
                waterfallImgWidth:250,//每一列的宽度
                waterfallImgCol:4,//多少列
                waterfallImgRight:15,//右边距
                waterfallImgBottom:10,//下边距
                waterfallDeviationHeight:[],//存放瀑布流各个列的高度
                otherHeight:111,
                waterfallList:[ //存放计算好的数据
                    // { url:"/api/character/character1.jpg", left:0, top:0 },
                    // { url:"/api/character/character2.jpg", left:245, top:0 },
                    // { url:"/api/character/character3.jpg", left:500, top:0 },
                    // { url:"/api/character/character4.jpg", left:0, top:0 },
                ]
            }
        },
        methods: {
            initWaterFall(){

                this.waterfallDeviationHeight = new Array(this.waterfallImgCol).fill(0);
                console.log(this.waterfallDeviationHeight)
                this.preLoadImg();
            },
            preLoadImg(){
                let d = this.listData, _self = this;
                for(let i = 0; i < d.length; i++){
                    let aImg = new Image();
                    aImg.src = d[i].url;
                    
                    aImg.onload = aImg.onerror = function(e){
                        let imgData = {}
                        imgData.url = d[i].url;
                        
                        imgData.height = parseInt(_self.waterfallImgWidth/aImg.width * aImg.height);
                        // console.log("imgData=>",imgData.height)
                        _self.rankImg(imgData)
                    }
                }
            },
            rankImg(imgData){
                let minIndex = this.getMinIndex();
                imgData.left = (this.waterfallImgRight+this.waterfallImgWidth)*minIndex;
                imgData.top = this.waterfallDeviationHeight[minIndex] + this.waterfallImgBottom;
                this.waterfallDeviationHeight[minIndex] += this.waterfallImgBottom + imgData.height +this.otherHeight ;
                this.waterfallList.push(imgData);
            },
            getMinIndex(){
                const min = Math.min(...this.waterfallDeviationHeight)
                return this.waterfallDeviationHeight.findIndex((item)=>item == min);
            }
        },
        computed: {

        },
        mounted() {
            this.initWaterFall();
            this.$nextTick(() => {
                console.log(this.mydata);
                this.cAxios.login(this, { method: "post", params: { name: "achao" } }).then(() => {
                    console.log("finish")
                    console.log(this.login);
                })
            })
        }



    }

</script>
<style lang="less">
  .index{
      position: relative;
  }
 </style>