<template>
    <header>
        <div class="header-navbar h-100">
            <a class="navbar-brand" :href="$router.resolve({name: 'home'}).href">
                <b>A</b><span>Arshia</span>
            </a>
            <ul class="list-group menu text-center" id="menu">
                <li class="list-group-item">
                    <router-link class="active" to="/home">
                        <i class="fa fa-home"></i><span>Home</span>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link to="/about">
                        <i class="fa fa-user"></i><span>About</span>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link to="/resume">
                        <i class="fa fa-address-book"></i><span>Resume</span>
                    </router-link>
                </li>
                <li class="list-group-item">
                    <router-link to="/projects">
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
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" aria-hidden="true" id="sidebarToggle"></button>
                </div>
            </ul>
        </div>
    </header>
</template>
<script lang="ts">
    import BaseComponent, { Component } from "@/utils/base-component";
    @Component
    export default class About extends BaseComponent {}
</script>

<style lang="scss" scoped>
    @import "@/assets/sass/header.scss";
</style>
