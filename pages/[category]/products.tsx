import Head from 'next/head'
import React from 'react'
import TopAd from '../../src/Components/HomeComponents/TopAd/TopAd'
import Navbar from '../../src/Components/Navbar/Navbar'
import FilterSection from '../../src/Components/ProductsComponents/Filter/FilterSection'
import ProductSection from '../../src/Components/ProductsComponents/ProductSection/ProductSection'
import { Box, Divider, Typography } from '@mui/material'
import CategoryMenu from '../../src/Components/HomeComponents/CategoryMenu/CategoryMenu'
import Breadcrumb from '../../src/Components/Breadcrumbs/Breadcrumb'

const Products = () => {
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

    <Box className='flexed' sx={{pt:'3em',mx:'1em',justifyContent:'space-between'}}>

    <Breadcrumb/>
    <Typography className='gray'>Showing 19 out of 40</Typography>
    </Box>
    <Divider></Divider>
    <Box  sx={{display:'flex',flexWrap:'wrap',mx:'1em',justifyContent:'space-between',mt:'2em',alignItems:'flex-start',flexDirection:'row'}}>
    <FilterSection/>
    <ProductSection/>
    </Box>
  </>
  )
}

export default Products