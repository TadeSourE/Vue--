<template>
    <div class="aside-wrapper" :style="{ width: !isCollapse ? '150px' : '64px' }">
        
        <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="aside-container"
            default-active="2"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse">
                <p class="logo-lg">{{!isCollapse ? '曼波陪诊' : '曼波'}}</p>
            <treemenu 
            :index='1' 
            :menuData="menuData" />
        </el-menu>
    </div>
    
  
</template>
<script setup>
import Treemenu from './treemenu.vue';
import { useRouter } from 'vue-router';
import { reactive,computed } from 'vue'; //响应式访问 
import { useStore } from 'vuex';
const router = useRouter()
const menuData = reactive(router.options.routes[0].children)
const store = useStore()
const isCollapse = computed(()=> store.state.meun.isCollapse)


const handleOpen = () => {}
const handleClose = () => {}
</script>

<style lang="less" scoped>
    .aside-wrapper {
  transition: width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  height: 100%;
  display: flex;
}
.aside-container{
    height: 100%;
     transition: all 0.3s ease;
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
        transition: all 0.3s ease; /*  logo文字过渡 */
        overflow: hidden; /* 防止文字溢出 */
        white-space: nowrap; /* 禁止文字换行 */
        text-overflow: ellipsis; /* 文字溢出时显示省略号 */      
        }
        
    
        
  
}
</style>
