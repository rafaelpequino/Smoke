<script lang="ts">
export default {
    props: {
        name: { type: String, required: true },
        user: { type: String, required: true },
        srcImg: { type: String, required: true }
    }
}
</script>

<template>
    <div class="member">
        <a :href="'integrantes/' + user" class="member-img">
            <img :src="'img/members/' + srcImg" :alt="'Foto do integrante ' + name">
        </a>
        <h3>{{ name }}</h3>
    </div>
</template>

<style lang="css" scoped>
.member {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    color: #fff;
    overflow: hidden;
}

.member-img {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
}

.member-img > img {
    width: 100%;
}

.member > h3 {
    font-size: 1.3em;
}
</style>