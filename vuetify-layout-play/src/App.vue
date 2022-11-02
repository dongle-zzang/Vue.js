<template>
<v-app>
  <div class="container">

    <v-row>
      <v-col cols="12">
        <v-chip-group
          multiple
          active-class="primary--text"
        >
          <v-chip
            v-for="tag in tags"
            :key="tag"
          >
            {{ tag }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-hover v-slot="{ hover }">
        <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 2" style="padding: 2rem; height:230px">
          <strong style="font-size:2rem;">Delivery</strong><p style="color:#999; width: 200px;" class="mt-1">The world is big and there are many restaurants</p>
        </v-card>
        </v-hover>
      </v-col>
      <v-hover v-slot="{ hover }">
      <v-col cols="6">
        <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 2" style="padding: 2rem; height:230px">
          <strong style="font-size:2rem;">Packaging</strong><p style="color:#999; width: 230px;" class="mt-1">If it's a nearby store I'm going to pick up my food myself</p>
        </v-card>
      </v-col>
      </v-hover>
    </v-row>
    <v-row>
      <v-col>
        <v-hover v-slot="{ hover }">
        <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 2" style="text-align:center;" class="py-10">
          <strong>Live Shopping</strong>
        </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
        <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 2" style="text-align:center;" class="py-10">
          <strong>Gift</strong>
        </v-card>
        </v-hover>
      </v-col>
      <v-col>
        <v-hover v-slot="{ hover }">
        <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 5 : 2" style="text-align:center;" class="py-10">
          <strong>Menus</strong>
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <!-- Slide Section -->
        <v-carousel
          cycle
          height="200"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2">
                  Ad {{ slide }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn-toggle
          v-model="icon"
        >
          <v-btn value="left" style="width:47.7%">
            <span class="hidden-sm-and-down">Points</span>
          </v-btn>

          <v-btn value="center" style="width:47.7%">
            <span class="hidden-sm-and-down">Coupon Box</span>
          </v-btn>

          <v-btn value="right" style="width:47.7%">
            <span class="hidden-sm-and-down">Gift Box</span>
          </v-btn>

          <v-btn value="justify" style="width:47.7%">
            <span class="hidden-sm-and-down">Wishlist</span>
          </v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

  </div>
</v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    tags: [
        '# Get coupons',
        '# Sweet home moods food',
        '# A lot of reorders',
        '# More recommended',
        '# Sales',
        '# Desserts',
        '# Chinese food',
        '# Pasta',
        '# Korean food',
        '# No delivery tip',
        '# Fast packaging',
        '# IDK What to add more now',
        '# Goona looking cool',
        '# OFC when its long or alot',
        '# The fact that the time flows fast',
        '# But not when I am working',
        '# They all look tired',
        '# I feel so sad',
        '# They even worked till 12AM last night',
        '# And there is nothing I can help',
        '# Which is so sad',
      ],
      colors: [
          'red lighten-4',
          'pink lighten-4',
          'purple lighten-4',
          'deep-purple lighten-4',
          'indigo lighten-4',
        ],
        slides: [
          '1',
          '2',
          '3',
          '4',
          '5',
        ],
  }),
}
</script>
<style>
.container{
  width: 800px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.v-card {
  transition: .3s;
}
</style>
