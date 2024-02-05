import LoginPage from '../../pages/blog/LoginPage.vue'
import HomePage from '../../pages/blog/HomePage.vue'
import ProfileEditingPage from '../../pages/blog/ProfileEditingPage.vue'
import ProfilePage from '../../pages/blog/ProfilePage.vue'
import SearchPage from '../../pages/blog/SearchPage.vue'

const blogRoute = [
  {
    path: '/blog',
    name: 'blog',
    component: LoginPage,
    children: [
      {
        path: 'LoginPage',
        name: 'LoginPage',
        component: LoginPage,
      },
      {
        path: 'HomePage',
        name: 'HomePage',
        component: HomePage,
      },
      {
        path: 'ProfileEditingPage',
        name: 'ProfileEditingPage',
        component: ProfileEditingPage,
      },
      {
        path: 'ProfilePage',
        name: 'ProfilePage',
        component: ProfilePage,
      },
      {
        path: 'SearchPage',
        name: 'SearchPage',
        component: SearchPage,
      },
    ],
  },
]
export default blogRoute
