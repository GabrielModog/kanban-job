<template>
  <div class="column">
    <div>
      <button type="button" class="btn btn-primary">
        <i class="fas fa-folder-plus"></i>Criar Card
      </button>
    </div>
    <div class="row content-top-adjustment">
      <div class="column board-column">
        <h3 class="column-title board-primary">Aguardando Atendimento</h3>
        <draggable
          class="card-container"
          :list="waitingAnswerBoard"
          group="tasks"
        >
          <div
            class="card"
            v-for="element in waitingAnswerBoard"
            :key="element.id"
          >
            <div class="card-container">
              <div class="card-actions">
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Job: {{ element.code }}</h5>
                <p>{{ element.description }}</p>
              </div>
            </div>
          </div>
        </draggable>
      </div>

      <div class="column board-column">
        <h3 class="column-title board-secondary">Em atendimento</h3>
        <draggable class="card-container" :list="onCallBoard" group="tasks">
          <div class="card" v-for="element in onCallBoard" :key="element.id">
            <div class="card-container">
              <div class="card-actions">
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Job: {{ element.code }}</h5>
                <p>{{ element.description }}</p>
              </div>
            </div>
          </div>
        </draggable>
      </div>

      <div class="column board-column ">
        <h3 class="column-title board-warning">Aguardando Compras</h3>
        <draggable
          class="card-container"
          :list="waitShoppingBoard"
          group="tasks"
        >
          <div
            class="card"
            v-for="element in waitShoppingBoard"
            :key="element.id"
          >
            <div class="card-container">
              <div class="card-actions">
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Job: {{ element.code }}</h5>
                <p>{{ element.description }}</p>
              </div>
            </div>
          </div>
        </draggable>
      </div>

      <div class="column board-column">
        <h3 class="column-title board-info">Finalizado</h3>
        <draggable class="card-container" :list="doneBoard" group="tasks">
          <div class="card" v-for="element in doneBoard" :key="element.id">
            <div class="card-container">
              <div class="card-actions">
                <i class="fas fa-chevron-down"></i>
              </div>
              <div>
                <h5>Job: {{ element.code }}</h5>
                <p>{{ element.description }}</p>
              </div>
            </div>
          </div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Board",
  components: {
    draggable,
  },
  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.holdArray = this.cards.filter((card) =>
      card.code.toLowerCase().includes("ma")
    );
    console.log(this.holdArray);
  },
  data() {
    return {
      newTask: "",
      holdCards: this.cards,
      onCallBoard: [],
      waitShoppingBoard: [],
      doneBoard: [],
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
  computed: {
    waitingAnswerBoard() {
      return this.holdCards.filter((card) =>
        card.code.toLowerCase().includes("ma")
      );
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
  height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c8d6e5;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding-bottom: 10px;
  box-shadow: 0px 1px 2px 0px #8395a7d5;
  overflow-x: hidden;
  overflow-y: scroll;
}
.card-actions {
  display: flex;
  justify-content: flex-end;
  width: 250px;
  cursor: pointer;
}
.column-title {
  width: 300px;
  padding: 20px 0;
  background-color: #8395a7;
  font-size: 1.1rem;
  color: white;
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
.btn i {
  margin: 0 2px;
}
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey; */
  background-color: #e8eef4;
  border-radius: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #222f3e;
  border-radius: 4px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #222f3e;
}

.board-primary {
  background-color: #0abde3;
}
.board-secondary {
  background-color: #0ae347;
}
.board-warning {
  background-color: #e3b30a;
}
.board-info {
  background-color: #0a47e3;
}
.board-danger {
  background-color: #e30a31;
}
</style>
