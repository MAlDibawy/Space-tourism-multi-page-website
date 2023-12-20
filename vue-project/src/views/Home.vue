<template>
    <div id="home">
        <div class="content">
            <div class="home-text">
                <h5 class="heading-5 text-light">
                    SO, YOU WANT TO TRAVEL TO
                </h5>
                <span class="heading-1 text-white">SPACE</span>
                <p class="text-light main-text">
                    Let's face it; if you want to go to space, you might as well genuinely
                    go to outer space and not hover kind of on the edge of it. Well sit
                    back, and relax because we'll give you a truly out of this world
                    experience!
                </p>
            </div>
            <div class="explore-btn">
                <router-link class="heading-4 large-btn text-dark" :to="{ name: 'crew' }">EXPLORE</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#home {
    background-image: url('/images/home/background-home-desktop.jpg');
    background-size: cover;
    background-attachment: fixed;
    background-position: bottom center;
    min-height: 100vh;
    display: flex;
}

.home-text {
    width: 450px;
    height: 382px;
}

#home .heading-5 {
    margin-top: 0;
    margin-bottom: 24px;
}

a.large-btn {
    text-decoration: none;
}

.content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 387px;
    margin-bottom: 131px
}

.explore-btn {
    display: flex;
    align-items: center;
    padding: 0 64px 0 62px;
    background: white;
    border-radius: 50%;
    align-self: center;
}

.explore-btn a {
    padding: 119px 0 118px;
}

.explore-btn:hover {
    box-shadow: 0 0 0 88px rgba(255, 255, 255, 10.36%);
    transition: all 0.25s;
}

@media screen and (max-width:768px) {
    #home {
        background-image: url('/images/home/background-home-tablet.jpg');
    }

    .content {
        flex-direction: column;
        align-items: center;
        margin-top: 202px;
    }

    .explore-btn {
        padding: 0 48px 0 46px;
        margin-top: 156px;
    }

    .explore-btn a {
        letter-spacing: 2px;
        padding: 103px 0 102px;
        font-size: 32px;
    }

    .explore-btn:hover {
        box-shadow: 0 0 0 80px rgba(255, 255, 255, 10.36%);
        transition: all 0.25s;
    }

    #home .heading-1 {
        line-height: 150px;
    }

    .home-text {
        height: 334px;
        text-align: center;
    }

    .home-text .heading-5 {
        font-size: 20px;
    }

    .home-text p.main-text {
        margin: 0 3px;
    }

}

@media screen and (max-width:375px) {
    #home {
        background-image: url('/images/home/background-home-mobile.jpg');
    }

    .home-text {
        width: 327px;
        height: 276px;
    }

    .content {
        margin-top: 112px;
        margin-bottom: 48px;
    }

    .explore-btn {
        height: 150px;
        padding: 0 27.5px 0 29.5px;
        margin-top: 81px;
    }

    .explore-btn:hover {
        box-shadow: 0 0 0 70px rgba(255, 255, 255, 10.36%);
    }

    .home-text .heading-5 {
        font-size: 16px;
        margin-bottom: 16px;
    }

    #home .heading-1 {
        line-height: 100px;
    }

}
</style>