<template>
  <div class="container">
    <h3 class="login-introduce">KANBAN JOB</h3>
    <form class="login-form">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="*******" v-model="password" />
      <button type="button" @click="sendlogin" class="btn btn-primary">
        Login
      </button>
      {{ error }}
      <p>consulta</p>
      <p>con123*</p>
    </form>
  </div>
</template>
// class="btn btn-primary"
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

<style scoped>
.login-form {
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
}
.login-introduce {
  margin-top: 2rem;
  font-size: 3.1rem;
  color: #222f3e;
}
</style>
