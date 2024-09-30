import { mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { publicAssetsURL } from "#internal/nuxt/paths";
import { _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main$7 = {
  data() {
    return {
      navbarList: [
        { link: "#", text: "Sobre Nós" },
        { link: "#", text: "Documentação" },
        { link: "#", text: "Evento" },
        { link: "#", text: "Referências" }
      ]
    };
  },
  methods: {
    toggleNavbar() {
      const navbarSm = (void 0).getElementById("navbar-sm");
      const btnToggleNav = (void 0).getElementById("btn-toggle-nav");
      if (btnToggleNav) {
        btnToggleNav.classList.toggle("active");
      }
      if (navbarSm) {
        navbarSm.classList.toggle("navbar-open");
        navbarSm.classList.toggle("navbar-close");
        if (navbarSm.getAttribute("data-status") == "closed") {
          navbarSm.setAttribute("data-status", "opened");
          setTimeout(() => {
            navbarSm.style.minHeight = "max-content";
          }, 300);
        } else {
          navbarSm.setAttribute("data-status", "closed");
          navbarSm.style.minHeight = "";
        }
        setTimeout(() => {
          console.log("Executado após 2 segundos!");
        }, 300);
      }
    }
  }
};
const _imports_0$4 = publicAssetsURL("/img/logo_senac.png");
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "header" }, _attrs))} data-v-6e23d3bf><nav id="navbar-lg" data-v-6e23d3bf><ul data-v-6e23d3bf><li data-v-6e23d3bf><a${ssrRenderAttr("href", $data.navbarList[0].link)} data-v-6e23d3bf>${$data.navbarList[0].text ?? ""}</a></li><li data-v-6e23d3bf><a${ssrRenderAttr("href", $data.navbarList[1].link)} data-v-6e23d3bf>${$data.navbarList[1].text ?? ""}</a></li><li data-v-6e23d3bf><a href="#" data-v-6e23d3bf><img${ssrRenderAttr("src", _imports_0$4)} alt="Logo do Centro Universitário Senac" id="logo-senac" data-v-6e23d3bf></a></li><li data-v-6e23d3bf><a${ssrRenderAttr("href", $data.navbarList[2].link)} data-v-6e23d3bf>${$data.navbarList[2].text ?? ""}</a></li><li data-v-6e23d3bf><a${ssrRenderAttr("href", $data.navbarList[3].link)} data-v-6e23d3bf>${$data.navbarList[3].text ?? ""}</a></li></ul></nav><a href="#" id="link-logo-senac-sm" data-v-6e23d3bf><img${ssrRenderAttr("src", _imports_0$4)} alt="Logo do Centro Universitário Senac" id="logo-senac" data-v-6e23d3bf></a><nav id="navbar-sm" class="navbar-close" data-status="closed" data-v-6e23d3bf><ul data-v-6e23d3bf><!--[-->`);
  ssrRenderList($data.navbarList, (navbarLink) => {
    _push(`<li data-v-6e23d3bf><a${ssrRenderAttr("href", navbarLink.link)} data-v-6e23d3bf>${navbarLink.text ?? ""}</a></li>`);
  });
  _push(`<!--]--></ul></nav><div id="btn-toggle-nav" class="btn-to-close" data-v-6e23d3bf><div data-v-6e23d3bf></div><div data-v-6e23d3bf></div><div data-v-6e23d3bf></div></div></header>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cheader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-6e23d3bf"]]);
