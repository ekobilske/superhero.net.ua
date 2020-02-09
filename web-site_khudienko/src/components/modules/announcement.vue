<template>
    <section class="wrap-info">
        <div class="info-content content-position">
            <h1 class="title-info">АнонС</h1>
            <section class="info-wrap">
                <div class="info-column">
                    <section class="dateTime">
                        <div class="wrap-date">
                            <img class="info-icon" src="src/assets/images/icon/date.svg">
                            <h5 class="date-text">з 14.02 по 15.02</h5>
                        </div>
                        <div class="wrap-time">
                            <img class="info-icon" src="src/assets/images/icon/time.svg">
                            <h5 class="time-text">Час роботи: 10<sup>00</sup>-20<sup>00</sup></h5>
                        </div>
                    </section>
                </div>
                <div class="info-column">
                    <img class="info-icon" src="src/assets/images/icon/location.svg">
                    <div class="info-descript loc">
                        <img class="location-logo" src="src/assets/images/location-logo.png">
                        <p class="location-city">Вінниця</p>
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