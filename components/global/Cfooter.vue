<script lang="ts">
export default {}
</script>

<template>
    <footer id="footer">
        <div id="inside-footer">
            <div class="link-img-footer">
                <img src="/img/logo_smoke_footer.png"
                alt="Logo do grupo 'Smoke' - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro">
            </div>
        </div>
    </footer>
</template>

<style lang="css" scoped>
footer#footer {
    width: 100%;
    background-color: #DFDFDF;
    padding: 10px 30px;
}

div#inside-footer {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.link-img-footer > img {
    width: 100%;
    max-width: 200px
}
</style>