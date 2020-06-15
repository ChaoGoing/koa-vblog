<template>
    <div class="index" ref="index">
        <template v-for="item in waterfallList"> 
            <imgCard :style="{width:waterfallImgWidth + waterfallImgPadding + 'px',position:'absolute', left:item.left + 'px', top:item.top +'px'}" 
                     :itemData = "item"
            ></imgCard>
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
                listData:[],
                waterfallImgPadding:20,
                waterfallImgWidth:230,//每一列的宽度
                waterfallImgCol:4,//多少列
                waterfallImgRight:40,//右边距
                waterfallImgBottom:10,//下边距
                waterfallDeviationHeight:[],//存放瀑布流各个列的高度
                otherHeight:140,
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
                // console.log(this.waterfallDeviationHeight)
                this.preLoadImg();
            },
            async preLoadImg(){
                let d = this.listData, _self = this;
                for(let i = 0; i < d.length; i++){
                    let aImg = new Image();
                    aImg.src = d[i].url;
                    await new Promise((resolve, reject)=>{
                        aImg.onload = aImg.onerror = function(e){
                            let imgData = Object.assign({}, _self.listData[i])
                            imgData.url = d[i].url;
                            imgData.height = parseInt(_self.waterfallImgWidth/aImg.width * aImg.height);
                            // console.log("imgData=>",_self.waterfallImgWidth,aImg.width,aImg.height,imgData.height)
                            _self.rankImg(imgData)
                            resolve();
                        }
                    })
                }
            },
            rankImg(imgData){
                let minIndex = this.getMinIndex();
                // console.log(this.waterfallDeviationHeight[minIndex])
                imgData.left = (this.waterfallImgRight+this.waterfallImgWidth)*minIndex;
                imgData.top = this.waterfallDeviationHeight[minIndex] + this.waterfallImgBottom;
                //处理图片最大高度
                if(imgData.height > 300 ) imgData.height = 300;
                this.waterfallDeviationHeight[minIndex] += this.waterfallImgBottom + imgData.height + this.otherHeight;
                
                this.waterfallList.push(imgData);
            },
            getMinIndex(){
                const min = Math.min(...this.waterfallDeviationHeight)
                return this.waterfallDeviationHeight.findIndex((item)=>item == min);
            },
            calculWaterfallImgCol(){
                // console.log(this.$refs.index.clientWidth)
                this.waterfallImgCol = parseInt(this.$refs.index.clientWidth / this.waterfallImgWidth)
            }
        },
        computed: {

        },
        mounted() {
            this.cAxios.indexImgData(this).then((res)=>{
                this.calculWaterfallImgCol()
                this.listData = res.data;
                this.$nextTick(() => {
                    this.initWaterFall();
                })
            });
            
        }



    }

</script>
<style lang="less">
  .index{
      position: relative;
    //   overflow: scroll;
    height: 100%;
  }
 </style>