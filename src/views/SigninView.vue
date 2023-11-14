<script setup>
export {
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
            },
        };
    },

};
</script>

<template>
  <div>
    <h2>SignIn</h2>
    <!-- <form @submut.prevent="registUser">
      <label for="username">이름 : </label>
    </form> -->
  </div>
</template>

<style scoped></style>
