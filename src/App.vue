<template>
    <div id="app">
        <button @click="isShowTest = !isShowTest">
            {{ isShowTest ? 'Hide' : 'Show' }}
        </button>
    </div>
    <Test v-if="isShowTest" />
</template>

<script>
import Test from './components/Test.vue';

export default {
    name: 'App',
    components: {
        Test,
    },
    data() {
        return {
            isShowTest: false,
        };
    },
};
</script>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}
</style>
