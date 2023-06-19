import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();
    
export const ShoppingCartProvider = ({children})=>{
    // __________ Shopping Cart - Increment Quantity ___________
    const [count, setCount] = useState(0);
    // __________ Product Detail - Open/Close __________________
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = ()=>{setIsProductDetailOpen(true)}
    const closeProductDetail = ()=>{ setIsProductDetailOpen(false)}
    // __________ Checkout Side Menu - Open/Close _______________
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = ()=>{setIsCheckoutSideMenuOpen(true)};
    const closeCheckoutSideMenu = ()=>{setIsCheckoutSideMenuOpen(false)};
    // __________ Product Detail - Show Product _________________
    const [productToShow, setProductToShow] = useState({})
    // __________ Shopping Cart - Add products to cart __________
    const [cartProducts, setCartProducts] = useState([])
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}