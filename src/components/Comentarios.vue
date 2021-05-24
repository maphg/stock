<template>
	<div class="w-full flex flex-col justify-start items-center mb-4">
		<div class="bg-gris-100 hover:bg-gris-200 flex flex-row items-center justify-start w-7/12 p-2 cursor-pointer shadow-sm rounded-lg">
			<img :src="url" class="w-6" alt="" />
			<div class="flex flex-col justify-center items-start ml-2">
				<h1 class="text-left">{{ comentario }}</h1>
				<div class="flex flex-row">
					<h1 class="text-xxs mr-2 font-semibold">{{ autor }}</h1>
					<h1 class="text-xxs">{{ fecha }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	export default {
		props: {
			autor: {
				type: String,
				required: true,
			},
			comentario: {
				type: String,
				required: true,
			},
			fecha: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const url = ref("https://ui-avatars.com/api/?format=svg&rounded=true&size=300&background=2d3748&color=edf2f7&name=" + props.autor);
			return { url };
		},
	};
</script>

<style></style>
