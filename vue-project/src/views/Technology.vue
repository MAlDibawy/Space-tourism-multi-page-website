<template>
    <div id="technology">
        <div class="section-heading">
            <h5 class="heading-5 text-white"><span>03</span>SPACE LAUNCH 101</h5>
        </div>
        <div id="technology-content">

            <div class="tech-info">
                <div class="tech-tabs">
                    <ul>
                        <li v-for="(tech, index) in techs"
                            :class="index === 0 ? 'heading-4 tech-tab tech-active-tab' : 'heading-4 tech-tab'"
                            :key="tech.name" @click="changeTech($event, tech.name)">
                            {{ index + 1 }}</li>
                    </ul>
                </div>
                <div class="tech-text">
                    <p class="terminology text-light">THE TERMINOLOGY<span>...</span></p>
                    <h3 class="heading-3 text-white">{{ tech.name.toUpperCase() }}</h3>
                    <p class="main-text text-light">{{ tech.description }}</p>
                </div>

            </div>
            <div class="tech-image">
                <img :src="tech.images.portrait" alt="tech image" class="portrait">
                <img :src="tech.images.landscape" alt="tech image" class="landscape">
            </div>
        </div>
    </div>
</template>

<script setup>
import techs from '../data/technology'
import { ref } from 'vue';
const tech = ref(techs[0]);


const changeTech = (event, name) => {
    const newActive = event.target;
    const activeTabs = document.querySelectorAll('.tech-active-tab');

    for (const el of activeTabs) {
        el.classList.remove('tech-active-tab');
    }
    newActive.classList.add('tech-active-tab');

    const newValue = techs.find(el => el.name === name);
    tech.value = newValue;
    techImage.value = newValue.images.portrait
}



</script>

<style>
#technology {
    background-image: url('/images/technology/background-technology-desktop.jpg');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

#technology-content {
    display: flex;
    margin-left: 165px;
    margin-top: 137px;
}

.tech-tabs ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
}

.tech-tabs .tech-tab {
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 25%);
    color: var(--clr-white);
    width: 78px;
    height: 78px;
    border-radius: 50%;
    margin-bottom: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
}

.tech-tabs .tech-tab:hover {
    border: 1px solid rgba(255, 255, 255, 1);
    transition: all 0.25s;
}

.tech-active-tab {
    background-color: rgba(255, 255, 255, 1) !important;
    color: var(--clr-dark) !important;
}

.tech-info {
    display: flex;
}

.tech-text {
    margin-left: 80px;
}

.tech-info .heading-3 {
    margin-top: 11px;
}

.tech-info p.terminology {
    font-family: var(--ff-barlow-cond);
    font-size: 16px;
    letter-spacing: 2.7px;
}

.tech-info p.main-text {
    width: 444px;
}

.tech-info p span {
    letter-spacing: 0;
}

.tech-image {
    margin-left: 130px;
    margin-top: -111px;
    margin-bottom: 101px;
}

.landscape {
    display: none;
}

@media screen and (max-width:768px) {
    #technology {
        background-image: url('/images/technology/background-technology-tablet.jpg');
    }

    #technology-content {
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 60px;
        margin-left: 0;
    }

    .tech-info {
        margin-top: 56px;
        flex-direction: column;
        text-align: center;
    }

    .tech-image {
        width: 768px;
        height: 310px;
        margin: unset;
    }

    .landscape {
        display: block;
    }

    .portrait {
        display: none;
        width: 100%;
    }

    .tech-tabs ul {
        flex-direction: row;
        justify-content: center;
        margin-bottom: 44px;
    }

    .tech-tabs .tech-tab {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: unset;
    }

    .tech-tab:not(:last-child) {
        margin-right: 16px;
    }

    .tech-text {
        margin-left: 0;
    }
}

@media screen and (max-width:375px) {
    #technology {
        background-image: url('/images/technology/background-technology-mobile.jpg');
    }

    .tech-image {
        width: 100%;
        height: auto;
    }

    .tech-image img {
        width: 100%;
    }

    .tech-tabs .tech-tab {
        width: 40px;
        height: 40px;
    }

    .tech-info {
        margin-top: 34px;
        padding: 0 24px;
    }

    .tech-tabs ul {
        margin-bottom: 26px;
    }

    #technology-content {
        margin-top: 32px;
        margin-bottom: 81px;
    }

    .tech-info p.main-text {
        width: unset;
        margin: 0;
    }

    .terminology {
        margin: 0;
    }

    .tech-info .heading-3 {
        margin-top: 9px;
    }
}
</style>