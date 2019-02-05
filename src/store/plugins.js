import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
    key: 'vuex',
    storage: window.sessionStorage,
});

export default [vuexLocalStorage.plugin];