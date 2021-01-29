<template>
  <div>
    <div>Конвертер</div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-5">
          <CalcColumn :group="'available'" />
        </div>

        <div class="col-2 arrow">
          <img src="/arrows.svg" />
        </div>

        <div class="col-5">
          <CalcColumn :group="'received'" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.arrow  {
  display: flex;
  justify-content: center;
}

</style>



