<template>
    <p v-if="loading" class="loading"></p>
    <div>
        <ul class="experience">
            <li :key="exp.id" v-for="exp in experience">
                <WorkWidgetVue v-bind:work="exp" />
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    import WorkWidgetVue from './WorkWidget.vue';
    export default{
        name :"ExperienceView",
        components: {
            WorkWidgetVue
        },
        data(){
            return{
                experience: [],
                loading: true
            }
        },
        async created(){
            try{
                const response = await axios.get(`/myAppService/getMyExperience.php`);
                this.experience = response.data.items;
                this.loading = false
            }catch (error) {
            this.loading = false;
            console.log(error);
           }
        }
    }
</script>

<style scoped>
    .experience{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .experience > li{
        border-bottom: 1px solid #d7d5d5;
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
</style>