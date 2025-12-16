<template>
    <el-menu
    :style="{width : '230px'}"
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="aside-container"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose">
        <p class="logo-lg">曼波陪诊</p>
       <treemenu 
       :index='1' 
       :menuData="menuData" />
    </el-menu>
    
  
</template>
<script setup>
import Treemenu from './treemenu.vue';
import { useRouter } from 'vue-router';
import { reactive } from 'vue'; //响应式访问 
const router = useRouter()
const menuData = reactive(router.options.routes[0].children)



const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="less" scoped>
.aside-container{
    height: 100%;
    .logo-lg{
        font-size: 20px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: rgba(240,255,255,0.8);
        font-family: "PingFang SC";
        font-weight: 500;
        font-style: normal; 
        text-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
}
</style>
