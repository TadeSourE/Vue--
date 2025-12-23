<template>
  <div class="common-layout">
    <el-container>
      <!--<el-aside width="200px">Aside</el-aside>-->
      <Aside />
        <el-container direction="vertical">
        <navHeader />
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from '../components/aside.vue';
import navHeader from '../components/navHeader.vue';
</script>
<style lang="less" scoped>
    .common-layout{
        height: 100%;
        .el-container{
            height: 100%;
        }
    }
</style>