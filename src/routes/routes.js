import Home from 'pages/Home'
import About from 'pages/About'
import Portfolio from 'pages/Portfolio'
import News from 'pages/News'

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
