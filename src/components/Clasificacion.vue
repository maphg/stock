<template>
	<div class="flex flex-row items-center justify-center">
		<h1 class="font-bold text-xxs px-2 rounded-sm uppercase" :class="Final">{{ clasificacion }}</h1>
	</div>
</template>

<script>
	export default {
		props: {
			clasificacion: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const clasificacion1 = props.clasificacion;

			const Tipos = {
				"FF&E": "bg-zia-300 text-zia-500",
				"OS&E": "bg-yellow-300 text-yellow-500",
			};
			const ClasificacionDefault = "bg-gray-100 text-gray-500";

			const Final = Tipos[clasificacion1] || ClasificacionDefault;

			return { Final };
		},
	};
</script>

<style></style>
