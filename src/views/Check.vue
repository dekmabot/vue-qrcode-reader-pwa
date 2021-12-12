<template>
  <var-app-bar
      title="Проверка билетов"
      title-position="center"
      color="#574AE2"
  >
    <template #left>
      <var-button
          round
          text
          text-color="#ffffff"
          @click="goHome"
      >
        <var-icon name="chevron-left" :size="24"/>
      </var-button>
    </template>

    <template #right>
      <var-menu :offset-y="38" :offset-x="-20">
        <var-button
            round
            text
            color="transparent"
            text-color="#ffffff"
            @click="goSettings"
        >
          <var-icon name="cog" />
        </var-button>
      </var-menu>
    </template>

  </var-app-bar>

  <div class="check">

    <p>
      Проскатируйте QR-код на билете
    </p>

    <camera/>

    <div class="check-info">
      <var-cell border desc="25 мая 2021, сеанс в 14:30">Мишин Олег Игоревич</var-cell>
      <var-cell border desc="Офлайн-билет + видеозапись">Белая Конфа 2021</var-cell>
    </div>

    <var-button @click="register()" block size="large" color="#0CCA4A" type="success">Зарегистрировать</var-button>

  </div>


</template>

<style>
.check {
  margin: 10px;
  height: 100vw;
}
.check-info{
  padding: 20px 0;
  text-align: left;
}
.scan-confirmation {
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: rgba(255, 255, 255, .8);

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
</style>

<script>
// @ is an alias to /src
import Camera from "@/components/Camera.vue";

export default {
  name: 'Home',
  components: {
    Camera,
  },

  methods: {
    goHome() {
      this.$router.push({name: 'Home'})
    },
    goSettings() {
      this.$router.push({ name: 'Settings' })
    },
    register() {
      this.$router.push({ name: 'Settings' })
    },
  }
}
</script>
