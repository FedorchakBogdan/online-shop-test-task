import routeImporter from '@plugins/importers/routeImporter'
import RouteMerger from '@plugins/importers/RouteMerger'
const Router = () => import('@layouts/RouterViewer')

const routes = []

new RouteMerger(routes).add(
  // eslint-disable-next-line no-undef
  routeImporter(require.context('./products/', false, /.*\.js$/))
)

export default {
  path: '/products',
  component: Router,
  meta: {
    breadcrumb: 'Products',
    layout: 'main'
  },
  children: routes
}
