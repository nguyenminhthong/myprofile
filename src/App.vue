<template>
    <div id="app" class="flat-demo">
        <Header></Header>
        <main class="content" id="main">
            <transition>
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
</style>
