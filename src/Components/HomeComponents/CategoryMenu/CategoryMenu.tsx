import {Box, Button, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CategoryMenu = ({category}:{category:string[] | undefined}) => {
   
    return (
        <Box
            className='bb CategoryMenu'
            sx={{
            display: {
                xs: 'none',
                sm: 'flex'
            },
            px: '1.25em',
            maxWidth: 'xl'
        }}>
            {[

'electronics','kitchen appliances','small kitchen appliances','vaccum cleaners','tvs'
       ,'heaters'
 ,      'fans'
,       'tools'

            ].map((item) => {
                return <Box  key={item}>
                    <Link key={item} href={`/category/${item.replace(/\s+/g, '-')}`}>
                        <Typography sx={{color:"#4b4b4b",
                        textTransform: 'capitalize'
                    }} component='h5'>
                        {item}
                        </Typography>

                    </Link>
                </Box>
            })
}
        </Box>
    )
}

export default CategoryMenu