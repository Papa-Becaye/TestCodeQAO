<template>
    <div class="page-loader">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
$colors: var(--vt-cube-color-st), var(--vt-cube-color-nd), var(--vt-cube-color-rd), var(--vt-cube-color-th);

.page-loader {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--vt-c-black-Msoft);
    gap: 10px;
    z-index: 999;
}
.page-loader .cube {
    width: 30px;
    height: 30px;
    border-radius: 50%;

    @for $i from 1 through length($colors) {
        &:nth-child(#{$i}) {
            background-color: nth($list: $colors, $n: $i);
        }
    }

    &:first-child {
        animation: left 1s infinite;
    }

    &:last-child {
        animation: right 1s infinite .5s;
    }
}

@keyframes left {
    30% {
        transform: translateX(-60px);
    }

    40% {
        transform: translateX(0px);
    }
}

@keyframes right {
    30% {
        transform: translateX(60px);
    }

    40% {
        transform: translateX(0px);
    }
}</style>