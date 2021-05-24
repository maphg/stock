<template>
	<div class="font-bold texto w-8 h-8 rounded-full uppercase mr-4 flex flex-none items-center justify-center" :class="Final">
		<h1>{{ clasificacion }}</h1>
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
				"FF&E": "bg-zia-300 text-zia-500 ring ring-zia-100",
				"OS&E": "bg-yellow-300 text-yellow-500 ring ring-yellow-100",
			};
			const ClasificacionDefault = "bg-gray-100 text-gray-500";

			const Final = Tipos[clasificacion1] || ClasificacionDefault;

			return { Final };
		},
	};
</script>

<style scoped>
	.texto {
		font-size: 0.65rem /* 12px */;
		line-height: 1rem /* 16px */;
	}
</style>
