import { Box, Typography } from "@mui/material"

const TopAd = () => {
  return (
    <main style={{fontWeight:'300'}}>

    <Box
    className='bg white'
    sx={{textAlign:'center',fontSize:'.7em',py:'.5em',
    // background:'#dfdfdf',
    color:"white"}}>    
    🚛التوصيل مؤمن الى جميع المناطق اللبنانية عبر خدمة الديلفري
  |  📲whatsapp:70873045
    {/* Free delivery from LBP 200,000 and free returns | CASH ON DELIVERY - Returns extended to 60 days - DELIVERIES MAY TAKE UP TO 15 WORKING DAYS. */}
    </Box>
    </main>
  )
}

export default TopAd