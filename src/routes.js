import Home from 'src/pages/Home'
import About from 'src/pages/About'
import Portfolio from 'src/pages/Portfolio'
import News from 'src/pages/News'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/news',
    component: News
  },
]

export default routes
