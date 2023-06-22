import { createContext,useState,useEffect } from "react";

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
    // __________ Shopping Cart - Order _________________________
    const [order, setOrder] = useState([]);
    // __________ Get products __________________________________
    const [items, setItems] = useState(null)
    // __________ filtering items _______________________________
    const [filteredItems, setFilteredItems] = useState(null)
    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response=>response.json())
          .then(data=>{
            setItems(data)
          })
      },[])
    // ____________ Get products by title _____________________
    const [searchByTitle, setSearchByTitle] = useState(null)
    // ____________ Get products by category __________________
    const [searchByCategory, setSearchByCategory] = useState(null)

    const filteredItemsByTitle = (items,searchByTitle) =>{
        return items?.filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    const filteredItemsByCategory = (items,searchByCategory) =>{
        return items?.filter(item=>item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    const filterBy = (searchType,items,searchByTitle,searchByCategory) => {
        if(searchType=== 'BY_TITLE'){
            return filteredItemsByTitle(items,searchByTitle)
        }
        if(searchType=== 'BY_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory)
        }
        if(searchType=== 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items,searchByCategory).filter(item=>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if(!searchType){
            return items
        }

    }

    useEffect(()=>{
        if(searchByTitle && searchByCategory){
            setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY',items,searchByTitle,searchByCategory))
        }
        if(searchByTitle && !searchByCategory){
            setFilteredItems(filterBy('BY_TITLE',items,searchByTitle,searchByCategory))
        }
        if(!searchByTitle && searchByCategory){
            setFilteredItems(filterBy('BY_CATEGORY',items,searchByTitle,searchByCategory))
        }
        if(!searchByTitle && !searchByCategory){
            setFilteredItems(filterBy(null,items,searchByTitle,searchByCategory))
        }
    },[items,searchByTitle,searchByCategory])
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
            closeCheckoutSideMenu,
            setOrder,
            order,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setSearchByCategory,
            searchByCategory
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}