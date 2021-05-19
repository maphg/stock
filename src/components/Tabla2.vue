<template>
	<div class="flex flex-row items-center justify-center pt-4 w-full">
		<input type="search" name="" class="bg-white border rounded-lg shadow p-3 w-10/12 md:w-1/4 focus:outline-none" placeholder="Buscar activo o material" id="" />
	</div>
	<div class="w-full flex flex-col md:flex-row items-center justify-center md:justify-between pt-4">
		<div class="flex flex-row flex-wrap w-full items-center">
			<selector :valores="['uno', 'dos']" texto="Cod2Bend"></selector>
			<selector :valores="['uno', 'dos']" texto="Sección"></selector>
			<selector :valores="['uno', 'dos']" texto="Subsección"></selector>
			<selector :valores="['uno', 'dos']" texto="Grupos"></selector>
			<selector :valores="['uno', 'dos']" texto="Clasificación"></selector>
			<selector :valores="['uno', 'dos']" texto="Marca"></selector>
			<selector :valores="['uno', 'dos']" texto="Rotacion"></selector>
			<selector :valores="['uno', 'dos']" texto="SubFamilia"></selector>
			<button class="bg-bluedemon-200 text-bluedemon-400 text-sm p-2 rounded-md flex items-center focus:outline-none"><span class="material-icons text-sm">sort</span>Filtrar</button>
		</div>

		<div class="relative inline-block w-full md:w-1/12 text-gray-700 cursor-pointer bg-white" @click="menucol = !menucol">
			<div class="w-full h-10 pl-3 pr-6 text-xs border rounded-lg appearance-none focus:shadow-outline flex items-center">
				<span class="material-icons text-lg mr-2 " :class="{ 'text-bluedemon-400': menucol }">filter_list</span>
				<h1>Columnas</h1>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
				<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
			</div>
			<div class="absolute  text-xs border rounded mt-2 bg-white z-50 flex w-full flex-col shadow" v-if="menucol">
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol1 = !toogleCol1">
					<span v-if="toogleCol1 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol1" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Cod. 2bend</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol2 = !toogleCol2">
					<span v-if="toogleCol2 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol2" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Descripción SSTT</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol3 = !toogleCol3">
					<span v-if="toogleCol3 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol3" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Seccion/Área</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol4 = !toogleCol4">
					<span v-if="toogleCol4 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol4" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Grupos/Etiquetas</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol5 = !toogleCol5">
					<span v-if="toogleCol5 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol5" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Clasificación</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol6 = !toogleCol6">
					<span v-if="toogleCol6 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol6" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Marca/Modelo</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol7 = !toogleCol7">
					<span v-if="toogleCol7 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol7" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Caracteristicas</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol8 = !toogleCol8">
					<span v-if="toogleCol8 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol8" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Referencia</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol9 = !toogleCol9">
					<span v-if="toogleCol9 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol9" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Rotación</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol10 = !toogleCol10">
					<span v-if="toogleCol10 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol10" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Stock</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol11 = !toogleCol11">
					<span v-if="toogleCol11 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol11" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Coste U.</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol12 = !toogleCol12">
					<span v-if="toogleCol12 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol12" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Coste Almacen</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol13 = !toogleCol13">
					<span v-if="toogleCol13 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol13" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Subfamilia SSTT</h1>
				</div>
				<div class="flex flex-row justify-start items-center cursor-pointer hover:bg-bluedemon-100 py-1" @click="toogleCol14 = !toogleCol14">
					<span v-if="toogleCol14 === false" class="material-icons text-sm mx-1 text-bluedemon-400">radio_button_unchecked</span>
					<span v-if="toogleCol14" class="material-icons text-sm mx-1 text-bluedemon-400">check_circle</span>
					<h1>Tiempos</h1>
				</div>
			</div>
		</div>
	</div>
	<!-- component -->
	<div class="">
		<div class="flex items-center justify-center font-sans">
			<div class="w-full">
				<div class="bg-white shadow my-6 rounded-lg border maxh overflow-y-auto overflow-x-auto md:overflow-x-hidden">
					<table class="min-w-max w-full table-fixed text-xxs font-semibold text-gray-800">
						<thead class="leading-8 capitalize font-bold text-sm bg-gris-300 shadow-ms border-b">
							<th v-if="toogleCol1" class="w-52 sticky top-0 bg-gris-300 ">Cod. 2bend</th>
							<th v-if="toogleCol2" class="w-52 sticky top-0 bg-gris-300 ">Descripción SSTT</th>
							<th v-if="toogleCol3" class="w-36 sticky top-0 bg-gris-300 ">Seccion/Área</th>
							<th v-if="toogleCol4" class="w-36 sticky top-0 bg-gris-300 ">Grupos/Etiquetas</th>
							<th v-if="toogleCol5" class="w-28 sticky top-0 bg-gris-300 ">Clasificación</th>
							<th v-if="toogleCol6" class="w-28 sticky top-0 bg-gris-300 ">Marca/Modelo</th>
							<th v-if="toogleCol7" class="w-28 sticky top-0 bg-gris-300 ">Caracteristicas</th>
							<th v-if="toogleCol8" class="w-28 sticky top-0 bg-gris-300 ">Referencia</th>
							<th v-if="toogleCol9" class="w-28 sticky top-0 bg-gris-300 ">Rotación</th>
							<th v-if="toogleCol10" class="w-28 sticky top-0 bg-gris-300 ">Stock</th>
							<th v-if="toogleCol11" class="w-28 sticky top-0 bg-gris-300 ">Coste U.</th>
							<th v-if="toogleCol12" class="w-28 sticky top-0 bg-gris-300 ">Coste Almacen</th>
							<th v-if="toogleCol13" class="w-28 sticky top-0 bg-gris-300 ">Subfamilia SSTT</th>
							<th v-if="toogleCol14" class="w-28 sticky top-0 bg-gris-300 ">Tiempos</th>
						</thead>
						<tbody class="">
							<tr v-for="item in 100" :key="item" class="border-b border-gray-200 cursor-pointer">
								<td v-if="toogleCol1" class="py-1 px-1 text-left">
									<div class="flex flex-row items-center justify-start">
										<h1 class="font-bold mr-2">2254854</h1>
										<p class="">Remachadora De Palanca. Conjunto Completo Con Maletín Y Depósito Para Recoger Las Espigas. Para Remaches De Ø 3- 6 Mm</p>
									</div>
								</td>
								<td v-if="toogleCol2" class="py-1 px-1 text-justify">
									<p>Descripcion hecha por el departamento de mantenimiento</p>
								</td>

								<td v-if="toogleCol3" class="py-1 px-1 text-left uppercase">
									<div class="flex flex-row items-center justify-center">
										<seccion seccion="ZIA"></seccion>
										<p class="">Calderas</p>
									</div>
								</td>
								<td v-if="toogleCol4" class="py-1 px-1 text-left">
									<div class="flex flex-row flex-wrap items-center justify-start">
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400">Grupo 1</h1>
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400">Grupo X</h1>
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400">Grupo X</h1>
									</div>
								</td>
								<td v-if="toogleCol5" class="py-1 px-1 text-center">
									<clasificacion clasificacion="FF&E"></clasificacion>
								</td>
								<td v-if="toogleCol6" class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">MARCA</span>
										<h1>Hamilton Beach</h1>
										<span class="minititles">MOD</span>
										<h1>ASD54546A</h1>
									</div>
								</td>
								<td v-if="toogleCol7" class="py-1 px-1 text-center">
									<h1>Caracteristicas</h1>
								</td>
								<td v-if="toogleCol8" class="py-1 px-1 text-center">
									<h1>51456165156</h1>
								</td>
								<td v-if="toogleCol9" class="py-1 px-1 text-left">
									<rotacion rot="ALTA"></rotacion>
								</td>
								<td v-if="toogleCol10" class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">TÉORICO</span>
										<h1>2355655</h1>
										<span class="minititles">REAL</span>
										<h1>154815</h1>
									</div>
								</td>
								<td v-if="toogleCol11" class="py-1 px-1 text-center">
									<div class="flex flex-col items-center justify-center">
										<span class="minititles">USD</span>
										<h1>$2355655</h1>
									</div>
								</td>
								<td v-if="toogleCol12" class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">TÉORICO</span>
										<h1>$565653</h1>
										<span class="minititles">REAL</span>
										<h1>$565653</h1>
									</div>
								</td>
								<td v-if="toogleCol13" class="py-1 px-1 text-center">
									<h1>Herramientas</h1>
								</td>
								<td v-if="toogleCol14" class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">T. VIDA</span>
										<h1>1 año</h1>
										<span class="minititles">F. INSTALACIÓN</span>
										<h1>25/05/2021</h1>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	import Clasificacion from "./Clasificacion.vue";
	import Rotacion from "./Rotacion.vue";
	import Seccion from "./Seccion.vue";
	import Selector from "./Selector.vue";
	export default {
		components: { Seccion, Rotacion, Clasificacion, Selector },
		setup(props) {
			const toogleCol1 = ref(true);
			const toogleCol2 = ref(true);
			const toogleCol3 = ref(true);
			const toogleCol4 = ref(true);
			const toogleCol5 = ref(true);
			const toogleCol6 = ref(true);
			const toogleCol7 = ref(true);
			const toogleCol8 = ref(false);
			const toogleCol9 = ref(true);
			const toogleCol10 = ref(true);
			const toogleCol11 = ref(true);
			const toogleCol12 = ref(true);
			const toogleCol13 = ref(false);
			const toogleCol14 = ref(false);
			const menucol = ref(true);

			return { menucol, toogleCol1, toogleCol2, toogleCol3, toogleCol4, toogleCol5, toogleCol6, toogleCol7, toogleCol8, toogleCol9, toogleCol10, toogleCol11, toogleCol12, toogleCol13, toogleCol14 };
		},
	};
</script>

<style scoped>
	.minititles {
		font-weight: 700;
		font-size: 7px;
		color: #c4c4c4;
	}

	tr:nth-child(even) {
		@apply bg-gray-50;
	}

	tr:hover {
		@apply bg-blue-50;
		@apply text-bluedemon-400;
		border-width: 2px;
		border-color: rgba(239, 246, 255, var(--tw-bg-opacity));
	}

	tr:hover span {
		@apply text-bluedemon-500;
		font-weight: 900;
	}

	tr {
		border-width: 2px;
		border-color: transparent;
	}

	.maxh {
		max-height: 71vh;
	}
</style>
