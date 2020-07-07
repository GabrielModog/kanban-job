<template>
  <div>
    <h3>Login</h3>
    <input type="text" v-model="username" />
    <input type="password" v-model="password" />
    <button @click="sendlogin">Login</button>
  </div>
</template>

<script>
import api from "../services";

export default {
  name: "Login",
  data() {
    return { username: "", password: "", error: "" };
  },
  methods: {
    sendlogin() {
      const loginUser = {
        username: this.username,
        password: this.password,
        confirmPassword: this.password,
      };
      api
        .post("/Token", loginUser)
        .then((res) => {
          const { data } = res.data;
          localStorage.setItem("@simjob", data.accessToken);

          this.$router.push("/");
        })
        .catch(console.error);
    },
  },
};
</script>

<style></style>
