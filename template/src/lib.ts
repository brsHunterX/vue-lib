import ComponentA from "@/components/ComponentA.vue";
import ComponentB from "@/components/ComponentB.vue";

export { ComponentA, ComponentB };

// import { VueConstructor } from "vue";

// const Components: Record<string, VueConstructor> = {
//   ComponentA,
//   ComponentB
// };

// const Install: any = (Vue: VueConstructor) => {
//   Object.keys(Components).forEach((component) => {
//     Vue.component(component, Components[component]);
//   });
// };

// auto install
// if (typeof window !== "undefined" && window.Vue) {
//   Install(window.Vue);
// }

// export default Install;
