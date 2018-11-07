import Home from '@/views/home'
import Detail from '@/views/detail'

const route = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/category/:label',
    component: Home
  },
  {
    path: '/article/:id',
    component: Detail
  }
]

export default route