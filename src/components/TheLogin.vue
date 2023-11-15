<template>
  <div class="login-wrapper">
    <h2>Login</h2>
    <form @submit.prevent="login" method="post" id="login-form">
      <input v-model="emailId" type="text" name="emailId" placeholder="EMAIL" required /><br />
      <input
        v-model="userPassword"
        type="text"
        name="userPassword"
        placeholder="PASSWORD"
        required
      /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { memberStore } from "../store";
import { mapStores } from "pinia";
export default {
  data() {
    return {
      emailId: "",
      userPassword: "",
    };
  },
  computed: {
    ...mapStores(memberStore),
  },
  methods: {
    async login() {
      const success = await this.memberStore.login({
        emailId: this.emailId,
        userPassword: this.userPassword,
      });

      if (success) {
        this.$router.push("/home");
      } else {
        con;
        console.log("로그인 실패");
      }
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: none;
}
div {
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}
.login-wrapper {
  width: 400px;
  height: 350px;
  padding: 40px;
  box-sizing: border-box;
}
.login-wrapper > h2 {
  font-size: 24px;
  color: rgb(76, 137, 190);
  margin-bottom: 20px;
}
#login-form > input {
  width: 100px;
  height: 48px;
  padding: 0 10px;
  box-sizing: border-box;
  margin-bottom: 16px;
  border-radius: 6px;
  background-color: white;
}
#login-form > input::placeholder {
  color: gainsboro;
}
#login-form > input[type="submit"] {
  color: aliceblue;
  font-size: 16px;
  background-color: rgb(41, 88, 130);
  margin-top: 20px;
}
</style>
