<template>
    <nav id="sidebar">
        <div class="sidebar-header">

        </div>
        <ul class="list-unstyled menu">
            <li class="list-group-item link_active">
                <router-link to="/home" class="link_active">
                    <i class="fa fa-home"></i><span>Home</span>
                </router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/resume">
                    <i class="fa fa-address-book"></i><span>Resume</span>
                </router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/works">
                    <i class="fa fa-briefcase"></i><span>Works</span>
                </router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/blogs">
                    <i class="fa fa-file-text"></i><span>Blog</span>
                </router-link>
            </li>
            <li class="list-group-item">
                <router-link to="/contact">
                    <i class="fa fa-envelope-open"></i><span>Contact</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
    import BaseComponent, { Component } from "@/utils/base-component";
    @Component
    export default class About extends BaseComponent {}
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/header.scss";
</style>
