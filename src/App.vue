<template>
    <div>
        <button @click="click">
            {{ isShowTest ? 'Hide' : 'Show' }}
        </button>
    </div>
    <div v-if="counter">
        Component opened {{ counter }} times.
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
            counter: 0,
        };
    },
    methods: {
        click() {
            this.isShowTest = !this.isShowTest;
            if (this.isShowTest) {
                this.counter++;
            }
        },
    },
};
</script>

<style>
#app {
    text-align: center;
    margin-top: 60px;
}
</style>
