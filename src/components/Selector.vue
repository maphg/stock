<template>
	<div class="relative inline-block w-1/3 cursor-pointer md:w-1/12 text-gray-700 md:mr-2 mb-2 md:mb-0 p-1">
		<div class=" text-xxs w-full text-center font-bold flex flex-row justify-start ml-1">
			<h1 class="">{{ texto }}</h1>
		</div>
		<select class=" focus:outline-none w-full h-8 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
			<option v-for="valor in valores" :key="valor">{{ valor }}</option>
		</select>
		<div class="absolute inset-y-0 right-0 mt-4 flex items-center px-2 pointer-events-none">
			<svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			valores: {
				type: Array,
				required: true,
			},
			texto: {
				type: String,
				required: false,
			},
		},
		setup(props) {},
	};
</script>

<style scoped></style>
