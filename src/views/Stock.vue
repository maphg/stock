<template>
	<div class="flex flex-col w-full">
		<div class="font-semibold text-2xl text-left w-full bg-red-200">
			<h1>Stock</h1>
		</div>
		<tabla></tabla>
	</div>
</template>

<script>
	import Tabla from "../components/Tabla.vue";

	export default {
		components: { Tabla },
	};
</script>

<style scoped></style>
