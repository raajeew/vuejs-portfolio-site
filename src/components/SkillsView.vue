<template>
    <p v-if="loading" class="loading"></p>
    <div>
        <ul class="skills">
            <li v-for="skill in skills" :key="skill.id">
                <p>{{skill.skill}} ({{skill.rating}})</p>
                <p>Experiece: {{skill.yoe}} yrs</p>
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
<style scoped>
.skills{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
}
.skills > li{
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #efefef;
    width: 20%;
}
</style>