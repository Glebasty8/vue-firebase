<template>
    <Modal @close="close">
        <div class="flex column align-center confirmation-modal">
            <a class="close" @click="close">&times;</a>
            <p>Are you want log out?</p>
            <button class="btn" @click="close">Cancel</button>
            <button class="btn" @click="logOut">Log out</button>
      </div>
    </Modal>
</template>

<script>
import Modal from '@/components/Modals';

export default {
    name: 'LogoutModal',
    components: {
        Modal,
    },
    methods: {
        close() {
            this.$emit('close');
        },
        logOut() {
            this.$emit('logOut');
        }
    },
};
</script>


<style>
 .confirmation-modal {
      padding: 20px;
      position: absolute;
      z-index: 2;
      width: 200px;
      height: 200px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
}
</style>
