<template>
    <div id="destinations" class="text-white">
        <div class="section-heading">
            <h5 class="heading-5 text-white"><span>01</span>PICK YOUR DESTINATION</h5>
        </div>
        <div id="destination-content">
            <div class="img-container">
                <img :src="destination.images.png" alt="destination image">
            </div>
            <div class="destination-text">
                <div class="destination-tabs ">
                    <ul>
                        <li v-for="(d, index) in destinations" :class="index === 0 ? 'tab active-tab' : 'tab'" :key="d.name"
                            @click="changeDestination($event, d.name)">{{ d.name.toUpperCase() }}</li>
                    </ul>
                </div>
                <div class="destination-name">
                    <h2 class="heading-2">{{ destination.name.toUpperCase() }}</h2>
                </div>
                <div class="destination-description">
                    <p class="main-text text-light">
                        {{ destination.description }}
                    </p>
                </div>
                <div class="info">
                    <div>
                        <p class="subheading-2 text-light">AVG. DISTANCE</p>
                        <p class="subheading-1">
                            {{ destination.distance.toUpperCase() }}
                        </p>
                    </div>
                    <div>
                        <p class="subheading-2 text-light">EST. TRAVEL TIME</p>
                        <p class="subheading-1">{{ destination.travel.toUpperCase() }}</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import destinations from '../data/destinations'
import { ref } from 'vue';


const destination = ref(destinations[0]);

const changeDestination = (event, name) => {
    const newActive = event.target;
    const activeLinks = document.querySelectorAll('.active-tab');

    for (const el of activeLinks) {
        el.classList.remove('active-tab');
    }
    newActive.classList.add('active-tab');

    const newValue = destinations.find(el => el.name === name);
    destination.value = newValue;
}

</script>

<style>
#destinations {
    background-image: url('/images/destination/background-destination-desktop.jpg');
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 112px;
}

#destination-content {
    display: flex;
    width: 100%;
    padding-top: 65px;
}

#destination-content .destination-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -33px;
    margin-right: 33px;
    margin-left: 157px;
    width: 444px;
}

#destination-content .destination-text div h2 {
    margin: 37px 0 14px 0;
}

#destination-content .img-container {
    width: 445px;
    height: 445px;
    margin-left: 230px;
    margin-top: 33px;
}

.destination-tabs ul {
    display: flex;
    padding: 0;
}

.destination-tabs li {
    list-style: none;
    margin-right: 35px;
    cursor: pointer;
}

.tab {
    font-family: var(--ff-barlow-cond);
    font-size: 16px;
    letter-spacing: 2.7px;
    color: var(--clr-light);
}

.active-tab {
    border-bottom: 3px solid #ffff;
    color: var(--clr-white);
}

.info {
    display: flex;
    width: 100%;
    border-top: 1px solid #383B4B;
}

.info div {
    margin-right: 79px;
}

@media screen and (max-width:768px) {
    #destinations {
        background-image: url('/images/destination/background-destination-tablet.jpg');
        max-height: 1024px;
    }

    #destination-content {
        flex-direction: column;
    }

    #destination-content .img-container {
        width: 300px;
        height: 300px;
        margin: 33px auto 0;
    }

    .img-container img {
        width: 100%;
    }

    #destination-content .destination-text {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 53px;
        margin-left: unset;
        width: 100%;
    }

    .destination-tabs {
        margin-bottom: 32px;
    }

    .destination-tabs ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
    }

    .destination-tabs li {
        list-style: none;
        margin: 0 17.5px;
        display: inline-block;
        cursor: pointer;
        padding-bottom: 15px;
    }

    .destination-description {
        width: 573px;
    }

    .info {
        justify-content: space-evenly;
        width: 573px;
        margin-top: 49px;
        padding-top: 28px;
    }

    .info div {
        margin: unset;
    }
}

@media screen and (max-width:375px) {
    #destinations {
        background-image: url('/images/destination/background-destination-mobile.jpg');
        padding-bottom: 56px;
    }

    #destination-content {

        padding-top: 32px;
    }

    #destination-content .img-container {
        width: 170px;
        height: 170px;
        margin: 0 auto;
    }

    #destination-content .destination-text {
        margin-top: 26px;
        margin-right: unset;
    }

    .destination-tabs li {
        margin: 0 13px;

        padding-bottom: 15px;
    }

    .heading-2 {
        font-size: 56px;
    }

    #destination-content .destination-text div h2 {
        margin: 20px 0 1px 0;
    }

    .destination-description {
        width: unset;
        margin: 0 24px;
    }

    .info {
        flex-direction: column;
        justify-content: space-evenly;
        width: 327px;
        margin-top: 32px;
        padding-top: 32px;
    }
}
</style>