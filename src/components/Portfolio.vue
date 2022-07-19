<template>
    <div>
        <ul>
            <li v-for="portfolio in portfolios" :key="portfolio.id">
                <p>{{portfolio.name}}</p>
                <p>{{portfolio.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
    export default{
        name: 'PortfolioView',
        data(){
            return{
                portfolios: []
            }
        },
        async created(){
            try{
                const response = await axios.get(`/myAppService/getMyProjectList.php`);
                this.portfolios = response.data.items;

            }catch(error){
                console.log(error);
            }
        }
    }
</script>