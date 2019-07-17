<template>
  <div class="page--media-item">
    <h4>广告页详情</h4>
    <img class="cover" :src="`${item.cover}?random=${id}`" />
    <div class="info">
      <h4>
        <div>
          <b>{{ item.name }}</b>
        </div>
        <div>¥ {{ item.price }}</div>
      </h4>
      <p>{{ item.intro }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: +this.$route.params.id,
      item: {}
    };
  },
  async created() {
    let result = await this.$store.getMediaContent(this.id);
    if (result) {
      this.item = result;
    } else {
      console.warn('no data');
      this.$router.replace({ name: 'home' });
    }
  }
};
</script>
