<template>
  <div class="column">
    <form>
      <CalcButtons :group="group" />
      <CalcField />
    </form>
  </div>
</template>

<script>
export default {
  props: ["group"],
};
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>