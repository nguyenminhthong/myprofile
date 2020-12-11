<template>
    <div class="container">
        <div class="box">
            <div class="row">
                <div class="col-md-12 img_profile">
                    <div class="text-center image-border">
                        <img src="/assets/images/profile/img-man.png" alt="/">
                    </div>
                    <div class="text-center">
                        <h2 class="text-dark">NGUYỄN MINH THÔNG</h2>
                        <p class="text-muted max-width-450 mb-5">In a professional context it often happens
                            that private clients corder a publication to be made.</p>
                    </div>
                </div>
                <div class="col-md-12">
                    <h2>Basic Information</h2>
                    <table>
                        <tbody>
                            <tr>
                                <th>Birthday: <span>08 August 1994</span></th>
                                <th>Website : dev-profile.tech</th>
                            </tr>
                            <tr>
                            </tr>
                            <tr>
                                <th>Birthday :</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Birthday :</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Birthday :</th>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Birthday :</th>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BaseComponent, {Component} from '@/utils/base-component';

    @Component
    export default class Home extends BaseComponent {

    }

</script>

<style lang="scss" scoped>
    @import "@/assets/sass/home.scss";
</style>
