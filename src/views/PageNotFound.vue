<template>
  <main>
    <div class="banner contactspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component></nav-bar-component>
          </div>
        </div>
        <h1 class="title-big">Oops! Page not found</h1> 
      </div>
    </div>
    <section class="notFound ">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-lg-6 offset-0 offset-lg-3">
              <p class="notFound__text text-center">please! return to the main page</p>
          </div>          
        </div>
        
      <router-link to="/" class="return_link">Return</router-link>
      </div>
    </section>
  </main>
</template>

<script>


export default {
  
}
</script>

<style>
.notFound__text {
    margin-top: 20px;
    margin-bottom: 20px;
    text-transform: uppercase;
}
.return_link{
  display: block;
  margin: 0 auto;
  width: 100px;
  text-transform: uppercase;
  color: #000;
  border: 1px solid #000;
  text-align: center;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 40px;
}
.return_link:hover{
  text-decoration: none;
  color: 000;
}

</style>