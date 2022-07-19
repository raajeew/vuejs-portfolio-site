<template>
    <header>
        <div class="logo">Rajeev Ranjan</div>
        <div class="main-navigation">
            <ul>
                <li><router-link to="/">About</router-link></li>
                <li><router-link to="/skills">Skills</router-link></li>
                <li>
                    <router-link to="/experience">Work Experience</router-link>
                </li>
                <li><router-link to="/portfolio">Portfolio</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
    export default{
        name: "HeaderView"
    }
</script>

<style scoped>
    header{
        display: flex;
        height: 50px;
        border-bottom: 1px solid #ccc;
    }
    .logo{
        width: 200px;
        display: flex;
        align-items: center;
    }
    ul, li{
        list-style: none;
        margin:0;
        padding:0;
    }
    ul{
        display: flex;
    }
    li{
        box-sizing: border-box;
        padding: 0 10px;
        display: flex;
        height: 50px;

        align-items: center;
    }
    header > div{width: 50%}
</style>