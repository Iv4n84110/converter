<template>
  <div>
    <CalcButton :currency="'btc'" :group="group" />
    <CalcButton :currency="'eth'" :group="group" />
    <CalcButton :currency="'usd'" :group="group" />
  </div>
</template>

<script>
export default {
props: ["group"]

};
</script>

