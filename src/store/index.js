import { createStore } from 'vuex';
import testStore from './testStore';


export default createStore({
    modules: {
        testStore,
    },
});
