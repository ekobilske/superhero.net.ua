<template>
    <section class="header">
        <section class="header__wrap-section content-position">
            <div class="header__wrap-section__logo">
                <a href="superhero.net.ua"> 
                    <img src="src/assets/images/logo.png" alt="logo superhero">
                </a>
            </div>
            <ul class="header__wrap-section__navbar">
                <li>про нас</li>
                <li>ціни</li>
                <li>акції</li>
                <li>галерея</li>
                <li>контакти</li>
            </ul>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'navbar'
    }
</script>
<style lang="scss" scoped>
    @import "src/scss/navbar.scss"
</style>