<script setup>
import MusicPlayer from "../components/MusicPlayer.vue"
</script>
<template>
    <div id="home-page">
        <div class="home-wrap">
            <div class="home-item">
                <MusicPlayer />
            </div>

        </div>
        <!-- <img src="../assets/images/background1.jpg" /> -->
    </div>
</template>

<style scoped>
#home-page {
    width: 100%;
    height: 100%;
}

#home-page img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.home-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.home-item {
    width: 100%;
    height: 100%;
}

</style>