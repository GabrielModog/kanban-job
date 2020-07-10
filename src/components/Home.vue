<template>
  <div class="container">
    <nav class="nav">
      <h3>KANBAN JOB</h3>
      <button type="button" @click="logout" class="btn btn-danger">
        Sair
      </button>
    </nav>
    <div class="row"></div>
    <div class="row">
      <Board v-if="!isLoading" v-bind:cards="cardsArray" />
    </div>
  </div>
</template>

<script>
import Board from "./Board";
import api from "../services";

export default {
  name: "Home",
  components: {
    Board,
  },
  data() {
    return {
      cardsArray: [],
      isLoading: true,
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
      .then((res) => {
        this.cardsArray = res.data.data.data;
        this.isLoading = false;
      })
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

<style>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 55px;
  background-color: #cad3c8;
}
.nav h3 {
  color: #222f3e;
}
</style>
