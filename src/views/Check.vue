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
          <var-icon name="cog"/>
        </var-button>
      </var-menu>
    </template>

  </var-app-bar>

  <div class="check">

    <p>
      Проскатируйте QR-код на билете
    </p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit" style="height:80%">
      <div v-show="dataIsValid" @click="unpause()" class="scan-confirmation">
        <var-icon name="checkbox-marked-circle" color="#0CCA4A" :size="192"/>
      </div>
    </qrcode-stream>

    <div class="check-info" v-show="dataIsValid">
      <var-cell>
        <h3 style="margin:0;padding:0;">{{ personEvent }}</h3>
        {{ personTicket }}<br>
        {{ personDatetime }}
      </var-cell>

      <var-button @click="register()" block size="large" color="#0CCA4A" type="success">Зарегистрировать</var-button>
      <var-button @click="start()" block text outline size="large" type="success">Сканировать билет</var-button>
    </div>
    <div class="check-info" v-show="!dataIsValid && camera === 'off'">
      <var-button @click="start()" block text outline size="large" type="success">Сканировать билет</var-button>
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
//import Camera from "@/components/Camera.vue";

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
      dataIsValid: false,
      personDatetime: '25 мая 2021, сеанс в 14:30',
      personEvent: 'Белая Конфа 2021',
      personTicket: 'Офлайн-билет + видеозапись',
    }
  },

  methods: {
    goHome() {
      this.$router.push({name: 'Home'})
    },
    goSettings() {
      this.$router.push({name: 'Settings'})
    },
    register() {
      this.$router.push({name: 'Settings'})
    },
    start() {
      this.unpause();
    },
    async onInit(promise) {
      try {
        await promise
      } catch (e) {
        console.error(e)
      }
    },

    async onDecode(content) {
      console.log(content);

      this.dataIsValid = true;
      this.pause()
    },

    unpause() {
      this.camera = 'auto'
      this.dataIsValid = false;
    },

    pause() {
      this.camera = 'off'
    },

    timeout(ms) {
      return new Promise(resolve => {
        window.setTimeout(resolve, ms)
      })
    }

  }
}
</script>
