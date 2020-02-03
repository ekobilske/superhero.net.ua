<template>
    <div class="main-wrap">
        <div class="portfolio-wrap">
            <section class="wrapper-plat" v-for="post in posts">
                <div class="hover-title">
                    <span class="hover-title-sup">{{ post.title }}</span>
                    <span class="hover-title-sub">development, mobile</span>
                    <div class="hover-title-underline"></div>
                    <button class="hover-title-btn">
                        <img src="/src/assets/images/icon/icon.svg" alt="hover-title-right" class="hover-title-icon">
                    </button>
                </div>
                <img :src="post.url" class="img-photo">
            </section>
        </div>
    </div>
</template>
<script>
</script>

<style scoped lang="scss">
@import "src/scss/base.scss";
</style>
