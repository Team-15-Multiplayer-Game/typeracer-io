<template>
  <section id="login" style="height: 100vh;">
    <div class="d-flex bg-dark justify-content-center align-items-center" style="height: 100%;">
      <div class="p-5 bg-light shadow" style="width: 20%; border-radius: 10px;">
        <div>
          <h1 class="text-center">TypeRacer.io</h1>
          <img class="w-100" src="../assets/image.png" alt="login page">
          <form class="mt-4" @submit.prevent="login">
            <div class="form-group">
              <input class="form-control" v-model="username" type="text" placeholder="your username" id="username">
            </div>
            <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;">Play now!</button>
          </form>
          <!-- <br> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    login () {
      localStorage.setItem('username', this.username)
      this.$socket.emit('userLogin', { username: this.username })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style>

</style>
