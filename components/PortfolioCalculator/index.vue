<template>
  <b-form @submit.stop.prevent="onSubmit">
    <div class="row">
      <div class="col">
        <b-form-select v-model="form.currency" class="mb-3 form-control">
          <template #first>
            <b-form-select-option :value="null" disabled selected
              >Выберите валюту</b-form-select-option
            >
          </template>

          <b-form-select-option value="btc">BTC</b-form-select-option>
          <b-form-select-option value="eth">ETH</b-form-select-option>
        </b-form-select>
      </div>

      <div class="col">
        <b-form-select v-model="form.action" class="mb-3 form-control">
          <template #first>
            <b-form-select-option :value="null" disabled selected
              >Выберите действие</b-form-select-option
            >
          </template>

          <b-form-select-option value="add">Добавить</b-form-select-option>
          <b-form-select-option value="remove">Отнять</b-form-select-option>
        </b-form-select>
      </div>
      <div class="col">
        <input
          type="number"
          class="form-control"
          v-model="form.value"
          placeholder="Введите сумму"
          aria-label="Last name"
          step="0.0000001"
        />
      </div>
      <div class="col">
        <b-button type="submit" variant="primary">Подтвердить</b-button>
      </div>
    </div>
      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Необходимо заполнить все поля
      </b-alert>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        currency: null,
        action: null,
        value: null,
      },
      showDismissibleAlert: false,
    };
  },
  methods: {
    onSubmit() {
      if (this.form.currency && this.form.action && this.form.value) {
        this.showDismissibleAlert = false;
          this.$store.commit('changePortfolioValue', this.form);
      } else this.showDismissibleAlert = true;
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}


</style>