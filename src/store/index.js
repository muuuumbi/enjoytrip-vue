import { createPinia, defineStore } from "pinia";
import axios from "axios";
export const pinia = createPinia();

export const memberStore = defineStore({
  id: "member",
  state: () => ({
    token: null,
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    async login({ emailId, userPassword }) {
      try {
        const response = await axios.post("http://localhost:8080/member/login", {
          emailId: emailId,
          userPassword: userPassword,
        });
        console.log(response);
        const token = response.data.token;

        this.setToken(token);

        return true;
      } catch (error) {
        console.error("Login failed: ", error);

        return false;
      }
    },
  },
});
