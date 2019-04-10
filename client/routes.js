import Home from './page/Home'
import Item from './page/Item'
import Customer from './page/Customer'
const routes = [
    { path: '/', component: Home },
    { path: '/item', component: Item },
    {
        path: '/customer',
        component: Customer
    }
]
export default routes
