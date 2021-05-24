<template>
	<div class="w-full flex flex-row8i md:items-start items-start justify-center">
		<div class="w-20 flex flex-col flex-wrap items-center justify-start">
			<div v-for="images2 in img" :key="images2" class="cursor-pointer w-16 h-16 rounded-lg my-2 border-2 border-transparent hover:border-bluedemon-300 bg-cover bg-center bg-gray-300" v-bind:style="{ backgroundImage: 'url(' + images2 + ')' }" @click="imgprincipal(images2)"></div>
		</div>
		<div class="wh bg-cover bg-center border-2 border-gris-200 shadow-sm relative rounded-3xl" v-bind:style="{ backgroundImage: 'url(' + y + ')' }">
			<div class="boton absolute w-full h-10 bottom-0">
				<a target="_blank" :href="y" class="bg-blue-100 focus:outline-none hover:bg-bluedemon-200 text-bluedemon-400 font-bold opacity-100 rounded-md px-2 py-1 text-xs flex items-center w-24 mx-auto"><span class="material-icons text-sm">file_download</span> Descargar <img :src="y" class="hidden" alt="" /> </a>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	export default {
		props: {
			img: {
				type: Array,
				required: true,
			},
		},
		setup(props) {
			let y = "";
			if (props.img.length === 0) {
				y = "https://cdn.dribbble.com/users/1912446/screenshots/4740444/photo.gif";
			} else {
				y = ref(props.img[0]);
			}

			const imgprincipal = (x) => {
				y.value = x;
			};
			return { imgprincipal, y };
		},
	};
</script>

<style scoped>
	.wh {
		height: 28rem;
		width: 28rem;
	}
	.boton a {
		opacity: 0%;
	}
	.wh:hover .boton a {
		opacity: 100%;
	}
</style>
