<script lang="ts">
export default {}
</script>

<template>
    <section id="main-home">
        <div id="inside-main-home">
            <img src="/img/logo_smoke.png"
                alt="Logo do grupo 'Smoke' - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro">
            <h1>ACELERANDO O FUTURO DA TECNOLOGIA</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae voluptates, deleniti facilis
                perferendis ea eius, sed nulla odio numquam reprehenderit nihil labore! Saepe sed non aperiam commodi
                blanditiis obcaecati!</p>
            <a href="#">Saiba mais</a>
        </div>
    </section>
</template>

<style lang="css" scoped>
section#main-home {
    width: 100%;
    padding: 100px 30px 50px;
    background-color: var(--first-color);
}

div#inside-main-home {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#inside-main-home>img {
    width: 100%;
    max-width: 600px;
    margin: auto;
}

#inside-main-home>h1 {
    color: var(--second-color);
    text-align: center;
    margin: 30px 0 15px;
}

#inside-main-home>p {
    color: #fff;
    text-align: center;
}

#inside-main-home>a {
    display: block;
    width: max-content;
    margin: auto;
    color: #fff;
    border: 1px solid var(--second-color);
    padding: 10px 30px;
    text-decoration: none;
    border-radius: 10px;
    margin-top: 30px;
    transition: .3s;
}

#inside-main-home>a:hover {
    background-color: var(--second-color);
}
</style>