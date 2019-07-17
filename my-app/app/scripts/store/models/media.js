import axios from 'axios';

export default {
  data() {
    return {
      mediaContent: []
    };
  },
  methods: {
    async getMediaContent(id) {
      if (id) {
        if (this.mediaContent.length) {
          return this.mediaContent.find(item => item.id === +id);
        } else {
          // TODO
        }
      } else {
        let response = await axios.get('/data/menu.json');
        let { code, data, message } = response;

        if (code === 200) {
          this.mediaContent = data;
        } else {
          alert(message);
        }
      }
    }
  }
};
