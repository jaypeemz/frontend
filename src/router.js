import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/audiobooksHome",
    name: "audiobooksHome",
    component: () => import("./components/audiobooksHome")
  },
  {
    path: "/audiobooks",
    name: "audiobooksList",
    component: () => import("./components/audiobooksList")
  }
//   ,
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