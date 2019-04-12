import Home from './page/Home'
import Item from './page/Item'
import Customer from './page/Customer'
import ListCustomer from './page/ListCustomer'
const routes = [
    { path: '/', component: Home },
    { path: '/item', component: Item },
    {
        path: '/customer',
        component: Customer
    },
    {
        path: '/list-customer',
        component: ListCustomer
    }
]
export default routes
