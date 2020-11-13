<template>
  <div class="canvas">
    <VueP5 v-on="{setup,mousedragged,keypressed}"/>
    <div class="alert alert-warning" role="alert">
  For clear the canvas , just pressed button 1 on keyboard!
</div>
  </div>
</template>

<script>
import VueP5 from 'vue-p5'
export default {
  name: 'Canvas',
  components: {
    VueP5
  },
  methods: {
    setup (sketch) {
      sketch.createCanvas(900, 450)
      this.$socket.on('mouse_draw', (data) => {
        console.log(data)
        sketch.stroke('black')
        sketch.strokeWeight('3')
        sketch.line(data.x, data.y, sketch.pmouseX, sketch.pmouseY)
      })
    },
    mousedragged (sketch) {
      sketch.stroke('black')
      sketch.strokeWeight('3')
      sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY)
      const data = {
        x: sketch.mouseX,
        y: sketch.mouseY
      }
      this.$socket.emit('mouse_draw', data)
    },
    keypressed (sk) {
      const key = String.fromCharCode(sk.keyCode)
      if (key === '1') {
        sk.createCanvas(900, 450)
      }
    }
  }
}
</script>

<style>

</style>
