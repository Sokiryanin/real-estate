import{S as l}from"./assets/vendor-f4e7ce0d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new l(".slider-main-block",{loop:!0,navigation:{nextEl:".body-main-block__arrow.swiper-button-prev",prevEl:".body-main-block__arrow.swiper-button-next"}});const a=document.querySelectorAll(".tabs-deals__button"),c=document.querySelectorAll(".item-tabs");document.addEventListener("click",function(n){const r=n.target;let s=null,o=null;r.closest(".tabs-deals__button")&&(a.forEach((e,t)=>{e.classList.contains("active")&&(s=t,e.classList.remove("active")),e===r&&(o=t)}),r.classList.add("active"),c[s].classList.remove("active"),c[o].classList.add("active"))});
//# sourceMappingURL=commonHelpers.js.map
