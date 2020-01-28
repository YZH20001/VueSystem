<template>
  <el-container class="home_container">
    <el-header>
      <div>
        <img src alt srcset />
        <span>后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px': '200px'">
        <div class="toggle-button" @click="toggleHandle">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <el-submenu index="1">
            <!-- 一级菜单 -->
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user" @click="saveNavState('/user')">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表 </span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>权限管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/roles" @click="saveNavState('/roles')">角色列表</el-menu-item>
              <el-menu-item index="1-2">权限列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-goods
"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item index="1-4-3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>商品列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-order
"></i>
              <span>订单管理</span>
            </template>
            <el-menu-item index="1-4-4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-platform"></i>
              <span>数据统计</span>
            </template>
            <el-menu-item index="1-4-5">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>用户列表</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      //左侧导航数据
      menulist: [],
      // 是否折叠
      isCollapse: false,
      //被激活的链接地址
      activePath:'',
    }
  },
  created() {
    this.getMenuList()
    this.activePath=window.sessionStorage.getItem('activePath')
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    //获取菜单列表
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menulist = res.data
    },
    toggleHandle() {
      this.isCollapse = !this.isCollapse
    },
    //保存链接激活状态
    saveNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath=activePath
    }
  }
}
</script>
<style >
.home_container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
.el-header > div {
  display: flex;
  align-items: center;
}
.el-aside {
  background-color: #333744;
}
.el-menu {
  border-right: none;
}
.el-main {
  background-color: #eaedf1;
}
.toggle-button {
  user-select: none;
  background-color: #333744;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>