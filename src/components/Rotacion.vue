<template>
	<div class="flex flex-row items-center justify-center">
		<h1 class="font-bold text-xxs px-2 rounded-sm uppercase" :class="rotacionFinal">{{ rot }}</h1>
	</div>
</template>

<script>
	export default {
		props: {
			rot: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const rotacion = props.rot;

			const TiposRotacion = {
				ALTA: "bg-zic-300 text-zic-500",
				MEDIA: "bg-zie-300 text-zie-500",
				BAJA: "bg-zia-300 text-zia-500",
				SEGURIDAD: "bg-dec-300 text-dec-500",
			};
			const RotacionDefault = "bg-gray-100 text-gray-500";

			const rotacionFinal = TiposRotacion[rotacion] || RotacionDefault;

			return { rotacionFinal };
		},
	};
</script>

<style></style>
