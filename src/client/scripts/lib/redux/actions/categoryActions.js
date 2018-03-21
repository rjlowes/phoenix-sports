
export function addLastCategory(categoryId) {
	return {
		type: 'ADD_LAST_CATEGORY',
		categoryId: categoryId
	};
}

export function addCategoryProducts(products) {
	return {
		type: 'ADD_CATEGORY_PRODUCTS',
		products: products
	};
}