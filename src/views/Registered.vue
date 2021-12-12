<template>
  <var-app-bar
      title="Регистрация"
      title-position="center"
      color="#574AE2"
  >
    <template #left>
      <var-button
          round
          text
          text-color="#ffffff"
          @click="goCheck"
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
          <var-icon name="cog"/>
        </var-button>
      </var-menu>
    </template>

  </var-app-bar>

  <div class="check">

    <h1>Участник зарегистрирован!</h1>

    <div class="check-info" v-show="dataIsValid">
      <var-cell>
        <h3 style="margin:0;padding:0;">{{ personEvent }}</h3>
        {{ personTicket }}<br>
        {{ personDatetime }}
      </var-cell>

      <div style="text-align: center">
        <var-button @click="goCheck" block size="large" color="#574AE2" type="primary">Другой билет</var-button>
      </div>
    </div>

  </div>


</template>

<style>
.check {
  margin: 10px;
  height: 100vw;
}

.text-success {
  color: #0CCA4A;
}

.check-info {
  padding: 20px 0;
  text-align: left;
}

.check-info .var-button {
  margin-top: 10px;
}
.qrcode-stream-wrapper{
  background-color: #7594b4;
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

export default {
  name: 'Home',
  components: {
    //Camera,
  },

  data() {
    return {
      camera: 'off',
      result: null,
      showScanConfirmation: false,
      dataIsValid: true,
      personDatetime: '25 мая 2021, сеанс в 14:30',
      personEvent: 'Белая Конфа 2021',
      personTicket: 'Офлайн-билет + видеозапись',
    }
  },

  methods: {
    goCheck() {
      this.$router.push({name: 'Check'})
    },
    goSettings() {
      this.$router.push({name: 'Settings'})
    },
  }
}
</script>
