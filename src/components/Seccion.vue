<template>
	<div class="font-bold text-xs w-8 h-8 rounded-full uppercase mr-4 flex flex-none items-center justify-center" :class="ClaseFinal">
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
				ZIA: "bg-zia-300 text-zia-500 ring ring-zia-100",
				ZHP: "bg-zhp-300 text-zhp-500 ring ring-zhp-100",
				ZIC: "bg-zic-300 text-zic-500 ring ring-zic-100",
				DEC: "bg-dec-300 text-dec-500 ring ring-dec-100",
				ZIE: "bg-zie-300 text-zie-500 ring ring-zie-100",
				ZHC: "bg-zhc-300 text-zhc-500 ring ring-zhc-100",
				ZHA: "bg-zha-300 text-zha-500 ring ring-zha-100",
				ZIL: "bg-zil-300 text-zil-500 ring ring-zil-100",
				AUT: "bg-aut-300 text-aut-500 ring ring-aut-100",
				DEP: "bg-dep-300 text-dep-500 ring ring-dep-100",
				ZHH: "bg-zhh-300 text-zhh-500 ring ring-zhh-100",
			};
			const ClaseDefault = "bg-gray-100 text-gray-500";

			const ClaseFinal = ClasesSecciones[seccion] || ClaseDefault;

			return { ClaseFinal };
		},
	};
</script>

<style></style>
