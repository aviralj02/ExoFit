import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, bodyPart, setBodyPart}) => {
    return (
        <Stack
            type='button'
            alignItems='center'
            justifyContent='center'
            className='bodyPart-card'
            onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: '1700', behavior: 'smooth'});
            }}
            sx={{
                borderTop: bodyPart === item ? '4px solid #ff2625' : "",
                background:'#fff',
                borderBottomLeftRadius:'20px',
                width:'270px',
                height:'280px',
                cursor:'pointer',
                gap:'47px'
            }}
        >
            <img src={Icon} alt='dumbbell' style={{width:'40px', height:'40px'}}></img>
            <Typography
                fontSize='24px'
                fontWeight='bold'
                color='#3a1212'
                textTransform='capatalize'
            >{ item }</Typography>
        </Stack>
     );
}
 
export default BodyPart;