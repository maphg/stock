<template>
	<div class="flex flex-row items-center justify-center pt-4 w-full">
		<input type="search" name="" class="bg-white rounded-l-md shadow py-1 px-2 w-10/12 md:w-1/4 focus:outline-none" placeholder="Buscar..." id="" />
		<input type="submit" value="Ok!" class="py-1 px-2 rounded-r-md shadow cursor-pointer bg-gray-800 text-white" />
	</div>
	<div class="w-full flex flex-row items-center justify-start pt-4">
		<selector :valores="['uno', 'dos']"></selector>
	</div>
	<!-- component -->
	<div class="overflow-x-auto">
		<div class="flex items-center justify-center font-sans overflow-x-auto">
			<div class="w-full">
				<div class="bg-white shadow-md rounded my-6">
					<table class="min-w-max w-full table-fixed text-xxs font-bold text-gray-800 border">
						<thead class="bg-gray-800 text-white leading-8 uppercase">
							<th class="w-52">Cod. 2bend</th>
							<th class="w-52">Descripción SSTT</th>
							<th class="w-36">Seccion/Área</th>
							<th class="w-36">Grupos/Etiquetas</th>
							<th class="w-28">Clasificación</th>
							<th class="w-28">Marca/Modelo</th>
							<th class="w-28">Caracteristicas</th>
							<th class="w-28">Referencia</th>
							<th class="w-28">Rotación</th>
							<th class="w-28">Stock</th>
							<th class="w-28">Coste U.</th>
							<th class="w-28">Coste Almacen</th>
							<th class="w-28">Subfamilia SSTT</th>
							<th class="w-28">Tiempos</th>
						</thead>
						<tbody class="text-gray-600">
							<tr v-for="item in 10" :key="item" class="border-b border-gray-200 divide-x cursor-pointer">
								<td class="py-1 px-1 text-left">
									<div class="flex flex-row items-center justify-start">
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 mr-1 text-indigo-400">2254854</h1>
										<p class="">Remachadora De Palanca. Conjunto Completo Con Maletín Y Depósito Para Recoger Las Espigas. Para Remaches De Ø 3- 6 Mm</p>
									</div>
								</td>
								<td class="py-1 px-1 text-justify">
									<p>Descripcion hecha por el departamento de mantenimiento</p>
								</td>

								<td class="py-1 px-1 text-left uppercase">
									<div class="flex flex-row items-center justify-center">
										<seccion seccion="ZIA"></seccion>
										<p class="">Calderas</p>
									</div>
								</td>
								<td class="py-1 px-1 text-left">
									<div class="flex flex-row flex-wrap items-center justify-start">
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400">Grupo 1</h1>
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400">Grupo X</h1>
										<h1 class="font-bold text-xxs px-1 rounded-sm bg-indigo-100 m-1 text-indigo-400">Grupo X</h1>
									</div>
								</td>
								<td class="py-1 px-1 text-center">
									<clasificacion clasificacion="FF&E"></clasificacion>
								</td>
								<td class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">MARCA</span>
										<h1>Hamilton Beach</h1>
										<span class="minititles">MOD</span>
										<h1>ASD54546A</h1>
									</div>
								</td>
								<td class="py-1 px-1 text-center">
									<h1>Caracteristicas</h1>
								</td>
								<td class="py-1 px-1 text-center">
									<h1>51456165156</h1>
								</td>
								<td class="py-1 px-1 text-left">
									<rotacion rot="ALTA"></rotacion>
								</td>
								<td class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">TÉORICO</span>
										<h1>2355655</h1>
										<span class="minititles">REAL</span>
										<h1>154815</h1>
									</div>
								</td>
								<td class="py-1 px-1 text-center">
									<div class="flex flex-col items-center justify-center">
										<span class="minititles">USD</span>
										<h1>$2355655</h1>
									</div>
								</td>
								<td class="py-1 px-1 text-center">
									<div class="flex flex-col items-start justify-center">
										<span class="minititles">TÉORICO</span>
										<h1>$565653</h1>
										<span class="minititles">REAL</span>
										<h1>$565653</h1>
									</div>
								</td>
								<td class="py-1 px-1 text-center">
									<h1>Herramientas</h1>
								</td>
								<td class="py-1 px-1 text-center">
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
	import Clasificacion from "./Clasificacion.vue";
	import Rotacion from "./Rotacion.vue";
	import Seccion from "./Seccion.vue";
	import Selector from "./Selector.vue";
	export default {
		components: { Seccion, Rotacion, Clasificacion, Selector },
	};
</script>

<style scoped>
	.minititles {
		font-weight: 700;
		font-size: 7px;
		color: #c4c4c4;
	}

	tr:nth-child(even) {
		@apply bg-gray-100;
	}

	tr:hover {
		@apply bg-blue-100;
		@apply text-gray-800;
	}

	tr:hover span {
		@apply text-gray-900;
	}
</style>
