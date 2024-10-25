<script lang="ts">
export default {}
</script>

<template>
    <section id="main-about">
        <div id="inside-main-about">
            <div class="div-about">
                <div class="img-about">
                    <img src="/img/engineer.jpg" alt="Imagem gerada por A.I. mostrando um engenheiro construindo um carrinho eletrônico">
                </div>
                <div class="text-about">
                    <h3>ACELERANDO O FUTURO DA TECNOLOGIA</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit necessitatibus repellat
                        enim reprehenderit unde amet quasi placeat velit cupiditate id explicabo iste possimus iure
                        voluptatibus similique, vitae optio. Provident!</p>
                </div>
            </div>
            <div class="div-about">
                <div class="text-about">
                    <h3>ACELERANDO O FUTURO DA TECNOLOGIA</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit necessitatibus repellat
                        enim reprehenderit unde amet quasi placeat velit cupiditate id explicabo iste possimus iure
                        voluptatibus similique, vitae optio. Provident!</p>
                </div>
                <div class="img-about">
                    <img src="/img/car.jpg" alt="Imagem gerada por A.I. mostrando um carrinho eletrônico">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
section#main-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 30px;
}

#inside-main-about {
    width: 100%;
    max-width: 1280px;
}

.div-about {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    overflow: hidden;
    margin: 50px 0;
}

.text-about>h3 {
    font-size: 1.7rem;
    margin-bottom: 20px;
}

.img-about {
    width: 400px;
    min-width: 400px;
    height: 400px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.img-about > img {
    width: 100%;
}

@media (max-width: 999px) {

.img-about {
    width: 300px;
    min-width: 300px;
    height: 300px;
}
}

@media (max-width: 750px) {

    .div-about {
        flex-direction: column;
    }

    .div-about:nth-child(2) > .text-about {
        order: 2;
    }
}

@media (max-width: 400px) {


    .img-about {
    width: 250px;
    min-width: 250px;
    height: 250px;
}
}
</style>