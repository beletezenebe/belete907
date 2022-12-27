<script>
    import { textinlogin } from "../files/hompage.js"
    export let form;
    export let data;

  $: i=0
   $: textapper = textinlogin[i].text

  const interval = setInterval(function() {
  
   if(textinlogin.length-1 > i){
    i++
   }else{
    
    i=0
   }

 }, 5000);
 
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

{#if form?.success}
  <!-- this message is ephemeral; it exists because the page was rendered in
       response to a form submission. it will vanish if the user reloads -->
  <p>Successfully logged in! Welcome back, {data.user.name}</p>
{/if}
	<div class=" bg-image "
 >
<div class="container px-sm-2 px-md-4 py-sm-2">
  <div class="row align-items-center gx-5">
    
    <div class="col-md-5 col-sm-12  ">
      <div class="d-flex justify-content-center shadow-lg border-start border-danger border-3 mt-2 ">
       
        
        <div class="px-2 pt-3  bg-light fw-bolder lh-base text-wrap"><p>{textapper.toLocaleUpperCase()}</p></div>
      </div>
      <div class="d-flex justify-content-center mt-3 ">
      	{#each textinlogin as poll (poll.id)}
  	
		
		<div class="c rounded-circle" class:cs="{ i+1 == poll.id}" class:bg-dark="{ i+1 == poll.id}"></div>
		{/each}
      </div>
    </div>
    <div class="col   ">
<!-- //// -->

<div class="container  ">
    
  <form class="bbbb row d-flex d-flex justify-content-center" action="?/login" method="POST">
    
    <div class="col-sm-12 col-md-10 mt-5 pt-2  shadow-lg">
      {#if form?.missing}<p class="error">The email field is required</p>{/if}
           <label for="email" class="form-label fw-bolder">Email</label>
          <input type="email" class="form-control" id="inputEmail4" name="email" value={form?.email ?? ''} placeholder="Enter email">
          <label for="password" class="form-label fw-bolder">Password</label>
          <input type="password" class="form-control" placeholder="Enter Password" name="password" id="inputPassword4">
       
          <div class="col-4 mt-2 " >
            <p class="psw fw-bolder">Forgot <a href="/user/forgetpass">password?</a></p>
          </div>
          <div class="col text-end ">
            <button  class="btn btn-danger shadow-lg ">login</button>
            
          </div>
          <p class="fw-bolder">If you don't have an account register here</p>
         <div class=" d-flex justify-content-end  pb-5 "> <button type="button" class="btn btn-dark shadow-lg ">Regester</button></div>


        
      </div>
  </form>
</div>



         
  
      <!-- /login in end -->
    </div>
  </div>
</div>




</div>




<style>
  .c{
	width:10px;
	height:10px;
	padding:5px;
	margin:5px;
  color:red;
  background-color: red;
}
	.cs{
		padding:10px;
		margin:0px;
   
	}
</style>
