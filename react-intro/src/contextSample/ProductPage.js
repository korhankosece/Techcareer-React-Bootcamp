import CartHeader from './CartHeader'
import CartList from './CartList'
import ProductList from './ProductList'

const ProductPage = () => {
    return (
        <>
            <CartHeader />
            {/* <CartList /> */}
            <ProductList />
        </>
    )
}

export default ProductPage

//Todo Main component açılacak
//Todo List ve TodoAdd
//eklerken hem title hem de descr taşıyan 1 obj state'i olabilir ya da 2 state de olabilir
//bu state contextte olacak
//listede sadece title - descr olarak listelenecek 
//props kullanılmayacak
