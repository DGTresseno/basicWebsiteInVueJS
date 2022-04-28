<template>
  
    <main>

        <div class="text-top"></div>

        <a href="" target="_blank">
            <img src="" id="subscribe" alt="">
        </a>

        <div class="text-bottom"></div>

    </main>

</template>

<script>
export default {
}
</script>

<style scoped>

    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 22px;
        margin-bottom: 20px;
    }

    #subscribe {
        width: 340px;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }

    @media (min-width:700px) {
        #subscribe {
            width: 370px;
        }
    }
</style>