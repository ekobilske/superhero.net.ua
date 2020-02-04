<template>
    <section class="wrap-info">
        <div class="info-content content-position">
            <h1 class="title-info">АнонС</h1>
            <section class="info-wrap">
                <div class="info-column">
                    <img class="info-icon" src="src/assets/images/icon/date.svg">
                    <div class="info-descript">
                        <p class="info-date">14.02</p>
                        <div class="info-underline"></div>
                        <p class="info-date">15.03</p>
                    </div>
                </div>
                <div class="info-column">
                    <img class="info-icon" src="src/assets/images/icon/time.svg">
                    <div class="info-descript">
                        <p class="info-time">працюємо:</p>
                        <p class="info-time time-num">10<sup>00</sup> - 20<sup>00</sup></p>
                    </div>
                </div>
                <div class="info-column">
                    <img class="info-icon" src="src/assets/images/icon/location.svg">
                    <div class="info-descript loc">
                        <p class="location-city">Вінниця</p>
                        <img class="location-logo" src="src/assets/images/location-logo.png">
                        <p class="location-street">вулиця Келецька, 117-Б</p>
                    </div>
                </div>
            </section>
        </div>
    </section>
</template>
<script>
    export default {
        name: 'announcement'
    }
</script>
<style scoped lang="scss">
    @import "src/scss/announcement.scss"
</style>