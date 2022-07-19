<template>
    <article>
        <header>{{work.company}}</header>
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