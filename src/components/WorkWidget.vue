<template>
    <article>
        <header>{{work.company}} <span>({{work.startdate}} - {{work.enddate}})</span></header>
        <p>{{work.designation}}</p>
        <p>{{work.summary}}</p>
    </article>
</template>
<script>
export default{
    name: "WorkWidget",
    props: {
        work: Object
    }
}
</script>

<style scoped>
header{
    font-weight: bold;
}
header span{
    font-weight: normal;
}
</style>