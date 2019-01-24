import { createApp } from '../main.js';
const { app, router, store } = createApp();
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
router.onReady( () => {
    // router.beforeResolve((to, from, next) => {
    //     const matched = router.getMatchedComponents(to)
    //     const prevMatched = router.getMatchedComponents(from)
    //     let diffed = false
    //     const activated = matched.filter((c, i) => {
    //         return diffed || (diffed = (prevMatched[i] !== c))
    //     })
    //     if(!activated.length){
    //         return next()
    //     }
    //
    //     //loading open
    //
    //     Promise.all(activated.map(c => {
    //         if (c.asyncData) {
    //                 return c.asyncData({ store, route: to })
    //         }
    //     })).then(() => {
    //
    //         //loading close
    //
    //         next()
    //     }).catch(next)
    // })
    app.$mount('#app')
});
