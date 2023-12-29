<template>
    <h1>Test</h1>
    <div>{{ testData.name }}</div>
    <div>{{ testGetter.name }}</div>
</template>

<script>

class TestData {
    name = 'data';
}
class TestGetter {
    name = 'getter';
}

export default {
    name: 'Test',
    data() {
        return {
            testData: new TestData(),
        };
    },
    computed: {
        testGetter() {
            return new TestGetter();
        },
    },
};
</script>
