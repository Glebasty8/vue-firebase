<template>
    <Portal to="modals">
        <div class="overlay active" @click="close"></div>
        <slot></slot>
    </Portal>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        }
    }
};
</script>
