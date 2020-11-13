<template>
  <div class="canvas">
    <VueP5 v-on="{draw,setup,mousedragged,keypressed}"/>
    <div class="alert alert-warning" role="alert">
      For clear the canvas , just pressed button 1 on keyboard!
    </div>
    <!-- <button class="btn btn-primary" @click="test">button</button> -->
  </div>
</template>

<script>
import VueP5 from 'vue-p5'
export default {
  name: 'Canvas',
  data () {
    return {
      line: {},
      keys: ''
    }
  },
  components: {
    VueP5
  },
  sockets: {
    mouse_draw (data) {
      this.line = data
    },
    erase_draw (data) {
      this.keys = data
    }
  },
  methods: {
    setup (sketch) {
      sketch.createCanvas(900, 450)
    },
    draw (sketch) {
      sketch.x = this.line.x
      sketch.y = this.line.y
      sketch.xx = this.line.xx
      sketch.yy = this.line.yy
      sketch.stroke('black')
      sketch.strokeWeight('3')
      sketch.line(sketch.x, sketch.y, sketch.xx, sketch.yy)
    },
    mousedragged (sketch) {
      sketch.stroke('black')
      sketch.strokeWeight('3')
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY)
      const data = {
        x: sketch.mouseX,
        y: sketch.mouseY,
        xx: sketch.pmouseX,
        yy: sketch.pmouseY
      }
      this.$socket.emit('mouse_draw', data)
    },
    keypressed (sk) {
      const key = String.fromCharCode(sk.keyCode)
      this.$socket.emit('erase_draw', key)
      if (key === '1' || this.keys === '1') {
        sk.createCanvas(900, 450)
      }
    }
  }
}
</script>

<style>

</style>
