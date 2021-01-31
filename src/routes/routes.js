import {addnewProduct} from '../controllers/controllers'

const routes = (app) => {
    app.rout('/products')
    
    //Post endpoint
    .post(addnewProduct);
}

export default routes;
