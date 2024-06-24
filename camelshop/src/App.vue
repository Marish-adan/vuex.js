   <script setup>
import Navbar from "./components/Navbar.vue"
</script>
 <template>
   <V-app>
    <Navbar/>
        <V-main>
        <router-view></router-view>
    </V-main>   
    </V-app>
    
</template>
