<template>
    <p v-if="loading">Loading...</p>
    <div>
        <ul>
            <li v-for="skill in skills" :key="skill.id">
                <p>{{skill.skill}} ({{skill.rating}})</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: "SkillsView",
        data(){
            return{
                skills:[],
                loading: true
            }
        },
        async created(){
            try{
                const response = await axios.get(`/myAppService/getMyTechSkills.php`);
                this.skills = response.data.items;
                this.loading = false;
            }catch(error){
                this.loading = false;
                console.log(error)
            }
        }
    }
</script>