<template>
  <div class="col-3 m-3">
    <div class="card" style="width: 15rem">
      <!-- <img src="../../template/5.png" class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h4 class="card-title">{{ room.name }}</h4>
        <p class="card-text">{{ room.players.length }}</p>
        <button @click="join" class="btn btn-warning"><b>Enter Room</b></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OpenRoom',
  props: ['room'],
  methods: {
    join () {
      this.$router.push(`/room/${this.room.name}`)
    }
  }
}
</script>

<style>
</style>
