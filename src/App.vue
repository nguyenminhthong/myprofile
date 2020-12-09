<template>
    <div id="app" class="flat-demo">
        <Header></Header>
        <main class="content" id="main">
            <transition name="page" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    import Header from '@/components/Header.vue';

    @Component({
        components: {
            Header
        }
    })
    export default class App extends BaseComponent {
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/style.scss';
    .page-enter-active, .page-leave-active {
        transform: translate3d(0, 0, 0);
        z-index: 2;
        opacity: 1;
        transition: transform .6s ease;
    }
    .page-enter, .page-leave-to {
        transform: translate3d(100%, 0, 0);
        z-index: 0;
        opacity: 0;
        transition: transform .05s ease .05s, opacity 0s ease .05s;
    }

</style>
