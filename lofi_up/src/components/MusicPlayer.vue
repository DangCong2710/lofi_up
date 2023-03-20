<template>
    <div class="wrapper"> 
        <YouTube
            unselectable="on"
            class="iframe-container"
            src="https://www.youtube.com/watch?v=n61ULEU7CO0&t=7612s" 
            ref="youtube"
            @seekTo="seekTo()"
            :vars="ytOptions"
            :height="height"
            :width="width"
        />

    </div>
</template>

<script setup>
import { ref, onMounted} from "vue"
import YouTube from 'vue3-youtube'

const height = ref(0);
const width = ref(0);

const ytOptions = {
    autoplay: 1,
    controls: 0,
    fs: 1,
    modestbranding: 0,
};

const setSize = () => {
    height.value = window.innerHeight;
    width.value = window.innerWidth;
}

const youtube = ref({});

const getRefIframe = () => {
    youtube.value.wrapperStyle = {
        transform: "scale(1.3) !important",
        transition: "transform 0.5s",
    }
}
onMounted(() => {
    getRefIframe();
    console.log("youtube", youtube);
    setSize();
})
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.iframe-container {
    width: 100% !important;
    height: 100% !important;
    pointer-events: none;
}
.iframe-container iframe {
    height: 100vh !important;
    width: 100vw !important;
    transform: scale(1.3);
    transition: transform .5s;
}

iframe {
    color: red !important;
}
</style>