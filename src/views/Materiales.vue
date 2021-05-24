<template>
	<div>
		<div class="w-full">
			<div class="flex relative flex-row justify-start items-center ">
				<button class="mr-4 z-50 bg-gris-400 rounded-full w-8 h-8 flex items-center justify-center my-2 text-gris-800 focus:outline-none hover:bg-bluedemon-200 hover:text-bluedemon-400">
					<span class="material-icons">arrow_back</span>
				</button>
				<seccion seccion="ZIC"></seccion>
				<clasificacion clasificacion="FF&E" class="mr-4"></clasificacion>
				<qr></qr>
				<loader></loader>
			</div>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 divide-x divide-gris-300 rounded-xl">
			<!-- columna 1 -->
			<div class="bg-white py-4">
				<imagenes :img="['https://www.maphg.com/america/planner/equipos/EQUIPO_ID_21452_725.jpg', 'https://www.maphg.com/america/planner/equipos/EQUIPO_ID_21452_601.jpg', 'https://www.maphg.com/america/planner/equipos/EQUIPO_ID_21452_485.jpg', 'https://www.maphg.com/america/planner/equipos/EQUIPO_ID_21452_153.jpg']"></imagenes>
			</div>
			<!-- columna 2 -->
			<div class="bg-white">
				<div class="flex flex-row justify-center items-center flex-wrap p-4">
					<h1 class="font-semibold text-base">Descripcion por defecto de 2bend /</h1>
					<h1 class="font-semibold text-base">Descripcion sstt</h1>
				</div>
				<div class="flex flex-col justify-center items-start text-xs p-3 w-full">
					<h1 class="text-sm font-semibold text-gris-600 self-center">Detalles</h1>
					<datos dato="Seccion" valor="ZIC"></datos>
					<datos dato="Area" valor="Calderas"></datos>
					<datos dato="Cod2Bend" valor="3545645645"></datos>
					<datos dato="Descripción SSTT" valor="Descripcion pro parte de mantenimiento"></datos>
					<datos dato="Marca" valor="Caterpilar"></datos>
					<datos dato="Modelo" valor="sdf546sfd6s5df65"></datos>
					<datos dato="Serie" valor="244654564134"></datos>
					<datos dato="Referencia" valor="fed5s5sxxx8"></datos>
					<datos dato="Caracteristicas" valor="media de 1/8 cabezal negro punta de diamalasj dlkasj dlks"></datos>
					<datos dato="Subfamilia SSTT" valor="Herramientas"></datos>
					<grupos class="py-2" :etiquetas="['Equipo', 'Mecánica ', 'Electricidad ', 'Electrónica  ', 'Compresores  ', 'Intercambiardores', 'Quemadores ', 'Cuerpo Caldera', 'Acumuladores ', 'Motor Grupos Electrógenos', 'Alternador']"></grupos>
					<datos2 dato="Rotación" valor="Alta"></datos2>
					<datos2 dato="Stock Teorico almacen" valor="2555"></datos2>
					<datos2 dato="Stock Real almacen" valor="2555"></datos2>
					<datos2 dato="Coste unitario" valor="2555"></datos2>
					<datos2 dato="Coste almacen teorico" valor="2555"></datos2>
					<datos2 dato="Coste almacen real" valor="2555"></datos2>
					<datos2 dato="Fecha de instalación" valor="14/11/2021"></datos2>
					<datos2 dato="Tiempo de vida útil" valor="5 años"></datos2>
					<datos2 dato="Fecha estimada de reemplazo" valor="14/11/2026"></datos2>
					<h1 class="text-sm font-semibold text-gris-600 self-center py-2">Información adicional</h1>
					<datos2 dato="Info extra" valor="informacion adicional"></datos2>
				</div>
			</div>
			<!-- columna 3 -->
			<div class="bg-white text-xs px-4 pt-20">
				<h1 class="text-sm font-semibold text-gris-600 pb-2">Ranking</h1>
				<div class="flex flex-row w-full justify-center mb-4 items-center">
					<span class="material-icons text-yellow-400">star</span>
					<span class="material-icons text-yellow-400">star</span>
					<span class="material-icons text-yellow-400">star</span>
					<span class="material-icons text-gray-400">star</span>
					<span class="material-icons text-gray-400">star</span>
					<h1 class="ml-4 text-bluedemon-400">25 valoraciones</h1>
				</div>
				<h1 class="text-sm font-semibold text-gris-600 pb-2">Comentarios</h1>
				<comentarios autor="Eduardo Meneses" comentario="Aqui va el comentario" fecha="14-05-2021"></comentarios>
				<h1 class="text-sm font-semibold text-gris-600 pb-2">Cotizaciones</h1>
				<cotizaciones nombrearchivo="archivo.doc" extencion="pdf" usuario="Eduardo Meneses" fecha="14/11/2021" monto="2254" marca="Rolex"></cotizaciones>
			</div>
		</div>
	</div>
</template>

<script>
	import Clasificacion from "../components/Clasificacion.vue";
	import Comentarios from "../components/Comentarios.vue";
	import Cotizaciones from "../components/Cotizaciones.vue";
	import Datos from "../components/Datos.vue";
	import Datos2 from "../components/Datos2.vue";
	import Grupos from "../components/Grupos.vue";
	import Imagenes from "../components/Imagenes.vue";
	import Imagenes2 from "../components/Imagenes2.vue";
	import Loader from "../components/Loader.vue";
	import Qr from "../components/Qr.vue";
	import Rotacion from "../components/Rotacion.vue";
	import Seccion from "../components/Seccion.vue";
	export default {
		components: { Imagenes, Datos, Imagenes2, Seccion, Clasificacion, Rotacion, Grupos, Datos2, Comentarios, Cotizaciones, Qr, Loader },
		setup() {
			function move() {
				var elem = document.getElementById("myBar");
				var width = 1;
				var id = setInterval(frame, 100);
				function frame() {
					if (width >= 100) {
						clearInterval(id);
					} else {
						width++;
						elem.style.width = width + "%";
					}
				}
			}
			return { move };
		},
	};
</script>

<style scoped>
	.barra {
		width: 0.001%;
	}
</style>
