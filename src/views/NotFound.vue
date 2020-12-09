<template>
    <div class="error_section">
        <div class="container">   
            <div class="row">
                <div class="col-12">
                    <div class="error_form">
                        <h1>404</h1>
                        <h2>Opps! PAGE NOT BE FOUND</h2>
                        <p>Sorry but the page you are looking for does not exist, have been<br> removed, name changed or is temporarily unavailable.</p>
                        <form action="#">
                            <input placeholder="Search..." type="text">
                            <button type="submit"><i class="icon-search"></i></button>
                        </form>
                        <a href="index.html">Back to home page</a>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class NotFound extends BaseComponent {

    }
</script>
