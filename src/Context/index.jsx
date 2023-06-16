import { createContext,useState } from "react";

export const ShoppingCartContext = createContext();
    
export const ShoppingCartProvider = ({children})=>{
    // __________ Shopping Cart - Increment Quantity ___________
    const [count, setCount] = useState(0);
    // __________ Product Detail - Open/Close __________________
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = ()=>{setIsProductDetailOpen(true)}
    const closeProductDetail = ()=>{ setIsProductDetailOpen(false)}
    // __________ Product Detail - Show Product ________________
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}