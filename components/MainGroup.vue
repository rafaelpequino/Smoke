<script lang="ts">
import Member from '~/components/sub-components/member.vue';
export default {
    data() {
        return {
            membersList: [
                { name: "André Richard", user: "andre-richard", srcImg: "andre-richard.jpg" },
                { name: "Fernando Martins", user: "fernando-martins", srcImg: "fernando-martins.jpg" },
                { name: "Gustavo Nathan", user: "gustavo-nathan", srcImg: "gustavo-nathan.jpg" },
                { name: "Higor Cabral", user: "higor-cabral", srcImg: "higor-cabral.jpg" },
                { name: "Isabela Marques", user: "isabela-marques", srcImg: "isabela-marques.jpg" },
                { name: "Matheus Roman", user: "matheus-roman", srcImg: "matheus-roman.jpg" },
                { name: "Pablo Cremm", user: "pablo-cremm", srcImg: "pablo-cremm.jpg" },
                { name: "Rafael Pequino", user: "rafael-pequino", srcImg: "rafael-pequino.jpg" }
            ]
        };
    },
    components: { Member }
}
</script>

<template>
    <section id="main-group">
        <div id="inside-main-group">
            <h2>Integrantes</h2>
            <div class="members">
                <Member class="member" v-for="member in membersList" :name="member.name" :user="member.user" :srcImg="member.srcImg" />
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
section#main-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
    background-color: var(--first-color);
}

#inside-main-group {
    width: 100%;
    max-width: 1280px;
}

.members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 40px 20px;
}

@media (max-width: 999px) {
    .members {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }

    .member {
        width: 250px;
    }
}

@media (max-width: 600px) {

    .member {
        width: 100%;
        max-width: 400px;
    }
}
</style>