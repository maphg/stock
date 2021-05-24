<template>
	<div class="text-left flex flex-row w-full items-center hover:bg-gris-200 cursor-pointer" @click="copy">
		<div class="w-32 flex-none">
			<h1 class="font-bold py-1 bg-gris-200">{{ dato }}</h1>
		</div>
		<div class="">
			<h1 class="font-normal py-1 uppercase ml-1">{{ valor }}</h1>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			dato: {
				type: String,
				required: true,
			},
			valor: {
				type: String,
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
