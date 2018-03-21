import fetch from 'isomorphic-fetch';


// export const createUser = (user) => {

//  return {
//      type: 'CREATE_USER',
//      book: book
//  }
// };

export const REGISTER_CUSTOMER_REQUEST = 'REGISTER_CUSTOMER_REQUEST';
export const REGISTER_CUSTOMER_SUCCESS = 'REGISTER_CUSTOMER_SUCCESS';
export const REGISTER_CUSTOMER_FAILURE = 'REGISTER_CUSTOMER_FAILURE';


export const registerCustomer = (customer) => {
    return {
        type: 'REGISTER_CUSTOMER',
        customer: customer
    }
};


export const customerTest = () => {
    return {
        type: 'CUSTOMER_TEST',
        test: 'abc...'
    }
};







submitLogin() {
        let headers = new Headers({'Content-Type': 'application/json'});
        let request = new Request('/api/login', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(this.state.user),
            credentials: 'include'
        });

        fetch(request)
            .then((response) => response.json())
            .then(data => {
                // TODO this may need to optionally redirect to the checkout
                this.props.history.push('/account/dashboard');
            }).catch(err => {
                console.log('err ', err);
            })
    }