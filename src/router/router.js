import { createWebHistory, createRouter } from "vue-router";
import audiobooksList from "../components/audiobooksList";
import audiobooksHome from "../components/audiobooksHome";
import UserLogin from "../components/UserLogin";

const routes = [
   {
        path: "/audiobooks",
        name: "audiobooksList",
        component: audiobooksList
  },
  {
        path: "/audiobooksHome",
        name: "audiobooksHome",
        component: audiobooksHome
  },
  {
        path: "/login",
        name: "UserLogin",
        component: UserLogin
  },
//   {
//     path: "/add",
//     name: "add",
//     component: () => import("./components/AddTutorial")
//   }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;