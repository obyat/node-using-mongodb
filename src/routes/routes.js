import { addnewProduct,
    getProductWithID,
    getProducts
 } from '../controllers/controllers'

const routes = (app) => {
    app.route('/products')
    //get multiple products
    .get(getProducts)
    
    //Post endpoint
    .post(addnewProduct);



    app.route('/products/:ProductID')
    //get specific product with ID
    .get(getProductWithID);
}

export default routes;