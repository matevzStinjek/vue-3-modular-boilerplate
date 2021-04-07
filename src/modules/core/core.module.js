import { createApp } from 'vue'
import { coreStore } from 'core/store'
import App from 'core/components/App.vue'

export class CoreModule {

    get name () {
        return 'core'
    }

    constructor (storeModule, routerModule) {
        this.storeModule = storeModule
        this.routerModule = routerModule
    }

    install () {
        this.vm = createApp(App)
            .use(this.storeModule.store)
            .use(this.routerModule.router)

        this.storeModule.registerModule(coreStore)
    }

    mount () {
        this.vm.mount('#app')
        this.routerModule.router.push('/')
    }
}
