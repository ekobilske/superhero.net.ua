<template>
    <section class="content-block">
        <section class="content-wrap content-position">
            <img class="title-content" src="src/assets/images/title-content.png">
            <div class="separate-wrap">
                <div class="wrap-line">
                    <div class="sup-line"></div>
                    <div class="sub-line"></div>
                </div>
                <img class="separate-icon" src="src/assets/images/hero-icon.png">
                <div class="wrap-line">
                    <div class="sup-line"></div>
                    <div class="sub-line"></div>
                </div>
            </div>
            <!--description text-->
            <!--description text-->
            <section class="content-text-wrap">
                <p class="content-text">Вже у Вашому місті єдина виставка в Україні ”Всесвіт СУПЕРГЕРОЇВ та Minecraft”.
                Під час відвідування ви зможете зануритися в таємничий віртуальний світ фантастики,
                зробити незабутні фото з героями та їх атрибутами, прокататися на бетмобілі,
                позмагатися з героями “Minecraft”, приміряти костюми героїв, спробувати подужати молот Тора...
                і багато іншого. Ми чекаємо саме на тебе. Не упусти шанс подарувати собі та рідним незабутні враження.
                Міста чекають на нас. Приєднуйся і Ти.</p>
                <p class="content-ps1">P.S. Діє акційна система відвідування.</p>
				<p class="content-ps2">Дітям - безкоштовно.</p>    
            </section>
            <!--/description text-->
            <!--/description text-->
            <div class="separate-wrap">
                <div class="wrap-line">
                    <div class="sub-line"></div>
                    <div class="sup-line"></div>
                </div>
                <img class="separate-icon" src="src/assets/images/hero-icon.png">
                <div class="wrap-line">
                    <div class="sub-line"></div>
                    <div class="sup-line"></div>
                </div>
            </div>
            <section class="wrap-block">
                <!--Marvel-->
                <section class="wrap-block-left block-marg-top">
                    <img class="block-img" src="src/assets/images/ironman-block.png">
                    <h3 class="block-title">"MARVEL COMICS"</h3>
                    <p class="block-descript">Що включає в себе Marvel?
                    І що взагалі мається на увазі під всесвіту?
                    Мультіверс є світом, де герої різних коміксів зустрічаються в одній історії.
                    Відмінна особливість Всесвіту Marvel полягає в тому, що більшість подій відбуваються на Землі.
                    На сьогоднішній день кількість персонажів: героїв, лиходіїв, Богів, прибульців, спецагентів і цивільних - перевалило за п'ятдесят тисяч.
                    За чисельністю жителів Всесвіт Марвел можна порівняти з невеликим містом України.</p>
                    <button class="btn">Дізнатися більше</button> 
                </section>
                <!---->
                <!--DC Comics-->
                <section class="wrap-block-right block-marg-top">
                    <img class="block-img" src="src/assets/images/superman-block.png">
                    <h3 class="block-title">"DC COMICS"</h3>
                    <p class="block-descript">Всесвіт DC настільки величезний, що творці та фанати додають до неї приставку «Мульти-».
                    Виникнувши в результаті Великого вибуху, вона умістила в собі безліч паралельних світів і реальностей.
                    Головні події більшості коміксів відбуваються в основному світі під назвою Земля 1.
                    Поруч з нею вмістилися Земля-2, Земля-3 і т.д.</p>
                    <p class="block-descript">
                    Сьогодні Всесвіт DC налічує понад 20 тисяч персонажів.
                    Серед них можна зустріти богів, ангелів, героїв, лиходіїв, антигероїв і цивільних.
                    При цьому видавництво докладає величезних зусиль, щоб список жителів з кожним роком збільшувався,
                    а істоти з різних світів зустрічалися на сторінках одного номер</p>  
                    <button class="btn">Дізнатися більше</button>             
                </section>
                <!---->
                <!--Minecraft-->
                <section class="wrap-block-left block-marg-top">
                    <img class="block-img" src="src/assets/images/minecraft-block.png">
                    <h3 class="block-title">Світ "Minecraft"</h3>
                    <p class="block-descript">Minecraft дає в розпорядження гравцеві тривимірний процедурно генерований світ,
                    що складається з кубічних блоків, які можливо використовувати на свій розсуд.
                    Блоки поділяються на матеріали та об'єкти, котрі не обов'язково мають видиму кубічну форму,
                    але займають умовний один кубик. Гра не ставить перед гравцем однозначних цілей,
                    але пропонує безліч можливостей і занять: досліджувати світ, створювати різноманітні споруди й предмети,
                    битися з різними супротивниками. Можлива як одноосібна гра, так і багатокористувацька,
                    коли багато гравців взаємодіють в межах одного світу.</p>    
                    <button class="btn">Дізнатися більше</button>            
                </section>
                <!---->
            </section>
        </section>
    </section>
</template>
<script>
    export default {
        name: 'contentBlock'
    }
</script>
<style scoped lang="scss">
    @import "src/scss/content-block.scss"
</style>