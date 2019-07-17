<template>
  <div class="page--home">
    <header class="app-header">
      <ui-tab-bar :active="type" @change="onChange($event)">
        <ui-tab v-for="(type, index) in mediaTypes" :key="index">{{ type }}</ui-tab>
      </ui-tab-bar>
      <div>
        <ui-textfield fullwidth placeholder="搜索时间、媒体、分类"></ui-textfield>
      </div>
    </header>
    <ui-scroll-lite ref="iScoll">
      <ul>
        <li v-for="item in $store.mediaContent" :key="item.id" class="media-item">
          <router-link :to="{ name: 'media.item', params: { id : item.id } }">
            <img class="cover" :src="`${item.cover}?random=${item.id}`" />
          </router-link>
          <p class="statistics">
            <span>阅读：{{ item.pv }}</span>
            <span>点赞：{{ item.like }}</span>
            <span>订阅：{{ item.subscription }}</span>
          </p>
          <div class="info">
            <h4>
              <div>
                <i class="avatar" :style="style(item)"></i>
                <b>{{ item.name }}</b>
              </div>
              <div>¥ {{ item.price }}</div>
            </h4>
            <p>{{ item.intro }}</p>
          </div>
        </li>
      </ul>
    </ui-scroll-lite>
  </div>
</template>

<script>
import { MEDIA_TYPES } from '@/config/constants';

export default {
  metaInfo: {
    title: 'Home'
  },
  data() {
    return {
      type: 0,
      mediaTypes: MEDIA_TYPES
    };
  },
  async mounted() {
    await this.$store.getMediaContent();
    this.$refs.iScoll.refresh();
  },
  methods: {
    style({ id, avatar }) {
      return {
        'background-image': `url(${avatar}?random=${id})`
      };
    },
    onChange(type) {
      console.log(type);
    },
    pullDownAction() {
      console.log('pullDownAction');
    },
    pullUpAction() {
      console.log('pullUpAction');
    }
  }
};
</script>
