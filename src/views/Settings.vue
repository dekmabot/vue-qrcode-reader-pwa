<template>
  <var-app-bar
      title="Настройки"
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

  <p>
    [форма настроек]
  </p>

</template>

<style>
.var-card__title {
  text-align: left;
}

.var-card__description {
  text-align: left;
}
</style>
<script>
// @ is an alias to /src

export default {
  name: 'About',
  components: {},
  methods: {
    goHome() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
