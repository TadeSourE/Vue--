<template>
    <div class="header-container"> 
        <div class="header-left flex-box">
            <el-icon class="icon" size="20"><Fold/></el-icon>
        </div>
        <div class="header-right">

        </div>
    </div>
</template>
<script>
import { Fold } from '@element-plus/icons-vue';


</script>
<style lang="less" scoped>
 .flex-box{
    display: flex;
    align-items: center;
 }   
.header-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    background-color: #fff;
    padding-right: 25px;
    .header-left{
        height: 100%;
        .icon{
            width: 45px;
            height: 100%;
            &:hover{
            background-color: #818181;
            cursor: pointer;
            }
        }
    }
}
</style>