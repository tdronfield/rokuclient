import LoginComponent from "./components/TheLoginComponent.js";
import AllUsers from "./components/TheAllUsersComponent.js";

const router = new VueRouter({
    routes: [
        { path: "/", name: "root", component: LoginComponent },
        { path: "/users", name: "users", component: AllUsers }

    ]
});

(() => {
    const vm = new Vue({
        data: {
            allMovies: []
        },

        created: function(){
            // *** THIS IS OLD CODE FROM BEFORE LOGIN COMPONENT IMPLEMENTED ****
            // a fetch call to grab all our movies from the database
            // fetch("/api/movies")
            //     .then(res => res.json())
            //     .then(data => {
            //         console.table(data);
            //         this.allMovies = data;
            //     })
            //     .catch(err => console.error(err));
            // *** END OLD CODE ***
        },

        methods: {

        },

        components: {
            //moviethumb: TheMovieThumb,
        },

        router
    }).$mount("#app");
})();