<template>
  <!-- Main game -->

  <section id="main-game" class="container-fluid p-5" style="height: 100vh;">
    <div class="row">
      <div class="col-2">
        <div class="p-4 bg-light shadow" style="width: 95%; border-radius: 20px;">
          <h1>List Player</h1>
          <hr>
          <SidePlayer v-for="(user, i) in users" :key="i" :user="user"/>
        </div>
      </div>

      <div class="col-7">
        <div class="p-4 bg-light shadow" style="width: 95%; border-radius: 20px;margin: 0 auto;">
          <h3>Game Board</h3>
          <hr>
          <!-- sentence -->
          <div class="card">
            <div class="card-body">
              <Canvas/>
            </div>
          </div>

          <form class="mt-5">
            <div class="form-group">
              <input type="text" class="form-control-lg" placeholder="Type here...">
            </div>
          </form>

        </div>
      </div>

<!-- chat -->
      <div class="col-3">
        <div class="p-4 bg-light shadow" style="width: 95%; border-radius: 20px;margin: 0 auto;">
          <h1>Chat Box</h1>
          <hr>
          <div class="container">

            <div class="container-chat">
              <img src="https://robohash.org/YOU.png?set=set4" alt="Avatar">
              <p>Hello. How are you today?</p>
              <span class="time-right">11:00</span>
            </div>

            <div class="container-chat darker">
              <img src="https://robohash.org/YOTEXT.png?set=set4" alt="Avatar" class="right">
              <p>Hey! I'm fine. Thanks for asking!</p>
              <span class="time-left">11:01</span>
            </div>

            <div class="container-chat">
              <img src="https://robohash.org/YOU.png?set=set4" alt="Avatar">
              <p>Sweet! So, what do you wanna do today?</p>
              <span class="time-right">11:02</span>
            </div>

            <div class="container-chat darker">
              <img src="https://robohash.org/YOTEXT.png?set=set4" alt="Avatar" class="right">
              <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
              <span class="time-left">11:05</span>
            </div>

          </div>
          <form>
            <input type="text" name="" id="">
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SidePlayer from '../components/SidePlayer'
import Canvas from '../components/Canvas'
export default {
  name: 'Room',
  data () {
    return {
      room: {},
      users: []
    }
  },
  components: {
    SidePlayer,
    Canvas
  },
  computed: {
  },
  created () {
    console.log(this.$route.params)
    for (const key in this.$store.state.rooms) {
      if (this.$store.state.rooms[key] === this.$route.params) {
        this.room = this.$store.state.rooms[key]
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log(to, '<< to')
    console.log(from, '<< from')
    console.log(next, '<< next')
    next()
  },
  sockets: {
    userLogin (player) {
      console.log(player, 'ini player yang join')
      this.users = player
    }
  }
}
</script>

<style>

</style>
