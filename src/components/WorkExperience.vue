<template>
    <p v-if="loading">Loading...</p>
    <div>
        <ul>
            <li :key="exp.id" v-for="exp in experience">
                <WorkWidgetVue :work="exp" />
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