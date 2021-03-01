<template>
	<div class="container">
		<p id="title">
			U.S. Immigration
		</p>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/sources">Sources</router-link> |
			<router-link to="/laws">Laws and Policies</router-link> |
			<router-link to="/agencies">Agencies and Bureaus</router-link> |
			<router-link to="/statuses">Statuses</router-link>
		</div>
		<router-view />
	</div>
</template>

<style>
#title {
	font-family: monospace;
	font-style: italic;
	text-align: center;
	font-size: 3rem;
	line-height: 1;
	margin: 1.25rem;
	--tw-text-opacity: 1;
	color: rgba(220, 38, 38, var(--tw-text-opacity));
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	padding: 30px;
}
#nav a {
	font-weight: bold;
	color: #2a5f94;
}
#nav a.router-link-exact-active {
	color: #32a545;
	font-size: 150%;
}
</style>
