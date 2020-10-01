const Products = () => import('@views/products/Products')

export default {
  name: 'products.index',
  path: '',
  component: Products,
  meta: {
    title: 'Products',
    layout: 'main'
  }
}
