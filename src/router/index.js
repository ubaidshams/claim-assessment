// import ClaimAssessmentVue from "@/views/ClaimAssessment.vue";
import Vue from "vue";
import VueRouter from "vue-router";
import ClaimAssessment from '../views/ClaimAssessment.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: ClaimAssessment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
