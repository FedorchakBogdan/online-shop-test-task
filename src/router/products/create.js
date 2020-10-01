const productsCreate = () => import('@views/products/Create')

export default {
  name: 'products.create',
  path: 'create',
  component: productsCreate,
  meta: {
    breadcrumb: 'Create',
    title: 'Create',
    layout: 'main'
  }
}
