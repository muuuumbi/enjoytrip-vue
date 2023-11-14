<template>
  <div class="login-wrapper">
    <h2>Login</h2>
    <form @submit.prevent="login"
          method="post" id="login-form">
      <input v-model="userId" type="text" name="userId" placeholder="ID" required/><br />
      <input v-model="userPassword" type="text" name="userPassword" placeholder="PASSWORD" required/><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import { pinia } from "../store";

export default {
  data() {
    return {
      userId: "",
      userPassword: ""
    };
  },
  methods: {
    async login() {
      try {
        const response = await this.$axios.post('http://localhost:8080/member/login', {
          userId: this.userId,
          userPassword: this.userPassword,
        });

        const token = response.data.token;

        pinia.store.setToken(token);

        this.$router.push('/home');
      } catch (error) {
        console.error('Login failed: ', error);
      }
      // this.$axios.post("http://localhost:8080/member/login", {
      //   userId: this.userId,
      //   userPassword: this.userPassword
      // })
      //   .then(response => {
      //     const token = response.data.token;
      //     this.$store.commit("setToken", token);
      //     this.$router.push("/home");
      //   })
      //   .catch(error => {
      //     console.error("Login failed: ", error);
      //   })
    }
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
