<template>
  <div class="app-container">
    <div class="app-content">
      <router-view></router-view>
    </div>
    <footer class="app-footer">
      <ui-tab-bar type="both" v-model="active">
        <ui-tab
          v-for="(tab, index) in menu"
          :key="index"
          type="both"
          :icon="tab.icon"
          stacked
        >{{ tab.text }}</ui-tab>
      </ui-tab-bar>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      active: 0,
      menu: [
        {
          text: '首页',
          icon: 'phone'
        },
        {
          text: '排期',
          icon: 'favorite'
        },
        {
          text: '我的',
          icon: 'person_pin'
        }
      ]
    };
  }
};
</script>
