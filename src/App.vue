<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html,
* {
  margin: 0;
  padding: 0;
}
body {
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f8f9;
}

input {
  width: 100%;
  margin-bottom: 10px;
  padding: 0.8rem;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  color: #8395a7;
  font-size: 1rem;
  background-color: #eff3f7;
}

.primary-color {
  color: #1b9cfc;
}

.secondary-color {
  color: #2c3a47;
}

.danger-color {
  color: #ff6b6b;
}

.primary-bg {
  background-color: #1b9cfc;
}

.secondary-bg {
  background-color: #2c3a47;
}

.danger-bg {
  background-color: #ff6b6b;
}

.btn {
  border: none;
  cursor: pointer;
  padding: 0.4rem 1rem;
  font-size: 1.1rem;
  border-radius: 4px;
  background-color: #2c3a47;
  color: white;
  display: inline;
  transition: 350ms;
}

.btn:hover {
  opacity: 0.9;
}

.btn:focus {
  opacity: 0.9;
}

.btn-primary {
  color: white;
  background-color: #1b9cfc;
}

.btn-primary:hover {
  background-color: #3b3b98;
}

.btn-primary:focus {
  background-color: #3b3b98;
}

.btn-danger {
  color: white;
  background-color: #ff6b6b;
}

.btn-danger:hover {
  background-color: #ee5253;
}

.btn-danger:focus {
  background-color: #ee5253;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
</style>
