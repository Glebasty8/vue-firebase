<template>
    <div>
        <article class="flex column align-center" v-for="(location, idx) in locations" :key="idx">
            <h1>{{ location.name }}</h1>
            <img class="place-img" :src="location.image">
            <button class="btn" @click="deleteLocation(location.id)">
                Delete
            </button>
        </article>
        <form @submit.prevent="addLocation(name, image)">
            <input v-model="name" placeholder="Location Name">
            <input v-model="image" placeholder="Location Image URL">
            <button class="btn" type="submit">Add New Location</button>
        </form>
    </div>
</template>

<script>
import { db } from './../main'
export default {
    name: 'HelloWorld',
    data () {
        return {
            locations: [],
            name: '',
            image: '',
        }
    },
    firestore() {
        return {
            locations: db.collection('locations').orderBy('createdAt'),
        }
    },
    methods: {
        addLocation (name, image) {
            const createdAt = new Date();
            db.collection('locations').add({ name, image, createdAt });
        },
        deleteLocation (id) {
            db.collection.doc(id).delete();
        }
    }
}
</script>

<style scoped>
    .place-img {
        width: 400px;
        height: 400px;
    }
</style>


