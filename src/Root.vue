<template>
  <div id="app">
    <PortalTarget name="modals" multiple />
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Header from './components/layout/Header.vue';
import Footer from './components/layout/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
  .flex {
      display: flex;
  }
  .align-center {
      align-items: center;
  }
  .column {
      flex-direction: column;
  }
  .jusify-center {
      justify-items: center;
  }
  .overlay {
    height: 100vh;
    width: 100vw;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    visibility: hidden;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .active {
      opacity: 1;
      visibility: visible;
      z-index: 1;
  }
</style>
