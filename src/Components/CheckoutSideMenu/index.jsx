import React,{useContext} from 'react';
import { ShoppingCartContext } from '../../Context';
import {XMarkIcon} from '@heroicons/react/24/solid';
import './styles.css'
import OrderCard from '../OrderCard';

function CheckoutSideMenu() {
    const context = useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts);
    //console.log('PRODUCT TO SHOW: ', context.productToShow);
    return (
        <aside 
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                        className='h-6 w-6 text-black-500 cursor-pointer'
                        onClick={()=>context.closeCheckoutSideMenu()}></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-scroll'>
                {
                    context.cartProducts.map((product)=>{
                        return (
                            <OrderCard
                            key={product.id} 
                            title={product.title} 
                            imageUrl={product.images}
                            price={product.price}
                            />
                        )
                    })
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu