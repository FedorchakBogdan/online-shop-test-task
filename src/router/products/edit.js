const productsCreate = () => import('@views/products/Edit')

export default {
  name: 'products.edit',
  path: 'edit/:id',
  component: productsCreate,
  meta: {
    breadcrumb: 'Edit',
    title: 'Edit',
    layout: 'main'
  }
}
