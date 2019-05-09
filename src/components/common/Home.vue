<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    export default {
        data(){
            return {
                tagsList: [],
                collapse: false
            }
        },
        components:{
            vHead, vSidebar
        }
    }
</script>
