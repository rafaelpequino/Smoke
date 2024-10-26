import { p as publicAssetsURL, a as buildAssetsURL } from '../_/renderer.mjs';
import __nuxt_component_0 from './Cheader-GTM1HWcn.mjs';
import __nuxt_component_1 from './Cfooter-DnMEJhZg.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import { M as MembersList } from './members-Baww2w0T.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/devalue/index.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unhead/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/@unhead/shared/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/rafae/OneDrive/Documentos/Dev/Smoke/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$5 = {};
const _imports_0$2 = publicAssetsURL("/img/engineer.jpg");
const _imports_1 = publicAssetsURL("/img/car.jpg");
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-about" }, _attrs))} data-v-67cfa270><div id="inside-main-about" data-v-67cfa270><div class="div-about" data-v-67cfa270><div class="img-about" data-v-67cfa270><img${ssrRenderAttr("src", _imports_0$2)} alt="Imagem gerada por A.I. mostrando um engenheiro construindo um carrinho eletr\xF4nico" data-v-67cfa270></div><div class="text-about" data-v-67cfa270><h3 data-v-67cfa270>ACELERANDO O FUTURO DA TECNOLOGIA</h3><p data-v-67cfa270>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit necessitatibus repellat enim reprehenderit unde amet quasi placeat velit cupiditate id explicabo iste possimus iure voluptatibus similique, vitae optio. Provident!</p></div></div><div class="div-about" data-v-67cfa270><div class="text-about" data-v-67cfa270><h3 data-v-67cfa270>ACELERANDO O FUTURO DA TECNOLOGIA</h3><p data-v-67cfa270>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit necessitatibus repellat enim reprehenderit unde amet quasi placeat velit cupiditate id explicabo iste possimus iure voluptatibus similique, vitae optio. Provident!</p></div><div class="img-about" data-v-67cfa270><img${ssrRenderAttr("src", _imports_1)} alt="Imagem gerada por A.I. mostrando um carrinho eletr\xF4nico" data-v-67cfa270></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MainAbout = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-67cfa270"]]);
const _sfc_main$4 = {
  props: {
    name: { type: String, required: true },
    user: { type: String, required: true },
    srcImg: { type: String, required: true }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterLink = resolveComponent("RouterLink");
  _push(ssrRenderComponent(_component_RouterLink, mergeProps({
    to: "integrantes/" + $props.user,
    class: "member"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="member-img" data-v-dda4c6a5${_scopeId}><img${ssrRenderAttr("src", "img/members/" + $props.srcImg)}${ssrRenderAttr("alt", "Foto do integrante " + $props.name)} data-v-dda4c6a5${_scopeId}></div><h3 data-v-dda4c6a5${_scopeId}>${ssrInterpolate($props.name)}</h3>`);
      } else {
        return [
          createVNode("div", { class: "member-img" }, [
            createVNode("img", {
              src: "img/members/" + $props.srcImg,
              alt: "Foto do integrante " + $props.name
            }, null, 8, ["src", "alt"])
          ]),
          createVNode("h3", null, toDisplayString($props.name), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/sub-components/member.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Member = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-dda4c6a5"]]);
const _sfc_main$3 = {
  data() {
    return {
      MembersList
    };
  },
  components: { Member }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Member = resolveComponent("Member");
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-group" }, _attrs))} data-v-d57c2c56><div id="inside-main-group" data-v-d57c2c56><h2 data-v-d57c2c56>Integrantes</h2><div class="members" data-v-d57c2c56><!--[-->`);
  ssrRenderList($data.MembersList, (member) => {
    _push(ssrRenderComponent(_component_Member, {
      class: "member",
      name: member.name,
      user: member.user,
      srcImg: member.srcImg
    }, null, _parent));
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const MainGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-d57c2c56"]]);
const _sfc_main$2 = {};
const _imports_0$1 = publicAssetsURL("/img/logo_smoke.png");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-home" }, _attrs))} data-v-dd022721><div id="inside-main-home" data-v-dd022721><img${ssrRenderAttr("src", _imports_0$1)} alt="Logo do grupo &#39;Smoke&#39; - Grupo do 2\xBA semestre do curso de Engenharia de Computa\xE7\xE3o do centro universit\xE1rio Senac Santo Amaro" data-v-dd022721><h1 data-v-dd022721>ACELERANDO O FUTURO DA TECNOLOGIA</h1><p data-v-dd022721>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae voluptates, deleniti facilis perferendis ea eius, sed nulla odio numquam reprehenderit nihil labore! Saepe sed non aperiam commodi blanditiis obcaecati!</p><a href="#" data-v-dd022721>Saiba mais</a></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainHome.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MainHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-dd022721"]]);
const _sfc_main$1 = {};
const _imports_0 = "" + buildAssetsURL("full-group.CgzUMN0o.jpg");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-more" }, _attrs))} data-v-ebf6ee7e><div id="inside-main-more" data-v-ebf6ee7e><h2 data-v-ebf6ee7e>Por dentro do Projeto</h2><div class="proj-data" data-v-ebf6ee7e><img${ssrRenderAttr("src", _imports_0)} alt="Imagem exibindo o trabalho por tr\xE1s do projeto" data-v-ebf6ee7e><p data-v-ebf6ee7e>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nemo dolores dolor veniam inventore. Sint neque non deserunt! Recusandae, repellendus voluptatum odit enim esse assumenda soluta dolore doloribus deleniti hic.</p><p data-v-ebf6ee7e>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque vitae nostrum earum unde autem ipsum in alias incidunt nulla necessitatibus omnis nemo repellat rem odio animi veritatis, esse quisquam.</p></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/index/MainMore.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MainMore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ebf6ee7e"]]);
const _sfc_main = {
  methods: {
    scrollToTop() {
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  Data() {
    return {
      array: [
        "Pablo",
        "Isa"
      ]
    };
  },
  components: { Cheader: __nuxt_component_0, MainAbout, MainGroup, MainHome, MainMore, Cfooter: __nuxt_component_1 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_MainHome = resolveComponent("MainHome");
  const _component_MainAbout = resolveComponent("MainAbout");
  const _component_MainGroup = resolveComponent("MainGroup");
  const _component_MainMore = resolveComponent("MainMore");
  const _component_Cfooter = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(`<div id="btn-scroll-top" data-v-a2f02b69><i class="fa-solid fa-chevron-up" data-v-a2f02b69></i></div><main data-v-a2f02b69>`);
  _push(ssrRenderComponent(_component_MainHome, null, null, _parent));
  _push(ssrRenderComponent(_component_MainAbout, null, null, _parent));
  _push(ssrRenderComponent(_component_MainGroup, null, null, _parent));
  _push(ssrRenderComponent(_component_MainMore, null, null, _parent));
  _push(`</main>`);
  _push(ssrRenderComponent(_component_Cfooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a2f02b69"]]);

export { index as default };
//# sourceMappingURL=index-Ck99jDa0.mjs.map
