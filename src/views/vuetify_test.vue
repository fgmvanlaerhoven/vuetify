<template>
  <div class="test">
    <h1>Testpage !</h1>
    <p class="red white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi natus numquam nemo sunt molestiae vel! Aliquid fugit architecto nihil, voluptatum quaerat sequi possimus nostrum illo suscipit repudiandae, ratione, repellendus placeat.</p>
    <p class="pink lighten-4 red--text text--darken-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quam dicta, illum soluta omnis ab, animi fuga deserunt hic maiores illo repellat aperiam! Iste, numquam sint voluptates perferendis maxime nobis?</p>
    <h1 class="display-4">Massive Display</h1>
    <h1 class="display-1">Smaller Display</h1> 
    <p class="headline">This is a headline</p> 
    <p class="caption">This a very small text</p>  

    <br />
    
    <v-btn class="pink white-text">Click me</v-btn>
    <v-btn depressed color="pink">click me</v-btn>
    <v-btn flat color="pink">click me</v-btn>

    <br />

    <v-btn depressed class="pink white--text">
    <v-icon>account_balance</v-icon>
    <v-icon>calerder_today</v-icon>
    </v-btn>

    <v-btn depressed class="pink white--text">
    <v-icon left>email</v-icon>
    <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text">
    <v-icon left small>email</v-icon>
    <span>email me</span>
    </v-btn>

    <v-btn depressed large class="pink white--text">
    <span>email me</span>
    <v-icon right large>email</v-icon>        
    </v-btn>      

    <v-btn fab depressed small dark color="purple">
    <v-icon>favorite</v-icon>        
    </v-btn>   

    <br />
    <!-- Visibility on large, medium and small screens -->
    <v-btn class="hidden-md-and-down">click me</v-btn> 
    <br />      
    <v-btn class="hidden-md-and-up">Click me too</v-btn> 
    <br />      
    <v-btn class="hidden-sm-only">Click small only</v-btn>    
    <br />  

  </div>
</template>

<script>

export default {

}
</script>