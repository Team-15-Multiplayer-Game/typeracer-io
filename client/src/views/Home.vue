<template>
  <div class="landing-page">

  </div>
</template>

<script>
// @ is an alias to /src
import Swal from 'sweetalert2'
export default {
  name: 'Landing-Page',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    inputUname () {
      Swal.fire({
        title: 'Enter your Username !',
        input: 'text',
        inputLabel: 'Username',
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        }
      })
        .then(result => {
          console.log(result.value)
          localStorage.setItem('username', result.value)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  components: {
  },
  created () {
    if (!localStorage.getItem('username')) {
      this.inputUname()
    }
    this.username = localStorage.getItem('username')
  }
}
</script>
