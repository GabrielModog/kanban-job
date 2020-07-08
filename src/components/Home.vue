<template>
  <div class="container">
    <div class="row">
      <h3>Home</h3>
      <button type="button" @click="logout" class="btn btn-danger">
        Log out
      </button>
    </div>
  </div>
</template>

<script>
import api from "../services";

export default {
  name: "Home",
  data() {
    return {
      users: [],
    };
  },
  created() {
    if (localStorage.getItem("@simjob") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("@simjob"),
      },
    };

    api
      .get("/job", config)
      .then((res) => console.log(res))
      .catch(console.log);
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
