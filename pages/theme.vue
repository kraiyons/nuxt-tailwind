<template>
  <i-card class="prose">
    <h3 class="p-0 m-0">Basic Information</h3>
    <i-input
      v-model="club.clubName"
      name="Organization Name"
      placeholder="Company 123"
    ></i-input>
    <i-input
      v-model="club.industry"
      name="Industry"
      placeholder="Sports"
    ></i-input>
  </i-card>
</template>

<script>
import ICard from '@/components/ICard'
import IInput from '@/components/IInput'

export default {
  components: {
    ICard,
    IInput,
  },
  mounted() {
    this.$store.commit('setPageTitle', 'Page Theme')
    this.$store.commit('setActiveModule', 'Customization')
  },
  data() {
    return {
      club: {
        name: 'Test',
      },
    }
  },
}
</script>
