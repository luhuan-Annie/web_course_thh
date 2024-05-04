<template>
  <header class="header">
    <router-link :to="{name:'home'}">
        <h1>GUIZHOU</h1>
    </router-link>
    <div class="nav">
        <router-link :to="{name:'home'}">主页</router-link>
        <router-link :to="{name:'brief'}">简介</router-link>
        <router-link :to="{name:'detail'}">详情</router-link>
        <router-link :to="{name:'attractions'}">景点</router-link>
        <router-link :to="{name:'delicacy'}">美食</router-link>
        <router-link :to="{name:'contact'}">联系我们</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
a{
    color: #fff;
    text-decoration: none;
}
.header{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    padding: 20px;
    color: #fff;
    background: #6aabff;

    .nav{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        flex: 0.6;
        a{
            padding: 0 10px;
            font-size: 18px;
            transition: all .3s ease-in-out;
        }
        a:hover{
            color: #000;
        }
        .router-link-active{
            color: #000;
        }
    }
}
</style>