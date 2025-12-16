<template>
  <!-- 遍历props.menuData中的数据 -->
  <template v-for="(item,index) in props.menuData" :key="`menu-${props.index}-${item.meta.id}-${index}`">  
    <!-- 无子菜单：渲染普通菜单项 -->
    <el-menu-item 
    @click="handleClick(item,`menu_${props.index}_${item.meta.id}`)"
    v-if="!item.children || item.children.length == 0" 
    :index="`menu_${props.index}_${item.meta.id}`">
    <el-icon size="20">
      <component :is="item.meta.icon"></component>
    </el-icon>
    <span>{{item.meta.name}}</span>
    </el-menu-item>
     <!-- 有子菜单：渲染折叠菜单 -->
    <el-sub-menu 
    v-else
    :index="`menu_${props.index}_${item.meta.id}`"
    :key="`submenu-${props.index}-${item.meta.id}`">
      <template #title>
        <el-icon size="20">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{item.meta.name}}</span>
      </template>
      <tree-menu 
      :index="`menu_${props.index}_${item.meta.id}`"
        :menu-data="item.children"/>
    </el-sub-menu>
  </template>
</template>
<script setup>
import { useRouter } from 'vue-router';

//传递参数
const props = defineProps(
    {
      menuData: {
    type: Array,
    required: true
      },
       index: {
    type: String,
    default: '0' 
       }
    }
)
//创建router实例
const router = useRouter()
//点击功能
const handleClick = (item,active) => {
router.push(item.meta.path)
}
</script>
<style scoped>

</style>
