<template>
	<div class="font-bold text-xxs w-6 h-6 rounded-full uppercase mr-1 flex flex-none items-center justify-center" :class="ClaseFinal">
		<h1>{{ seccion }}</h1>
	</div>
</template>

<script>
	export default {
		props: {
			seccion: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const seccion = props.seccion;

			const ClasesSecciones = {
				ZIA: "bg-zia-300 text-zia-500",
				ZHP: "bg-zhp-300 text-zhp-500",
				ZIC: "bg-zic-300 text-zic-500",
				DEC: "bg-dec-300 text-dec-500",
				ZIE: "bg-zie-300 text-zie-500",
				ZHC: "bg-zhc-300 text-zhc-500",
				ZHA: "bg-zha-300 text-zha-500",
				ZIL: "bg-zil-300 text-zil-500",
				AUT: "bg-aut-300 text-aut-500",
				DEP: "bg-dep-300 text-dep-500",
				ZHH: "bg-zhh-300 text-zhh-500",
			};
			const ClaseDefault = "bg-gray-100 text-gray-500";

			const ClaseFinal = ClasesSecciones[seccion] || ClaseDefault;

			return { ClaseFinal };
		},
	};
</script>

<style></style>
