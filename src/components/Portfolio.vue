<template>
    <p v-if="loading" class="loading"></p>
    <div>
        <ul>
            <li v-for="portfolio in portfolios" :key="portfolio.id">
                <p class="title">{{portfolio.name}}</p>
                <p>{{portfolio.desc}}</p>
                <p><a v-bind:href="portfolio.url" target="_blank">Demo</a></p>
            </li>
        </ul>
    </div>
    <br>
</template>

<script>
    import axios from "axios";
    export default{
        name: 'PortfolioView',
        data(){
            return{
                portfolios: [],
                loading: true
            }
        },
        async created(){
            try{
                const response = await axios.get(`/myAppService/getMyProjectList.php`);
                this.portfolios = response.data.items;
                this.loading = false;
            }catch(error){
                this.loading = false;
                console.log(error);
            }
        }
    }
</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
}
ul li{
    box-sizing: border-box;
    width: 20%;
    padding: 10px;
    box-shadow: 0px 0px 1px #000;
}
ul li > p{
    margin: 0;
    padding: 0 0 2px;
}
.title{
    font-weight: bold;
}
</style>