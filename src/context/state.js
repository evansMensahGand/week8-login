import create from "zustand"

export const useStore = create((set)=> {
  return{
    counter:0,
    increaseCounter:()=>set(state=>({counter:state.counter+1})),
    decreaseCounter:()=>set(state=>({counter:state.counter-1}))
  }
});


export const useCart = create((set)=>{
  return{
    items:[],
    totalPrice:()=> (state)=>{
      const sum=state.items.reduce( 
        (currentValue, item)=>currentValue + item.price, 
        0
        );
      return {totalPrice: sum};
      },
    addToCart: (item) =>
    set((state)=>{
      // check in item is in cart
      const index = state.items.findIndex((it)=>it.id===item.id);

      if (index !==-1) {
        const newState = state.items.map((stateItem) => {
          if(stateItem.id === item.id) {
            return {...stateItem, qty:stateItem.qty + 1};
          }
          return stateItem;
        });
        return{items: newState};     
       } else{
      return {items:[...state.items, {...item, qty:1}]};
    }
  }),
  removeFromCart:(id)=>
  set((state)=>{ const newArray=state.items.filter((item)=>item.id !==id);
  return{items:newArray};
  }),
};
});

export const useUserStore= create((get,set)=>({
  user:{
    token:"",
    isLoggedIn:false,
  },
  setAuthUser: token=>
   set(state=>({user:token, isloggedIn: true})),

}));