const _sfc_main$6 = {};
const _imports_0$3 = publicAssetsURL("/img/logo_smoke.png");
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-home" }, _attrs))} data-v-23e2c421><div id="inside-main-home" data-v-23e2c421><img${ssrRenderAttr("src", _imports_0$3)} alt="Logo do grupo &#39;Smoke&#39; - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro" data-v-23e2c421><h1 data-v-23e2c421>ACELERANDO O FUTURO DA TECNOLOGIA</h1><p data-v-23e2c421>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae voluptates, deleniti facilis perferendis ea eius, sed nulla odio numquam reprehenderit nihil labore! Saepe sed non aperiam commodi blanditiis obcaecati!</p><a href="#" data-v-23e2c421>Saiba mais</a></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainHome.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-23e2c421"]]);
const _sfc_main$5 = {};
const _imports_0$2 = publicAssetsURL("/img/engineer.jpg");
const _imports_1 = publicAssetsURL("/img/car.jpg");
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-about" }, _attrs))} data-v-2310cb8b><div id="inside-main-about" data-v-2310cb8b><div class="div-about" data-v-2310cb8b><div class="img-about" data-v-2310cb8b><img${ssrRenderAttr("src", _imports_0$2)} alt="Imagem gerada por A.I. mostrando um engenheiro construindo um carrinho eletrônico" data-v-2310cb8b></div><div class="text-about" data-v-2310cb8b><h3 data-v-2310cb8b>ACELERANDO O FUTURO DA TECNOLOGIA</h3><p data-v-2310cb8b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit necessitatibus repellat enim reprehenderit unde amet quasi placeat velit cupiditate id explicabo iste possimus iure voluptatibus similique, vitae optio. Provident!</p></div></div><div class="div-about" data-v-2310cb8b><div class="text-about" data-v-2310cb8b><h3 data-v-2310cb8b>ACELERANDO O FUTURO DA TECNOLOGIA</h3><p data-v-2310cb8b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sit necessitatibus repellat enim reprehenderit unde amet quasi placeat velit cupiditate id explicabo iste possimus iure voluptatibus similique, vitae optio. Provident!</p></div><div class="img-about" data-v-2310cb8b><img${ssrRenderAttr("src", _imports_1)} alt="Imagem gerada por A.I. mostrando um carrinho eletrônico" data-v-2310cb8b></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainAbout.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-2310cb8b"]]);
const _sfc_main$4 = {
  props: {
    name: { type: String, required: true },
    user: { type: String, required: true },
    srcImg: { type: String, required: true }
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "member" }, _attrs))} data-v-56df3ebc><a${ssrRenderAttr("href", "integrantes/" + $props.user)} class="member-img" data-v-56df3ebc><img${ssrRenderAttr("src", "img/members/" + $props.srcImg)}${ssrRenderAttr("alt", "Foto do integrante " + $props.name)} data-v-56df3ebc></a><h3 data-v-56df3ebc>${ssrInterpolate($props.name)}</h3></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/sub-components/member.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Member = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-56df3ebc"]]);
const _sfc_main$3 = {
  data() {
    return {
      membersList: [
        { name: "André Richard", user: "andre-richard", srcImg: "andre-richard.jpg" },
        { name: "Fernando Martins", user: "fernando-martins", srcImg: "fernando-martins.jpg" },
        { name: "Gustavo Nathan", user: "gustavo-nathan", srcImg: "gustavo-nathan.jpg" },
        { name: "Higor Cabral", user: "higor-cabral", srcImg: "higor-cabral.jpg" },
        { name: "Isabela Marques", user: "isabela-marques", srcImg: "isabela-marques.jpg" },
        { name: "Matheus Roman", user: "matheus-roman", srcImg: "matheus-roman.jpg" },
        { name: "Pablo Cremm", user: "pablo-cremm", srcImg: "pablo-cremm.jpg" },
        { name: "Rafael Pequino", user: "rafael-pequino", srcImg: "rafael-pequino.jpg" }
      ]
    };
  },
  components: { Member }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Member = resolveComponent("Member");
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-group" }, _attrs))} data-v-f1bd05a3><div id="inside-main-group" data-v-f1bd05a3><h2 data-v-f1bd05a3>Integrantes</h2><div class="members" data-v-f1bd05a3><!--[-->`);
  ssrRenderList($data.membersList, (member) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainGroup.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-f1bd05a3"]]);
const _sfc_main$2 = {};
const _imports_0$1 = publicAssetsURL("/img/inside-proj/ai01.jpg");
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "main-more" }, _attrs))} data-v-f9e7d602><div id="inside-main-more" data-v-f9e7d602><h2 data-v-f9e7d602>Por dentro do Projeto</h2><div class="proj-data" data-v-f9e7d602><img${ssrRenderAttr("src", _imports_0$1)} alt="Imagem exibindo o trabalho por trás do projeto" data-v-f9e7d602><p data-v-f9e7d602>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nemo dolores dolor veniam inventore. Sint neque non deserunt! Recusandae, repellendus voluptatum odit enim esse assumenda soluta dolore doloribus deleniti hic.</p><p data-v-f9e7d602>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eaque vitae nostrum earum unde autem ipsum in alias incidunt nulla necessitatibus omnis nemo repellat rem odio animi veritatis, esse quisquam.</p></div></div></section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MainMore.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-f9e7d602"]]);
const _sfc_main$1 = {};
const _imports_0 = publicAssetsURL("/img/logo_smoke_footer.png");
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ id: "footer" }, _attrs))} data-v-fde8ea03><div id="inside-footer" data-v-fde8ea03><a href="#" class="link-img-footer" data-v-fde8ea03><img${ssrRenderAttr("src", _imports_0)} alt="Logo do grupo &#39;Smoke&#39; - Grupo do 2º semestre do curso de Engenharia de Computação do centro universitário Senac Santo Amaro" data-v-fde8ea03></a></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cfooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-fde8ea03"]]);
const _sfc_main = {
  methods: {
    scrollToTop() {
      (void 0).scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  components: { Cheader: __nuxt_component_0, MainAbout: __nuxt_component_2, MainGroup: __nuxt_component_3, MainHome: __nuxt_component_1, MainMore: __nuxt_component_4, Cfooter: __nuxt_component_5 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Cheader = __nuxt_component_0;
  const _component_MainHome = __nuxt_component_1;
  const _component_MainAbout = __nuxt_component_2;
  const _component_MainGroup = __nuxt_component_3;
  const _component_MainMore = __nuxt_component_4;
  const _component_Cfooter = __nuxt_component_5;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Cheader, null, null, _parent));
  _push(`<div id="btn-scroll-top" data-v-25edff4b><i class="fa-solid fa-chevron-up" data-v-25edff4b></i></div><main data-v-25edff4b>`);
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-25edff4b"]]);
export {
  index as default
};
//# sourceMappingURL=index-BDATTfU5.js.map
