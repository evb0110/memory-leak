const getArray = (length) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }
    return arr;
};

class Test {
    data = getArray(1e4);
    constructor(id) {
        this.id = id;
    }

    get str() {
        return this.data.join('');
    }
}

export default {
    name: 'testStore',
    state: {
        testArray: [],
    },
    getters: {
        testArray: state => state.testArray.slice(),
    },
    mutations: {
        setTestArray(state, payload) {
            state.testArray = payload;
        },
    },
    actions: {
        loadTestArray({ commit }) {
            console.log('loadTestArray');
            const testArray = getArray(1e4).map((id) => new Test(id));
            commit('setTestArray', testArray);
        },
    },
}
