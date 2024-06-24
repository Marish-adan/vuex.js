const state={
    stockDetails : [
        {
            itemNumber: 1,
            itemName : "Sweets",
            itemPrice : 5,
            itemQuantity : 30,
            itemImage: 'public/images/istockphoto-157678379-1024x1024.jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        },
        {
            itemNumber: 27466,
            itemName : "Lollipop",
            itemPrice : 10,
            itemQuantity : 4,
            itemImage: 'public/images/customerbox-aXq1oCCjlVM-unsplash (1).jpg',
            description: "Our sweets are wonderfully crafted by the best ingrdients to bring deliciousness to your parties"
        }
        
  ],
  total: 0,
  cartItems:[],
  





        }
            
            
                
    



const getters={
    stock:(state)=> state.stockDetails,

}
const actions={

}
const mutations={

}
export default{
    state,
    getters,
    actions,
    mutations,
}