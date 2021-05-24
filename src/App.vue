<template>
	<div>
		<div id="nav">
			<router-link to="/">Stock</router-link> | <router-link to="/about">About</router-link> |
			<router-link to="/materiales">materiales</router-link>
		</div>
		<router-view v-slot="{ Component }">
			<transition mode="" enter-active-class="animate__animated animate__slideInRight" leave-active-class="animate__animated animate__slideOutLeft">
				<component :is="Component" class="absolute" />
			</transition>
		</router-view>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

	#app {
		font-family: "Poppins", sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 5px;
		z-index: auto;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	/* width */
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		@apply bg-bluedemon-200;
		border-radius: 50px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		@apply bg-bluedemon-500;
	}

	/* ********* ANIMACION ************ */
</style>
