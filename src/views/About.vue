<template>
  <var-app-bar
      title="О приложении"
      title-position="center"
      color="#574AE2"
  >
    <template #left>
      <var-button
          round
          text
          color="transparent"
          text-color="#ffffff"
          @click="goHome"
      >
        <var-icon name="chevron-left" :size="24"/>
      </var-button>
    </template>
  </var-app-bar>

  <div style="margin:40px; text-align: left;">
    <h1>Регистрация участников</h1>
    <p>
      Создайте лендинг мероприятия любого типа: от детского праздника до концерта, от вечеринки до мастер-класса.
      Запустите бесплатную регистрацию или продажу билетов. Это удобно и займёт не более 30 минут.
    </p>
    <p>
      Создайте лендинг мероприятия любого типа: от детского праздника до концерта, от вечеринки до мастер-класса.
      Запустите бесплатную регистрацию или продажу билетов. Это удобно и займёт не более 30 минут.
    </p>
    <p>
      <var-button @click="goCheck" size="large" color="#574AE2" type="primary">Сканировать билет</var-button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  components: {},
  methods: {
    goHome() {
      this.$router.push({name: 'Home'})
    },
    goCheck() {
      this.$router.push({name: 'Check'})
    }
  }
}
</script>
