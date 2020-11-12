<template>
  <section class="container-fluid p-5" style="height: 100vh; ">
    <div class="row">
      <div class="col-6">
        <img src="../assets/image.png" alt="Room" width="100%">
        <h1 style="text-align:center;">Type Racer - IO</h1>
      </div>
      <div class="col-6">
        <nav class="navbar navbar-light bg-light">
          <h1>List Room</h1>
          <button class="btn btn-outline-primary p-3"><i class="fas fa-plus"></i> Create Room</button>
        </nav>

        <div class="row">
          <div class="col-3 m-3">
            <div class="card" style="width: 15rem;">
              <img src="../assets/5.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="card-title">Masuk sini</h4>
                <p class="card-text">2 Player</p>
                <button class="btn btn-warning"><b>Enter Room</b></button>
              </div>
            </div>
          </div>

          <div class="col-3 m-3">
            <div class="card" style="width: 15rem;">
              <img src="../assets/5.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="card-title">Masuk sini</h4>
                <p class="card-text">2 Player</p>
                <button class="btn btn-warning"><b>Enter Room</b></button>
              </div>
            </div>
          </div>
          <div class="col-3 m-3">
            <div class="card" style="width: 15rem;">
              <img src="../assets/5.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="card-title">Masuk sini</h4>
                <p class="card-text">2 Player</p>
                <button class="btn btn-warning"><b>Enter Room</b></button>
              </div>
            </div>
          </div>
          <div class="col-3 m-3">
            <div class="card" style="width: 15rem;">
              <img src="../assets/5.png" class="card-img-top" alt="...">
              <div class="card-body">
                <h4 class="card-title">Masuk sini</h4>
                <p class="card-text">2 Player</p>
                <button class="btn btn-warning"><b>Enter Room</b></button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
// import Swal from 'sweetalert2'
export default {
  name: 'Home',
  data () {
    return {
      // username: ''
    }
  },
  methods: {
    // inputUname () {
    //   Swal.fire({
    //     title: 'Enter your Username !',
    //     input: 'text',
    //     inputLabel: 'Username',
    //     inputValidator: (value) => {
    //       if (!value) {
    //         return 'You need to write something!'
    //       }
    //     }
    //   })
    //     .then(result => {
    //       console.log(result.value)
    //       localStorage.setItem('username', result.value)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    // }
  },
  components: {
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.$router.push({ name: 'Login' })
    }
    this.username = localStorage.getItem('username')
  }
}
</script>
