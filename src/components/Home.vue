<template>
  <div class="container_1">
    <transition name="home">
      <div class="home" v-if="show">
        <div>
          <div class="logoContainer">
            <img :src="logo" alt="这里是logo">
          </div>
          <div class="inputContainer">
            <div>
              <input class="searchInput" type="text">
            </div>
            <div class="">
              <button @click="leave">leave</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      show: false,
      hot_key: [],
      search_key: [],
      logo: ''
    }
  },
  mounted () {
    this.$showLoading()
    // 模仿请求数据
    setTimeout(() => {
      this.$hideLoading()
      this.show = true
    }, 2000)
  },
  methods: {
    leave () {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container_1 {
  height: 100%;
  width: 100%;
}
.home {
  border: 5px solid red;
}
.home-enter {
  /* position: relative; */
  transform: translateY(80%);
  opacity: 0;
}
.home-enter-to {
  /* position: relative; */
  opacity: 1.0;
  /* transform: translateY(0px); */
}
.home-enter-active {
  transition: all .5s linear;
}

.home-leave {
  /* transform: translateY(0px); */
  opacity: 1;
}
.home-leave-to {
  transform: translateY(50%);
  opacity: 0;
}
.home-leave-active {
  transition: all .2s linear;
}

.searchInput {
  
}
</style>
