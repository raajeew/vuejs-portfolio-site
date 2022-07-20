<template>
    <h1>Resume</h1>
    <div class="resume-wrap">
        <article>
            <div class="left">
                <span class="image"></span>
            </div>
            <div class="right">
                <h3>Right section</h3>
            </div>
        </article>
    </div>
</template>
<script>
</script>
<style scoped>
    .resume-wrap{
        box-sizing: border-box;
    }
    article{
        display: block;
        box-sizing: border-box;
        display: flex;
        width: 100%;
    }
    article .left{
        width: 30%;
        box-sizing: border-box;
        background: #efefef;
        padding: 20px;
    }
    article .right{
        width: 60%;
        box-sizing: border-box;
        padding: 20px;
    }
    .image{
        display: block;
        height: 300px;
        width: 100%;
        background: #ccc;
    }
</style>