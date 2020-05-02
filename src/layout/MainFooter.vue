<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https:///blog.creative-tim.com">
                            Blog
                        </a>
                    </li>
                    <li>

                        <router-link class="nav-item nav-link" to="/license">
                            License
                        </router-link>

                    </li>
                </ul>
            </nav>
            <div class="copyright">
                &copy; {{year}}, Designed by
                <a href="https:///www.invisionapp.com" target="_blank">Invision</a>. Coded by
                <a href="https://github.com/Luazzo" target="_blank">Luazzo</a> and
                <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
            </div>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
