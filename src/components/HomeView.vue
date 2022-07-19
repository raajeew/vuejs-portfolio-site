<template>
    <p v-if="loading">Loading...</p>
    <p v-html="summary.description"></p>
    
</template>
<script>
import axios from 'axios'

export default {
  name: 'HomeView',
  props: {
    title: String
  },
  data(){
    return {
        results: [],
        summary: [],
        loading: false
    }
  },
  async created(){
        try {
            const res = await axios.get(`/myAppService/getMySummary.php`);
            console.log("res",res.data.items);
            this.summary = res.data.items[0];
        } catch (error) {
            console.log(error);
        }
    },
  methods: {
    // async onClick() {
    //     try {
    //         this.loading = true;
    //         const res = await axios.get(`/mcapi/snapshot`);
    //         this.results = res.data;
    //         //this.loading = false;
    //     } catch (error) {
    //         this.loading = true;
    //         console.log(error);
    //     }
    // },
    async getSummary() {
        try {
            const res = await axios.get(`/myAppService/getMySummary.php`);
            console.log("res",res.data.items);
            this.summary = res.data.items[0];
        } catch (error) {
            console.log(error);
        }
    }
 }
}
</script>
<style scoped>
    .widgets{
        display: flex;
    }
    .widget{
        border: 1px solid #ccc;
        box-sizing: border-box;
        padding: 20px;
        margin: 2px;
    }
</style>