import Vue from 'vue'
import App from './App.vue'
import './utils/registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/performance'
import 'firebase/firestore'
import firebaseConfig from '@/utils/firebaseConfig'

Vue.config.productionTip = false

let app = firebase.initializeApp(firebaseConfig)
app.performance()
app.analytics()

Vue.prototype.$firebase = app
Vue.prototype.$auth = app.auth()
Vue.prototype.$firestore = app.firestore()

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
