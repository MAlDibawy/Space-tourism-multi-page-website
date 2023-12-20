<template>
    <div id="crew" class="text-white">
        <div class="section-heading">
            <h5 class="heading-5 text-white"><span>02</span>MEET YOUR CREW</h5>
        </div>
        <div class="crew-main">
            <div id="crew-info">

                <div id="crew-bio">
                    <div>
                        <h4 class="heading-4">{{ person.role.toUpperCase() }}</h4>
                        <h3 class="heading-3">{{ person.name.toUpperCase() }}</h3>
                        <p class="main-text text-light">
                            {{ person.bio }}
                        </p>
                    </div>
                    <div>
                        <ul class="crew-dots">
                            <li v-for="(person, index) in crew" :key="person.name"
                                :class="index === 0 ? 'dot active-dot' : 'dot'" @click="changeCrew($event, person.name)">
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="crew-image">
                <img :src="person.images.png" alt="">
            </div>
        </div>

    </div>
</template>

<script setup>
import crew from '../data/crew';
import { ref } from 'vue';


const person = ref(crew[0]);
const changeCrew = (event, name) => {
    const newActive = event.target;
    const activeLinks = document.querySelectorAll('.active-dot');

    for (const el of activeLinks) {
        el.classList.remove('active-dot');
    }
    newActive.classList.add('active-dot');

    const newValue = crew.find(el => el.name === name);
    person.value = newValue;

}
</script>

<style>
#crew {
    background-image: url('/images/crew/background-crew-desktop.jpg');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

#crew-info {
    margin-left: 165.5px;
    margin-top: 154px;
}


#crew-info h4 {
    color: rgba(255, 255, 255, 50.42%);
}

#crew-info h3 {
    margin-top: 15px;
    margin-bottom: 27px;
}

#crew-heading {
    margin-top: 212px;
    margin-left: 166.5px;
}

#crew-bio .main-text {
    width: 444px;
}

.crew-main {
    display: flex;
    align-items: center;
}

.crew-image {
    margin-left: 83px;
}

ul.crew-dots {
    display: flex;
    padding: 0;
    margin-top: 120px;
    margin-bottom: 94px;
}

.crew-dots .dot {
    list-style: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 17.44%);
    margin-right: 24px;
    cursor: pointer;
}

.crew-dots .dot:hover {
    background-color: rgba(255, 255, 255, 50.01%);
    transition: all 0.25s;
}

.crew-dots .active-dot {
    background-color: white;
}

@media screen and (max-width: 768px) {
    #crew {
        background-image: url('/images/crew/background-crew-tablet.jpg');
        max-height: 1024px;
    }

    .crew-main {
        margin-top: 60px;
        justify-content: center;
        flex-direction: column;
    }

    #crew-info {
        margin: unset;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #crew-bio {
        width: 458px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #crew-bio .main-text {
        margin-bottom: 0;
    }

    .crew-image {
        height: 572px;
        width: 456.37px;
        margin-left: unset;
        text-align: center;
    }

    .crew-image img {
        width: auto;
        height: 100%;
    }

    #crew-info .heading-4 {
        font-size: 24px;
    }

    #crew-info h3 {
        margin-top: 8px;
        margin-bottom: 16px;
        font-size: 40px;
    }

    .crew-dots .dot {
        width: 10px;
        height: 10px;
    }

    ul.crew-dots {
        display: flex;
        padding: 0;
        margin-top: 40px;
        margin-bottom: 40px;
    }
}

@media screen and (max-width:375px) {
    #crew-bio {
        width: 327px;
        margin-left: 24px;
        margin-right: 24px;
        margin-bottom: 104px;
        display: flex;
        flex-direction: column-reverse;
    }

    #crew-bio .main-text {
        width: unset;
    }

    .crew-dots {
        margin-bottom: 32px !important;
        margin-top: 32px !important;
    }

    .crew-dots .dot {
        margin: unset;
    }

    .crew-dots .dot:not(:last-child) {
        margin-right: 16px;
    }

    .crew-main {
        flex-direction: column-reverse;
    }

    .crew-image {
        margin-left: unset;
        width: 327px;
        height: auto;
        border-bottom: 1px solid #383B4B;
    }

    .crew-image img {
        width: 177.12px !important;
        height: 222px !important;
        position: relative;
        bottom: -4px;
    }

}
</style>