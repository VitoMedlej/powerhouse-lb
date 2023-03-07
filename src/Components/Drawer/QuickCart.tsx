import {useContext, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';

import {CartContext} from '../../../pages/_app';
import {IconButton, Typography} from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CartProduct from '../Products/CartProduct';

import Btn from '../Btn/Btn';
import { useRouter } from 'next/router';
import { loadState, saveState } from '../../Utils/LocalstorageFn';

export default function TemporaryDrawer() {
    const router = useRouter()
    const [cartOpen,
        setCartOpen] = useContext(CartContext);

    const toggleDrawer = (open : boolean) => (event : React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
            return;
        }

        setCartOpen(open);
    };
    let cartItems : ICartItem[] = loadState('usercart') || []
    const remove = (id:string) => {
       let state = cartItems.filter(x => `${x.id}` !== id);
        saveState('usercart', state);
        cartItems = state
    }
    return (
        <div>
            <Drawer anchor={'top'} open={cartOpen} onClose={toggleDrawer(false)}>
                <Box
                    sx={{
                    maxWidth: 'lg',
                    width: '100%',
                    margin: '0 auto'
                }}>
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mx: '1em',
                        borderBottom: '1px solid #00000014',
                        justifyContent: 'space-between'
                    }}>
                        <h2 
                        onClick={()=>router.push('/cart')}
                            style={{
                            cursor:'pointer',
                            fontWeight: '500',
                            textDecoration: 'underline'
                        }}>
                            View Cart
                        </h2>
                        <IconButton onClick={toggleDrawer(false)}>
                            <CancelPresentationIcon
                                sx={{
                                color: 'red'
                            }}/>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                        maxHeight: '350px',
                        overflowY: 'scroll'
                    }}>
                        {
                           cartItems && cartItems.length > 0 ? cartItems.map((item:ICartItem, index) =>{

                        return <CartProduct id={item.id} qty={item.qty} price={item.price} img={item.img}
                        remove={remove}
                        name={item.name} key={index}/>
                            })
                            : <Typography sx={{fontSize:'1.5em',textAlign:'center',py:5}}> Your Cart Is Empty!</Typography>
                        }
                        
                    </Box>
                    <Divider></Divider>
                    <Box
                        sx={{
                        my: 2,
                        mx: 1,
                        display:'flex'
                    }}>
                       <Btn disabled={cartItems.length < 1}>
                            Checkout
                       </Btn>
                        <Btn v2={true}>
                        Continue Shopping
                        </Btn>
                    </Box>

                </Box>
            </Drawer>
        </div>
    );
}