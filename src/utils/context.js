import { useContext } from "react";
import { createContext,useEffect,useState} from "react";
import {useLocation} from 'react-router-dom';
export const Context = createContext();

const AppContext =({children}) =>{
     const [categories, setCategories] = useState();
     const [products, setProducts] = useState();
     const [cartItems, setCartItems] = useState([]);
     const [cartCount, setCartCount] = useState(0);
     const [cartSubTotal, setCartSubTotal] = useState(0);
     const location = useLocation();

     useEffect(()=>{
        window.scrollTo(0,0);
     },[location])

     useEffect(()=>{
        let count = 0;
        cartItems?.map((item) => (count += item.attributes.quantity));
        setCartCount(count);

        let subTotal = 0;
        cartItems.map(
            (item) =>
                (subTotal += item.attributes.price * item.attributes.quantity)
        );
        setCartSubTotal(subTotal);
    }, [cartItems]);

     const handleAddToCart = (product,quantity)=>{
        let items = [...cartItems]; //this is for adding menus array in one
        let index = items?.findIndex(p => p.id === product?.id);  //geting particular product
        if(index !== -1){  //if the product is aleady there in cart
            items[index].attributes.quantity += quantity;  //for adding quantity of prod.

        } else{ //if the prod is not in the cart
            //not exiting prod
            product.attributes.quantity = quantity;
            items = [...items, product]; //updated array of prod

        }
        setCartItems(items);

     }
     const handleRemoveFromCart = (product)=>{
        let items = [...cartItems];
        items = items?.filter(p => p.id !== product?.id);
        setCartItems(items);

     }
     const handleCartProductQuantity = (type,product)=>{
        let items = [...cartItems]; 
        let index = items?.findIndex(p => p.id === product?.id);
        if (type === "inc") {
            items[index].attributes.quantity += 1;

        } else if (type === "dec") {
            if (items[index].attributes.quantity === 1) return; //atleast 1 quan. of prod should be there in cart
            items[index].attributes.quantity -= 1;
        }
        setCartItems(items);//saving the changes in the cart
    };

     


    return (
        <Context.Provider value={{
            categories,
            cartItems,
            setCartItems,
            cartCount,
            setCartCount,
            cartSubTotal,
            setCartSubTotal,
            setCategories,
            products,
            setProducts,
            handleAddToCart,
            handleRemoveFromCart,
            handleCartProductQuantity
            
        }}>
           {children}
        </Context.Provider>
    )
    

};

export default AppContext;