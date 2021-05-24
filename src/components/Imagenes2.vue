<template>
	<div class="w-full flex flex-row justify-start items-start">
		<div class="w-3/4">
			<img class="w-full cursor-pointer" :src="y" alt="" />
		</div>
		<div class="w-1/4 flex flex-row flex-wrap items-start justify-start">
			<img v-for="images in img" :key="images" class="w-1/2 cursor-pointer" :src="images" @click="imgprincipal(images)" />
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
				y = "https://cdn.dribbble.com/users/1187836/screenshots/5947816/4-search.gif";
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

<style></style>
