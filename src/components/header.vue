<template>
  <div class="container-header">
      <a href="/"><img class="main-logo" src="../assets/1200px-Movietime.svg.png"></a>
      <div class="input-con">
        <!-- <input type="text" placeholder="Search your favorite movie here"/> -->
        <!-- <img class="src-logo" src="../assets/55369.png"> -->
        <Autocomplete :source="[{id:1,name:'Avengers: Endgame (2019)'},{id:2,name:'Avengers: Firstgame'}]"
                      placeholder="Search your favorite movie here"
                      input-class="autocomplete"
                      @selected="goto"></Autocomplete>
      </div>
      <div class="con-head-button">
        <button v-on:click="switchon">Category</button>
        <button>Login</button>
        <button>Get Started</button>
      </div>

       <div class="category-popup" v-if="flag">
          <button>Action</button>
          <button>Horror</button>
          <button>Commedy</button>
          <button>Drama</button>
          <button>Romantic</button>
          <button>Colosal</button>
          <button>Thriler</button>
          <button>Adventure</button>
          <button>Fantasy</button>
          <button>Animation</button>
          <button>Family</button>
          <button>Other</button>
      </div>
  </div>
  
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'

export default {
    name: 'headerpage',
    components: {
        Autocomplete
    },
    props: {
     flag: {
            type: Boolean,
            default:false
     }
    },
    methods: {
        switchon: function(){
           if(this.flag == false){
               return this.flag = true
           }else{
               return this.flag = false
           }
        },
        goto: function(){
            window.location.href = '/detail';
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-header{
        background-color:#007aff;
        padding: 32px 0px;
        position: relative;
    }

    .main-logo{
        height:50px;
        width:100px;
        cursor: pointer;
        vertical-align:middle;
    }

    .src-logo{
        height: 17px;
        width: 17px;
        position: absolute;
        right: 25px;
        top: 17px;
        cursor: pointer;
    }
    
    .input-con{
        display: inline-block;
        width: 70%;
        position: relative;
        vertical-align:middle;
    }

    .input-con input{
        margin:0 30px;
        display:inline-block;
        height: 40px;
        border-radius: 8px;
        width: 90%;
        font-size: 16px;
        padding: 3px 25px;
    }

    .con-head-button{
        display: inline-block;
        vertical-align:middle;
    }   

    .con-head-button button{
        margin-right:10px;
        color:white;
        display:inline-block;
        background: transparent;
        border: none;
        font-size: 20px;
        cursor:pointer;
        outline:none;
    }

    .con-head-button button:last-child{
        border:1px solid white;
        border-radius:5px;
        padding:5px;
        font-weight:bold;
    }

    .category-popup{
        background: #007aff;
        padding: 25px 15px;
        margin-top: 42px;
        text-align: center;
        position: absolute;
        width: 100%;
        z-index: 99;
        /* display:none; */
    }

    .category-popup button{
        border:none;
        outline:none;
        background:transparent;
        color:white;
        font-size:22px;
        margin-right:15px;
        display:inline-block;
        cursor: pointer;
    }

    .autocomplete{
        margin:0 30px;
        display:inline-block;
        height: 40px;
        border-radius: 8px;
        width: 90%;
        font-size: 16px;
        padding: 3px 25px;
    }
</style>

<style>
.autocomplete__box{
    height:40px!important;
    padding: 3px 15px!important;
    font-size:16px;
}

.autocomplete__icon {
    height: 14px;
    width: 14px;
    right: 32px;
    position: absolute;
}

.autocomplete__results{
    width:94.5%!important;
    background:#007aff!important;
    color:white!important;
    font-size:26px!important;
    top:85px!important;
}

.autocomplete__results__item{
    border-bottom: 1px solid white!important;
    padding: 10px!important;
}
</style>
