
<script>

  export default {

    data() {

      return {

          image: 'public/images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg',

          url: 'https://www.vuejs.org/',

          stockDetails : [

              {

                  itemNumber: 1,

                  itemName : "Sweets",

                  itemPrice : 5,

                  itemQuantity : 30,

                  itemImage: 'public/Images/customerbox-aXq1oCCjlVM-unsplash.jpg'

              },

              {

                  itemNumber: 27466,

                  itemName : "Lollipop",

                  itemPrice : 10,

                  itemQuantity : 4,

                  itemImage: 'public/Images/jamie-albright-AHF_ZktTL6Q-unsplash.jpg'

              },
              
                                                 
              
               

          ],

        }

    },

    methods() {

      // we shall add our functions here

    },
    computed(){

      //we use this when working with forms

    }

  }

</script>

<template>
<v-card
  class="mx-auto"
  width="1000"
>


  <v-carousel>
    <v-carousel-item
      src="public/images/customerbox-aXq1oCCjlVM-unsplash (1).jpg"
      cover
    ></v-carousel-item>
  
    <v-carousel-item
      src="public/images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg"
      cover
    ></v-carousel-item>
  
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>
</v-card>


<v-card align="center">
  <v-card-item>
   <v-card-title>WELCOME TO camelShop HOME OF CONFECTIONERIES</v-card-title>

   <v-card-subtitle>WE RESPECT YOU AND YOUR NEEDS</v-card-subtitle>
 </v-card-item>

 <v-card-text>
  Welcome to our online candy kiosk, where sweet dreams come true with just a click! 
  Step into a wonderland of sugary delights as you browse through our virtual aisles
   filled with a rainbow of candies from around the world Step into the whimsical world of Sweet
    Delights Candy Shop, where every visit is a journey into sugary bliss. Nestled in the heart of town,
     this charming shop beckons with its vibrant display of candies in every color and flavor imaginable..
 </v-card-text>
62</v-card>
  
      <h3 class="text-center">What our customers say</h3>

      <v-divider></v-divider>
<v-row>
  <v-col cols="12" md="4">
    <v-card
      subtitle="FROM MINIAPOLIS AMERICA"
      text="since i came to kenya i have been looking for a brilliant shop as this one, cameshop is the best"
      title="good customer service"
    ></v-card>
    </v-col>

    
  <v-col cols="12" md="4">
    <v-card>
      <template v-slot:title>
        fast delivery
      </template>
      <template v-slots:subtitle>
        Maryam Adan
      </template>
      <template v-slots:text>
        i received my order on time,will definetly be ordering again
      </template>
      </v-card>
      <v-card>
      <v-card-item>
        <v-card-title> wide variety</v-card-title>
        <v-card-subtitle>wangari mathai</v-card-subtitle> 
      
      </v-card-item>
    <v-card-text>
      ilove the diversity in the option, i got some candy i haven't seen in normal shops.
      </v-card-text>
    </v-card>  
  </v-col>
</v-row>
    </template>


