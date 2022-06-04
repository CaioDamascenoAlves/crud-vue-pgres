<template>
  <div class="conteiner-flex">
	  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		  <a class="navbar-brand order-md-last">CRUD Vue.Js + PostgreSQL + Node.js + Azure</a>
	  		<ul class="navbar-nav me-auto">
				  <li class="nav-item">
					  <router-link class="nav-link" to="/">Create New Called</router-link>
				  </li>
				  <li class="nav-item">
					  <router-link class="nav-link" to="/list-called">List All Called</router-link>
				  </li>
			  </ul>
	  </nav>
	  <div class="container mt-5">
		  <router-view></router-view>
	  </div>
  </div>
</template>