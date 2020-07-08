<template>
  <div class="row content-top-adjustment">
    <div class="column board-column">
      <h3 class="column-title">Backlog</h3>
      <draggable class="card-container" :list="backlogArray" group="tasks">
        <div class="card" v-for="element in backlogArray" :key="element.name">
          {{ element.name }}
        </div>
      </draggable>
      <button class="btn">New task</button>
    </div>

    <div class="column board-column">
      <h3 class="column-title">In Progress</h3>
      <draggable class="card-container" :list="inProgressArray" group="tasks">
        <div
          class="card"
          v-for="element in inProgressArray"
          :key="element.name"
        >
          {{ element.name }}
        </div>
      </draggable>
    </div>

    <div class="column board-column">
      <h3 class="column-title">Done</h3>
      <draggable class="card-container" :list="doneArray" group="tasks">
        <div class="card" v-for="element in doneArray" :key="element.name">
          {{ element.name }}
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
// import api from "../services";

export default {
  name: "Board",
  components: {
    draggable,
  },
  data() {
    return {
      newTask: "",
      backlogArray: [
        { name: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        {
          name:
            "Mauris id sagittis orci. Curabitur rutrum enim id laoreet placerat.",
        },
        { name: "Praesent lobortis risus in mollis laoreet." },
        { name: "Nullam vehicula eu leo at sagittis." },
      ],
      inProgressArray: [],
      doneArray: [],
    };
  },
  methods: {
    addCard() {
      if (this.newTask) {
        this.backlogArray.push({ name: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>
7
<style scoped>
.card {
  background-color: #e8eef4;
  margin: 10px 0;
  font-size: 0.85rem;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 1px 2px 0px #8395a757;
  cursor: grab;
  color: #2c3a47;
}
.card-container {
  width: 286px;
}
.board-column {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c8d6e5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-bottom: 10px;
  box-shadow: 0px 1px 2px 0px #8395a7d5;
}
.column-title {
  width: 300px;
  background-color: #8395a7;
  font-size: 1.1rem;
  color: white;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.content-top-adjustment {
  margin-top: 20px;
  justify-content: space-around;
}
</style>
