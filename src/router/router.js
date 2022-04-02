import { createWebHistory, createRouter } from "vue-router";
import audiobooksList from "../components/audiobooksList";
import audiobooksHome from "../components/audiobooksHome";

const routes = [
   {
        path: "/",
        name: "audiobooksList",
        component: audiobooksList
  },
  {
        path: "/",
        name: "audiobooksHome",
        component: audiobooksHome
    },
  {
    path: "/audiobooks",
    name: "audiobooksList",
    component: audiobooksHome
  }
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