<template>
    <div class="header">
        <div class="nav-text" id="nav">
            <div class="logo">
                <img src="../assets/shared/logo.svg" alt="logo">
            </div>
            <div class="header-line">
            </div>
            <div class="nav-links">
                <RouterLink :to="{ name: 'home' }"><span>00</span> HOME</RouterLink>
                <RouterLink :to="{ name: 'destination' }"><span>01</span> DESTINATION</RouterLink>
                <RouterLink :to="{ name: 'crew' }"><span>02</span> CREW</RouterLink>
                <RouterLink :to="{ name: 'technology' }"><span>03</span> TECHNOLOGY</RouterLink>
            </div>
            <div id="menu-btn" v-if="open" @click="open = !open">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
        <div class="nav-links-mobile" v-if="!open">
            <div class="close" @click="open = !open"></div>
            <div class="links">
                <RouterLink :to="{ name: 'home' }" @click="open = !open"><span>00</span> HOME</RouterLink>
                <RouterLink :to="{ name: 'destination' }" @click="open = !open"><span>01</span> DESTINATION</RouterLink>
                <RouterLink :to="{ name: 'crew' }" @click="open = !open"><span>02</span> CREW</RouterLink>
                <RouterLink :to="{ name: 'technology' }" @click="open = !open"><span>03</span> TECHNOLOGY</RouterLink>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(true);

</script>

<style>
#nav,
#menu-btn {
    display: none;
}

.nav-links-mobile {
    display: none;
}

a.router-link-active {
    border-bottom: 3px solid #ffff;
}

.header-line {
    position: absolute;
    width: 473px;
    height: 1px;
    background-color: rgba(255, 255, 255, 25%);
    margin-left: 122px;
    z-index: 99;
}

#nav {
    display: flex;
    align-items: center;
    position: absolute;
    top: 40px;
    left: 55px;
    justify-content: space-between;
    width: 1385px;
    height: 96px;
}

#nav a:hover,
.destination-tabs li:hover {
    border-bottom: 3px solid rgba(255, 255, 255, 50%);
    transition: all 0.25s;
}

.nav-links {
    display: flex;
    padding-left: 123px;
    padding-right: 117px;
    backdrop-filter: blur(150px);
    -webkit-backdrop-filter: blur(150px);
}

.nav-links a span {
    font-weight: 600;
}

#nav a {
    font-family: var(--ff-barlow-cond);
    font-size: 16px;
    letter-spacing: 2.7px;
    color: var(--clr-white);
    text-decoration: none;
    display: inline-block;
    margin-right: 48px;
    padding: 39px 0 38px 0;
}

@media screen and (max-width: 768px) {
    #nav-mobile {
        display: none;
    }

    #nav {
        top: 0;
        left: 39px;
        width: 729px;
    }

    .header-line {
        display: none;
    }

    .nav-links {
        width: 356px;
        padding-left: 48px;
        padding-right: 74px;
    }

    .nav-links a span {
        display: none;
    }

    .nav-text {
        font-size: 14px;
    }

    #nav a {
        margin-right: 37px;
    }
}

@media screen and (max-width: 375px) {
    .App {
        position: relative;
    }

    #nav {
        left: unset;
        width: 100%;
        justify-content: space-between;
    }

    .logo {
        padding-left: 20px;
    }

    #nav .nav-links {
        display: none;
    }

    #nav #menu-btn {
        display: block;
        cursor: pointer;
    }

    .nav-links-mobile {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding-left: 32px;
        backdrop-filter: blur(150px);
        -webkit-backdrop-filter: blur(150px);
        width: 222px;
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 999;
    }

    .links {
        display: flex;
        flex-direction: column;
        margin-top: 64.95px;
    }

    .nav-links-mobile a {
        width: 130px;
        padding-right: 0;
        margin-right: unset;
        font-family: var(--ff-barlow-cond);
        font-size: 16px;
        letter-spacing: 2.7px;
        color: var(--clr-white);
        text-decoration: none;
        display: inline-block;
        border-bottom: none;
    }

    .nav-links-mobile a:not(:last-child) {
        margin-bottom: 32px;
    }

    .bar {
        width: 24px;
        height: 3px;
        background-color: var(--clr-light);
        margin-bottom: 6px;
        margin-right: 24px;
    }

    .close {
        position: relative;
        width: 32px;
        height: 32px;
        align-self: flex-end;
        margin-right: 26.5px;
        padding-top: 33.95px;
        cursor: pointer;
    }

    .close:before,
    .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 5px;
        background-color: var(--clr-light);
    }

    .close:before {
        transform: rotate(45deg);
    }

    .close:after {
        transform: rotate(-45deg);
    }
}
</style>