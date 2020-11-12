<template>
  <section id="main-game" class="container-fluid p-5" style="height: 100vh;">
    <div class="row">
      <div class="col-2">
        <div class="p-4 bg-light shadow" style="width: 95%; border-radius: 20px;">
          <h1>List Player</h1>
          <hr>

          <div class="card mb-3 rounded-pill p-1 btn-outline-primary">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://robohash.org/YOUR-TEXT.png?set=set4" class="card-img rounded-circle" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">John doe</h5>
                <p class="card-text">oke</p>
              </div>
            </div>
          </div>

          <div class="card mb-3  rounded-pill p-1 btn-outline-warning">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://robohash.org/YOURe.png?set=set4" class="card-img rounded-circle" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">John doe</h5>
                <p class="card-text">oke</p>
              </div>
            </div>
          </div>

          <div class="card mb-3 rounded-pill p-1 btn-outline-danger">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://robohash.org/YOTEXT.png?set=set4" class="card-img rounded-circle" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">John doe</h5>
                <p class="card-text">oke</p>
              </div>
            </div>
          </div>

          <div class="card mb-3 rounded-pill p-1 btn-outline-success">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="https://robohash.org/YOU.png?set=set4" class="card-img rounded-circle" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">John doe</h5>
                <p class="card-text">oke</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="col-7">
        <div class="p-4 bg-light shadow" style="width: 95%; border-radius: 20px;margin: 0 auto;">
          <h3>Game Board</h3>
          <hr>
          <!-- sentence -->
          <div class="card">
            <div class="card-body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
          </div>

          <form class="mt-5">
            <div class="form-group">
              <input type="text" class="form-control-lg" placeholder="Type here...">
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Game'
}
</script>

<style>

</style>
