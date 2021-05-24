<template>
	<div class="text-left flex flex-row w-full items-center hover:bg-gris-200 cursor-pointer" @click="copy">
		<div class="w-32 flex-none">
			<h1 class="font-bold py-1">Grupos</h1>
		</div>
		<div class="flex flex-row justify-start flex-wrap w-full">
			<div v-for="etiqueta in etiquetas" :key="etiqueta" class="p-1 rounded bg-blue-100 text-bluedemon-400 mr-1 mb-1">
				<h1>{{ etiqueta }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			etiquetas: {
				type: Array,
				required: true,
			},
		},
		setup(props) {
			// let val = props.dato + ": " + props.valor;
			// console.log(val);
		},
	};
</script>

<style></style>
