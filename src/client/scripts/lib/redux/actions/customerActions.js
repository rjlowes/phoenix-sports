import fetch from 'isomorphic-fetch';


// export const createUser = (user) => {

// 	return {
// 		type: 'CREATE_USER',
// 		book: book
// 	}
// };




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




