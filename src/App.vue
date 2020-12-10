<template>
    <div id="app" class="wrapper">
        <Header></Header>
        <main id="content">
            <a href="#" @click.prevent="toggleSide()" class="btn btn-info">
                <i class="fa fa-align-left"></i>
            </a>
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
        private toggleSide() {
            window.ui.toggleSideBar();
            return false;
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/style.scss';
    @import '@/assets/sass/main.scss';
</style>
