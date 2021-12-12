<template>
  <var-app-bar
      title="Nethouse.События"
      title-position="center"
      color="#574AE2"
  >
    <template #left>
      <var-button
          round
          text
          color="transparent"
          text-color="#ffffff"
          @click="goAbout"
      >
        <svg width="40" height="40" viewBox="0 0 88 88" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlns:xlink="http://www.w3.org/1999/xlink" id="square-n">
          <g id="Canvas_249835187213" fill="none">
            <g id="LOGO_1327968313387351">
              <g id="bg_9143131874">
                <rect width="40" height="40" rx="6" transform="translate(-0.00012207 0)" fill="#574AE2"></rect>
              </g>
              <g id="Group_35446514378987">
                <g id="Vector_1332189687331">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M 39.8726 42.8682C 39.1346 43.7802 38.1646 44.5732 37.8536 44.8512C 34.1266 48.4572 29.3516 51.4702 24.1886 49.2502C 19.1026 47.0302 27.1786 28.5992 22.6746 28.3612C 18.5206 28.1242 15.5706 31.4132 13.5906 37.9142C 11.6106 44.4142 13.2026 49.6872 13.2026 49.6872C 13.2026 49.6872 6.8746 50.4002 4.6616 47.1902C 2.4096 43.9392 3.9246 39.1822 4.5456 36.2892C 4.9726 34.2682 5.4376 30.8182 5.3606 28.7972C 5.2826 27.0142 4.5066 26.6172 2.9926 27.4502C 1.6726 28.1242 0.546596 28.5602 0.158596 28.0052C -0.113404 27.6082 -0.0354041 27.0932 0.391596 26.3802C 0.818596 25.6662 2.3326 24.2792 3.3026 23.2882C 5.7096 20.9502 9.1266 18.6892 10.6016 18.8882C 12.0766 19.1262 14.4446 21.7422 13.8236 24.7542C 13.5906 25.9042 13.6296 26.4982 13.6296 26.4982C 13.6296 26.4982 18.9866 21.9002 21.8206 20.8302C 24.6546 19.7602 30.4386 18.4522 32.6516 20.9502C 34.8646 23.4072 34.5536 27.7282 33.1956 35.8932C 32.4186 40.4912 32.6126 41.7582 33.6226 42.1552C 34.5536 42.5522 36.3396 41.5612 37.9706 40.5302C 39.7566 39.4202 41.1536 37.7952 41.8136 38.2312C 42.3186 38.5882 41.5026 40.8872 39.8726 42.8682ZM 29.8176 13.4972C 27.3726 12.2302 25.5476 11.2382 23.1016 10.1682C 19.2586 8.54324 19.1806 8.38424 15.4536 10.2482C 12.8916 11.5162 10.4846 13.3792 7.9226 14.6872C 4.5456 16.3512 4.7396 15.0832 3.3026 12.2682C 1.9436 9.57324 2.0216 9.09824 4.7396 7.51324C 7.7676 5.72824 12.7366 2.95424 16.1146 1.21024C 19.3746 -0.494763 19.0646 -0.296763 22.4416 1.17024C 26.3236 2.87524 29.8176 4.30124 33.6996 6.08524C 37.5816 7.86924 37.5046 9.05824 36.0296 11.7922C 34.5156 14.6072 33.9326 15.5592 29.8176 13.4972Z"
                        transform="translate(23.9999 19)" fill="#ffffff"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
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

  <div style="margin:40px; text-align: left;">
    <h1>Всё для организаторов событий и продажи билетов</h1>
    <p>
      Создайте лендинг мероприятия любого типа: от детского праздника до концерта, от вечеринки до мастер-класса.
      Запустите бесплатную регистрацию или продажу билетов. Это удобно и займёт не более 30 минут.
    </p>

    <var-button @click="goCheck()" size="large" color="#574AE2" type="primary">Проверка билетов</var-button>
    <var-button @click="goAbout()" text outline size="large" text-color="#574AE2" style="margin-top:20px">О приложении</var-button>

  </div>
</template>

<style>
html, body {
  height: 100%;
  background: radial-gradient(302.32px at 52.97% 121.43%, rgba(1, 186, 239, 0.15) 0%, rgba(1, 186, 239, 0) 100%), radial-gradient(828.44px at 33.96% 27.38%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(
      297.2deg, rgba(163, 213, 255, 0.5) 15.67%, rgba(201, 249, 255, 0.5) 81.08%), linear-gradient(
      0deg, #C9F9FF, #C9F9FF), linear-gradient(
      121.06deg, #A3D5FF 55.83%, #C9F9FF 87.81%);
}
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  methods: {
    goCheck() {
      this.$router.push({name: 'Check'})
    },
    goAbout() {
      this.$router.push({name: 'About'})
    },
    goSettings() {
      this.$router.push({name: 'Settings'})
    }
  }
}
</script>
