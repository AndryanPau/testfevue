<template>
  <div class="container-detailpage">
    <headerpage/>
    
    <div class="card-container-news">
        <img src="../assets/avenger.jpg">
        <div class="detail-news">
            <p class="title-news">Avengers: Endgame (2019)</p>
            <p class="date-news">2019</p>
            <img src="../assets/star.png"> 
            <img src="../assets/star.png"> 
            <img src="../assets/star.png"> 
            <span class="paragraf-news">After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</span>
        </div>
    </div>

    <div class="con-content">
        <h1>WATCH TRAILER</h1>
        <iframe src="https://www.youtube.com/embed/TcMBFSGVi1c"></iframe>
    </div>

    <div class="con-content">
        <h1>USER REVIEW</h1>
        <div class="card-user">
              <p class="user-name">Edwards Colin</p>
              <p class="user-date">Jun, 25 2019</p>
              <img src="../assets/star.png"> 
              <p class="user-comment">After the devastating events of Avengers: Infinity War, 
                      the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of 
                      remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and 
                      restore order to the universe once and for all, no matter what consequences may be in store.
                      </p>
              <div class="likeimg">
                  <img src="../assets/like.png">
                  <img src="../assets/dislike.png">
              </div>
          </div>

          <div class="card-user">
              <p class="user-name">Edwards Colin</p>
              <p class="user-date">Jun, 25 2019</p>
              <img src="../assets/star.png"> 
              <p class="user-comment">After the devastating events of Avengers: Infinity War, 
                      the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of 
                      remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and 
                      restore order to the universe once and for all, no matter what consequences may be in store.
                      </p>
              <div class="likeimg">
                  <img src="../assets/like.png">
                  <img src="../assets/dislike.png">
              </div>
          </div>

           <div class="card-user">
              <p class="user-name">Edwards Colin</p>
              <p class="user-date">Jun, 25 2019</p>
              <img src="../assets/star.png"> 
              <p class="user-comment">After the devastating events of Avengers: Infinity War, 
                      the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of 
                      remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and 
                      restore order to the universe once and for all, no matter what consequences may be in store.
                      </p>
              <div class="likeimg">
                  <img src="../assets/like.png">
                  <img src="../assets/dislike.png">
              </div>
          </div>
    </div>

  <footerpage/>       
  </div>
</template>


<script>
import headerpage from './header.vue'
import footerpage from './footer.vue'

export default {
  name: 'detailpage',
  props: {
    
  },
   components: {
    headerpage,
    footerpage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .container-detailpage{
        position: relative;
    }

    .con-content{
        position: relative;
        padding: 50px 30px;
        text-align:center;
    }

    .con-content h1{
        color:black;
        font-weight:bold;
        font-size:24px;
        margin-bottom:30px;
        text-align:center;
    }

    .card-container-news{
        padding:10px 50px;
        width:100%;
        text-align:left;
        display: inline-block;
        margin-right:10px;
        margin-bottom:10px;
        margin-top:50px;
    }

    .card-container-news img{
        width:350px;
        height:550px;
        cursor: pointer;
        border-radius:5px;
    }

    .detail-news{
        margin-left:10px;
        position: relative;
        display: inline-block;
        vertical-align:top;
        max-width:55%;
        overflow: hidden;
    }

    .detail-news p{
        margin-top:0;
        margin-bottom:10px;
    }

    .detail-news img{
        width:15px;
        height:15px;
    }

    .title-news{
        color:black;
        font-weight:bold;
        font-size:26px;
    }

    .date-news{
        color:lightblue;
        font-size:20px;
        font-weight:bold;
        display: inline-block;
        margin-right:10px;
    }

    .paragraf-news{
        font-size:18px;
        display:block;
    }

    .card-user{
        border-radius:5px;
        background-color:rgba(128, 128, 128,0.1);
        padding:10px;
        text-align:left;
        width:100%;
        overflow: hidden;
        display: inline-block;
        margin-right:10px;
        margin-bottom:15px;
    }

    .card-user p{
        margin:5px 0;
    }

    .card-user img{
        width:15px;
        height:15px;
    }

    iframe{
        width:100%;
        height:550px;
    }

    .likeimg{
        position: relative;
        text-align:right;
    }

    .likeimg img{
        width:25px;
        height:25px;
        margin-right:15px;
        cursor: pointer;
    }

    .user-name{
        font-weight:bold;
        font-size:20px;
    }

    .user-date{
        font-size:18px;
    }

    .user-comment{
        font-size:16px;
    }
    
</style>
