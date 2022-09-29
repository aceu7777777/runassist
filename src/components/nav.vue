<template>
<div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :router="true">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/myorder">我的派遣</el-menu-item>
    <el-menu-item index="/mypickorder">我的任务</el-menu-item>
    <el-menu-item index="/myinfo">个人中心</el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    data() {
    return {
        activeIndex: 'home',
        activeIndex2: 'home'
    };
    },
    methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
    }
}
</script>

<style>

</style>