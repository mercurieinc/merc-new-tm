<template>
  <section class="home has-background-link is-bold">
    <section class="hero is-medium has-text-centered">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-white">
          Welcome<span v-if="name != null">, {{name}}</span>
        </h1>
        <h2 class="subtitle custom">
          We're so glad to have you the team as <span class="has-text-white">{{position}}</span>...
        </h2>
        <p v-if="day != null" class="has-text-white">My day was {{day}}</p>
      </div>
    </div>
    </section>
    <section class="form-c">
      <div class="container">
        <div class="columns">
          <div class="column"></div>
          <div class="column is-half">
            <MForm />
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import MForm from '@/components/MForm'
import {mapGetters, mapMutations} from 'vuex';

export default {
  components: {
    MForm
  },
  computed: {
    ...mapGetters ([
        'name',
        'position',
        'choice',
        'day'
    ])
},
}
</script>

<style lang="scss">
.home {
  padding: 0  0 250px;
  margin: -50px 0 0;
  .hero-body {
    padding: 0 0 20px;
  }
}
@media (max-width: 575.98px) { 
  .home {
    margin: 0;
    padding: 50px 20px 100px;
    h2 {
      font-size: 18px;
      padding: 0 0 30px;
    }
  }
 }


</style>
