<template>
    <header>
        <section  class="header-sup">
            <section class="header__wrap-section content-position">
                <div class="header__wrap-section__logo">
                    <a href="superhero.net.ua"> 
                        <img src="src/assets/images/logo.png" alt="logo superhero" class="first-logo">
                    </a>
                </div>
                <ul class="header__wrap-section__navbar">
                    <li>про нас</li>
                    <li>ціни</li>
                    <li>акції</li>
                    <li>галерея</li>
                    <li>контакти</li>
                </ul>
                <section class="mobile-menu">
                </section>
            </section>
        </section>
        <section class="header-sub-bg">
            <section class="header-sub content-position">
                <img src="src/assets/images/big-logo.png" alt="second logo superhero" class="second-logo">
                <img src="src/assets/images/text-title.png" alt="text title" class="text-title">
            </section>
        </section>
    </header>
</template>
<script>
    export default {
        name: 'navbar'
    }
</script>
<style scoped lang="scss">
    @import "src/scss/navbar.scss"
</style>