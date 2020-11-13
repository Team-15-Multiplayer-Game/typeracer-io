<template>
  <div class="landing-page">
    <!-- pop up login -->
    <section id="login" style="height: 100vh; display: none;">
      <div class="d-flex bg-dark justify-content-center align-items-center" style="height: 100%;">
        <div class="p-5 bg-light shadow" style="width: 20%; border-radius: 10px;">
          <div>
            <h1 class="text-center">TypeRacer.io</h1>
            <!-- <img class="w-100" src="../../template/image.png" alt="login page"> -->
            <form class="mt-4" onsubmit="">
              <div class="form-group">
                <input class="form-control" type="text" placeholder="your username" id="username">
              </div>
              <button class="btn btn-block text-white" type="submit" style="background-color: #42b0f8;">Play now!</button>
            </form>
            <!-- <br> -->
          </div>
        </div>
      </div>
    </section>

    <section id="login" class="container-fluid p-5" style="height: 100vh;">
      <div class="row">
        <div class="col-6">
          <!-- <img src="../../template/image.png" alt="Room" width="100%"> -->
          <h1 style="text-align:center;">Type Racer - IO</h1>
        </div>
        <div class="col-6">
          <nav class="navbar navbar-light bg-light">
            <h1>List Room</h1>
            <button class="btn btn-outline-primary p-3" @click="createRoom"><i class="fas fa-plus"></i> Create Room</button>
          </nav>

          <div class="row">
            <OpenRoom
            v-for="(room, i) in rooms"
            :key="i"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2'
import OpenRoom from '../components/OpenRoom'
export default {
  name: 'Home',
  data () {
    return {
      username: '',
      createRoomPayload: {
        name: '',
        private: ''
      }
    }
  },
  methods: {
    createRoom () {
      Swal.fire({
        title: 'Enter room name !',
        input: 'text',
        inputLabel: 'Room name',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      })
        .then((result) => {
          this.createRoomPayload.name = result.value
          return Swal.fire({
            title: 'Select Room Visibility!',
            input: 'select',
            inputOptions: { true: 'private', false: 'public' },
            inputPlaceholder: 'Select room visibility',
            showCancelButton: true,
            inputValidator: (value) => {
              return new Promise((resolve) => {
                if (!value) {
                  resolve('You need to select room visibility')
                } else {
                  resolve()
                }
              })
            }
          })
        })
        .then(result => {
          this.createRoomPayload.private = result.value
          if (result.isConfirmed) {
            this.$socket.emit('createRoom', this.createRoomPayload)
            this.$router.push(`/${this.createRoomPayload.name}`)
            localStorage.setItem('host', 'true')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  components: {
    OpenRoom
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    },
    room () {
      return this.$store.state.room
    },
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.$router.push({ name: 'Login' })
    }
  }
}

</script>
