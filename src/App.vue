<template>
    <div id="app" class="v-application">
        <router-view/>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';
    @Component
    export default class App extends BaseComponent {
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/sass/style.scss';
</style>
