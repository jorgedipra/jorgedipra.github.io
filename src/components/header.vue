<template>
    <div class="CompHeader">
        <b-navbar  toggleable="lg"  type="dark" variant="dark">
            <b-nav-item ></b-nav-item>
            <b-navbar-brand class="link-home" href="#">
                <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
                &nbsp;Jorgedipra <i class="fas fa-code"></i>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#"><i class="fab fa-blogger-b"></i> Blog </b-nav-item>
                    <b-nav-item href="#"><i class="fas fa-folder"></i> Portafolio</b-nav-item>
                    <b-nav-item href="#"><i class="fas fa-certificate"></i> Certificados  </b-nav-item>
                    <b-nav-item href="#"><i class="fas fa-envelope"></i> Contáctame</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'CompHeader',
        // props: {
        //     msg: String
        // }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    a {
        color: #428cc7;
    }
    .link-home{
        color: #fff;
    }
    nav{
        border-radius: 0 0 5px 5px;
        box-shadow: 0 3px 1px -2px rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12);
        padding: 5px 20px;
    }
</style>