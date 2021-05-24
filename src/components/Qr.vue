<template>
	<div class="relative  z-50 flex flex-col items-center justify-center mr-4 w-8 h-8 ring ring-gris-400 cursor-pointer rounded-full" @click="mostrar = !mostrar">
		<div class="bg-white border-gris-300 p-1  w-8 h-8 rounded-full bg-cover bg-center" v-bind:style="{ backgroundImage: 'url(' + url + ')' }"></div>

		<transition mode="out-in" enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__fadeOut">
			<div class="absolute top-12 w-48 bg-white rounded-xl p-5 shadow" v-if="mostrar">
				<img :src="url" class="w-60" alt="" />
				<button class="p-1 text-xxs bg-bluedemon-200 hover:bg-bluedemon-300 text-bluedemon-400 mt-4 rounded">Copiar URL</button>
			</div>
		</transition>
	</div>
</template>

<script>
	import { ref } from "vue";
	export default {
		setup() {
			const mostrar = ref(false);
			const url = "https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=svg&bgcolor=fff&color=374151&data=" + window.location;

			return { mostrar, url };
		},
	};
</script>

<style></style>
