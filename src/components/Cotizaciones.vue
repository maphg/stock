<template>
	<div class="w-full flex flex-col justify-center items-center mb-4">
		<div class="bg-gris-100 truncate hover:bg-gris-200 flex flex-row items-center justify-between w-auto p-2 cursor-pointer shadow-sm rounded-lg">
			<img :src="url" class="w-10" alt="X" />
			<div class="flex flex-col justify-center items-start ml-2">
				<h1 class="text-bluedemon-400 w-32 text-left truncate">{{ nombrearchivo }}</h1>
				<h1 class="w-36 truncate text-left">{{ usuario }}</h1>
				<h1 class="text-xxs">{{ fecha }}</h1>
			</div>
			<div class="flex flex-col justify-center items-center">
				<h1 class="text-xxs font-bold leading-none">USD</h1>
				<h1 class="text-lg leading-none">${{ monto }}</h1>
			</div>
			<div class="flex flex-col justify-center items-center px-2">
				<h1 class="text-lg uppercase w-24 truncate">{{ marca }}</h1>
			</div>
		</div>
	</div>
</template>

<script>
	import { ref } from "vue";
	export default {
		props: {
			nombrearchivo: {
				type: String,
				required: true,
			},
			extencion: {
				type: String,
				required: true,
			},
			usuario: {
				type: String,
				required: true,
			},
			fecha: {
				type: String,
				required: true,
			},
			monto: {
				type: String,
				required: true,
			},
			marca: {
				type: String,
				required: true,
			},
		},
		setup(props) {
			const dir = ref(props.extencion);

			const extenciones = {
				pdf: "https://www.maphg.com/america/svg/pdf.svg",
				doc: "https://www.maphg.com/america/svg/doc.svg",
				docx: "https://www.maphg.com/america/svg/doc.svg",
				csv: "https://www.maphg.com/america/svg/xls.svg",
				xls: "https://www.maphg.com/america/svg/xls.svg",
				xlsx: "https://www.maphg.com/america/svg/xls.svg",
				ppt: "https://www.maphg.com/america/svg/ppt.svg",
				pptx: "https://www.maphg.com/america/svg/ppt.svg",
				gif: "https://www.maphg.com/america/svg/img.svg",
				jpg: "https://www.maphg.com/america/svg/img.svg",
				png: "https://www.maphg.com/america/svg/img.svg",
				zip: "https://www.maphg.com/america/svg/zip.svg",
				rar: "https://www.maphg.com/america/svg/zip.svg",
			};
			const iconoDefault = "https://www.maphg.com/america/svg/txt.svg";

			const url = extenciones[dir] || iconoDefault;
			console.log(url);

			return { url };
		},
	};
</script>

<style></style>
