<template>
    <v-app>
      <v-card>
        <v-layout>
          ///
          <v-system-bar color="primary">
            <v-icon class="ms-2" icon="mdi-wifi-strength-4"></v-icon>
          <v-icon class="ms-2" icon="mdi-signal-cellular-outline"></v-icon>
            <v-icon class="ms-2" icon="mdi-battery"></v-icon>
            <span class="ms-2">08:30</span>
          </v-system-bar>
          <!-- app-bar -->
          <v-app-bar
            color="teal-darken-4"
            image="https://picsum.photos/1920/1080?random"
          >
            <template v-slot:image>
              <v-img
                gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
              ></v-img>
            </template>
  
            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title>Title</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>
          <!-- navigation-drawe -->
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
          >
            <v-list-item
              prepend-avatar="\assets\images\ภาพหน้าจอ (71).png"
              title="John Leider"
              nav
            >
              <template v-slot:append>
                <v-btn
                  icon="mdi-chevron-left"
                  variant="text"
                  @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
              
              <v-list-item
                prepend-icon="mdi-home-city" 
                title="Main"
                value="main"
                @click="main"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-plus"
                size="x-large"
                title="Add information"
                value="add"
                @click="add"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-access-point"
                title="Dashboard"
                value="dashboard"
                @click="dashboard"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-archive"
                title="Contact"
                value="contact"
                @click="contact"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-account"
                title="About"
                value="account"
                @click="about"
              ></v-list-item>
              <v-list-item
                prepend-icon="mdi-close-circle"
                title="LOGOUT"
                value="users"
                @click="logOut"
              ></v-list-item>
              
            </v-list>
          </v-navigation-drawer>
          <!-- <v-main style="height: 650px"></v-main> -->
          <v-main >
           <NuxtPage></NuxtPage>
            <!-- Main Content -->
          </v-main>
          <!--  -->
  
          <v-bottom-navigation v-model="value" :bg-color="color" mode="shift">
            <v-btn>
              <v-icon>mdi-television-play</v-icon>
  
              <span>Video</span>
            </v-btn>
  
            <v-btn>
              <v-icon>mdi-music-note</v-icon>
  
              <span>Music</span>
            </v-btn>
  
            <v-btn>
              <v-icon>mdi-book</v-icon>
  
              <span>Book</span>
            </v-btn>
  
            <v-btn>
              <v-icon>mdi-image</v-icon>
  
              <span>Image</span>
            </v-btn>
          </v-bottom-navigation>
        </v-layout>
      </v-card>
    </v-app>
  </template>
  <script>
  export default {
    data() {
      return {
        drawer: true,
        rail: true,
      };
    },
    methods: {
      main(){
        this.$router.replace("/main");
      },
      dashboard(){
        this.$router.replace("/dashboard");
      },
      contact(){
        this.$router.replace("/contact");
      },
      about(){
        this.$router.replace("/about");
      },
      add(){
        this.$router.replace("/datatable");
      },
      logOut() {
        window.sessionStorage.clear();
        this.$router.replace("/login");
      },
    },
  };
  </script>