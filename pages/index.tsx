import Head from 'next/head'
import CategoryMenu from '../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import MainCarousel from '../src/Components/HomeComponents/MainCarousel/MainCarousel';
import WhatsApp from '../src/Components/HomeComponents/SocialLinks/WhatsApp';
import ProductCollection from '../src/Components/HomeComponents/ProductCollection/ProductCollection';
import FullscreenPoster from '../src/Components/HomeComponents/FullscreenPoster/FullscreenPoster';
import CategoryList from '../src/Components/HomeComponents/CategoryList/CategoryList';
import Perks from '../src/Components/HomeComponents/Perks/Perks';
import TopAd from '../src/Components/HomeComponents/TopAd/TopAd';
import Navbar from '../src/Components/Navbar/Navbar';
import SideBar from '../src/Components/Drawer/SideBar';
import { Dialog } from '@mui/material';
import QuickView from '../src/Components/Dialog/QuickView';
import { useState } from 'react';

export default function Home() {
    const [quickView, setQuickView] = useState<{isOpen:boolean,productId:null | string}>({isOpen:false,productId:null})
  return (
    <>
      <Head>
        <title>FAT SALE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <TopAd/>
      <Navbar/>
      <CategoryMenu/>
      <main>
      <MainCarousel/>
      <WhatsApp/>
      <ProductCollection setQuickView={setQuickView} title='Christmas Sale'/>      
      <ProductCollection setQuickView={setQuickView} title='Christmas Sale'/>      
      <CategoryList/>
      <ProductCollection setQuickView={setQuickView} title='Christmas Sale'/>      
      <FullscreenPoster/>
      <FullscreenPoster reversed={true}/>
        <QuickView setQuickView={setQuickView} isOpen={quickView.isOpen}/>
        </main>
      <Perks/>
    </>
  )
}
