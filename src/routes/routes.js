import { addnewProduct,
    getProductWithID,
    getProducts,
    updateProduct,
    deleteProduct
 } from '../controllers/controllers'

const routes = (app) => {
    app.route('/products')
    //get multiple products
    .get(getProducts)
    
    //Post endpoint
    .post(addnewProduct);



    app.route('/products/:ProductID')
    //get specific product with ID
    .get(getProductWithID)

    //to update with a specific a product
    .put(updateProduct)

    //to delete a specific product
    .delete(deleteProduct);
}

export default routes;