<template>
    <div id="app" class="wrapper">
        <Header></Header>
        <main id="content">
            <a href="#" @click.prevent="toggleSide()" class="btn btn-info" id="sidebarCollapse">
                <i class="fa fa-align-left"></i>
            </a>
            <transition name="page" mode="out-in">
                <section>
                    <div class="display-table">
                        <div class="display-content">
                            <router-view></router-view>
                        </div>
                    </div>
                </section>
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

        private mounted () {
            window.ui.calcHeight();
        }
    }
</script>
