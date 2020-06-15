<template>
  <div class="header">
    <!-- 伸缩按钮 -->
      <div class="nav-icon" @click="toggleSideBar">
        <Icon type="md-list"></Icon>
      </div>
        <!-- 伸缩按钮 /-->

    <!-- 消息类按钮 -->
    <div class="msg-group-box">
      <slot name='msg-icon'></slot>
      <slot name='right'></slot>
    </div>
    <!-- 消息类按钮 /-->
  </div>
</template>

<script>
  export default {

    data () {
      return {screen: false}
    },
    methods: {
      toggleSideBar () {
        this.$emit("toggleClass")
      },
      
    }
  }
</script>
<style>
  .msg-group-box {
    float: right
  }
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
