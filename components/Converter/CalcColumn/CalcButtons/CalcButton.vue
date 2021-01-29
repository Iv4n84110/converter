<template>
  <div class="btn-wrapper">
    <input
      type="radio"
      class="btn-check"
      name="options"
      :id="id + currency"
      autocomplete="on"
    />
    <label class="btn btn-secondary" :for="id + currency">{{ currency }}</label>
  </div>
</template>


<script>
export default {
  props: ["currency", "id"],
};
</script>

<style scoped>
.btn-wrapper {
  display: inline;
}

input.btn-check {
  display: none;
}

input[type="radio"]:checked + label {
  background-color: blue;
  border-color: blue;
}
</style>