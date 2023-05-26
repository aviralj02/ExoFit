import {Box, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
    return (
        <Box sx={{marginTop: {lg: '212px', xs:'70px'}, marginLeft: {sm: '50px'}}}
            position= 'relative'
            padding= '20px'    
        >
            <Typography color='#ff2625' fontSize='26px' fontWeight='600'>Fitness Club</Typography>
            <Typography fontWeight='700' mb='23px' mt='30px' sx={{fontSize: {lg: '44px', xs: '40px'}}}>
                Sweat, Smile <br/> and Repeat
            </Typography>
            <Typography fontSize='22px' lineHeight='35px' mb='3px'>
                Checkout the most effective exercises
            </Typography>
            <Button href='#exercises' variant='contained' sx={{marginTop: '20px', backgroundColor: '#ff2625', padding: '10px'}}>
                Explore Exercises
            </Button>
            <Typography fontWeight='600' color='ff2625' fontSize='200px' sx={{opacity: '0.1', display: {lg:'block', xs:'none'}}}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
        </Box>
    );
}

export default HeroBanner;