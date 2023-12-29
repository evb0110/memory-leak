<template>
    <h1>Test</h1>
    <div v-for="el in chunk" :key="el.id">
        {{ el.str.slice(0, 50) }}
    </div>
</template>

<script>

export default {
    name: 'Test',
    data() {
        return {
        };
    },
    computed: {
        testGetter() {
            return this.$store.getters.testArray;
        },
        chunk() {
            return this.testGetter.slice(0, 10);
        },
    },
    mounted() {
        this.$store.dispatch('loadTestArray');
    }
};
</script>

