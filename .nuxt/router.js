import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cd0f7a74 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _d6b22c58 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _ec8bcc7e = () => interopDefault(import('../pages/service.vue' /* webpackChunkName: "pages/service" */))
const _79870bd4 = () => interopDefault(import('../pages/wiki.vue' /* webpackChunkName: "pages/wiki" */))
const _2dd5525e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _cd0f7a74,
    name: "blog"
  }, {
    path: "/portfolio",
    component: _d6b22c58,
    name: "portfolio"
  }, {
    path: "/service",
    component: _ec8bcc7e,
    name: "service"
  }, {
    path: "/wiki",
    component: _79870bd4,
    name: "wiki"
  }, {
    path: "/",
    component: _2dd5525e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
