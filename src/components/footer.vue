<template>
  <div class="container-footer">

     <div class="con-section-footer">
         <p class="title">Category</p>
         <p>Action</p>
         <p>Drama</p>
         <p>Comedy</p>
         <p>Romantic</p>
         <p>Colosal</p>
         <p>Thirller</p>
         <p>Other</p>
     </div>

     <div class="con-section-footer">
         <p class="title">About Us</p>
         <p>About Us</p>
         <p>FAQ</p>
         <p>Term & Condition</p>
         <p></p>
     </div>

     <div class="con-section-footer">
         <p class="title">Follow Us</p>
         <div class="con-obj-follow">
             <img class="icon-follow" src="../assets/fb.png"><p class="text-follow">Movie.time</p>
         </div>
         <div class="con-obj-follow">
             <img class="icon-follow" src="../assets/twiter.png"><p class="text-follow">Movie.time</p>
         </div>
         <div class="con-obj-follow">
            <img class="icon-follow" src="../assets/insta.png"><p class="text-follow">Movie.time</p>
         </div>
     </div>

     <div class="con-section-footer">
         <p class="title">Get Our Apps</p>
         <img class="icon-appstore" src="../assets/appstore.png">
     </div>

  </div>
</template>


<script>
export default {
  name: 'footerpage',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .container-footer{
        background-color:#007aff;
        padding: 32px 87px;
        position: relative;
    }

    .con-section-footer{
        display:inline-block;
        vertical-align:top;
        width:25%;
    }

    .con-section-footer p{
        color:white;
        cursor: pointer;
    }

    .title{
        color:white;
        font-weight:bold;
        cursor:default!important;
    }

    .icon-follow{
        height:23px;
        width:25px;
        display:inline-block;
        vertical-align: top;
        margin-right: 10px;
        cursor: pointer;
    }

    .icon-appstore{
        height:100%;
        width:60%;
        cursor: pointer;
    }

    .text-follow{
        display: inline-block;
        vertical-align: top;
        margin-top: 3px;
    }

    .con-obj-follow{
        display:block;
    }

    
</style>
