<template>
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
                experience: []
            }
        },
        async created(){
            try{
                const response = await axios.get(`/myAppService/getMyExperience.php`);
                this.experience = response.data.items;
                console.log(this.experience);
            }catch (error) {
            console.log(error);
           }
        }
    }
</script>