<template>
  <div>
    <CalcButton :currency="'BTC'" :id="group" />
    <CalcButton :currency="'ETH'" :id="group" />
    <CalcButton :currency="'USD'" :id="group" />
  </div>
</template>

<script>
export default {
props: ["group"]

};
</script>

