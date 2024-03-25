<template>
    <div class="loading-banner">
        <div class="ring">
           <span>Loading...</span>
        </div>
    </div>
</template>

<style>
.loading-banner{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--vt-c-black-Msoft);
}

.loading-banner .ring{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    
}

.loading-banner .ring::before{
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: ring 2s linear infinite;
}

@keyframes ring {
    0%{
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
        box-shadow: 1px 3px 2px var(--vt-c-red);
    }

    100%{
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
        box-shadow: 1px 3px 2px var(--vt-c-red-soft1);
    }
    
}

.loading-banner .ring span{
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 200px;
    animation: text 3s ease-in-out infinite;
}

@keyframes text {
    50%{
        color: var(--vt-c-black-Msoft);
    }
}

</style>