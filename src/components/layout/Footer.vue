<template>
    <footer class="flex column align-center footer">
        <h1>{{currentDate}}</h1>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    computed: {
        currentDate() {
            return new Date();
        }
    }
}
</script>

<style scoped>
  .footer {
    position: absolute;
    bottom: 0;
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
    width: 100%;
  }
</style>

