
export const userApi= {
    signup:'user/signup',
    userLogin:'user/Login',
    getSubordinates:'/user/readDesignation',
    getMyWorkList:'/user/postUserWiseWorkList',
    getreadAllClients:'/user/readAllClients',
    creatClient:'/user/createClient'
    
}

export const productsApi = {
    saveProduct:'/product/updateProduct',
    readAllProducts: '/product/readAllProducts',
    updateBatchPrice: '/product/updateBatchPrice',
    readlatestProduct:'/product/readlatestProduct',
    addTokart:'/product/addTokart',
    removeFromkart:'/product/removeFromkart',
    saveTransaction:'/product/saveTransaction',
}



export const adminApi = {
    saveTask:'admin/createTask'
}

