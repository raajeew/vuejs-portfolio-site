<template>
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
                skills:[]
            }
        },
        async created(){
            try{
                const response = await axios.get(`/myAppService/getMyTechSkills.php`);
            this.skills = response.data.items;
            }catch(error){
                console.log(error)
            }
        }
    }
</script>