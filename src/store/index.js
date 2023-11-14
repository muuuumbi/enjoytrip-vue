import { createPinia } from "pinia";

export const pinia = createPinia();

export const store = pinia.createStore({
    state: () => ({
        token: null,
    }),
    actions: {
        setToken(token) {
            this.token = token;
        },
    },
});