import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {

    return (
        <Link to={`/exercise/${exercise.id}`} className='exercise-card'>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction='row'>
                <Button sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#ffa9a9',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTranform: 'capitalize'
                }}>
                    { exercise.bodyPart }
                </Button>
                <Button sx={{
                    ml: '21px',
                    color: '#fff',
                    background: '#fcc757',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTranform: 'capitalize'
                }}>
                    { exercise.target }
                </Button>
            </Stack>
            <Typography sx={{
                ml: '21px',
                color: '#000',
                fontWeight: 'bold',
                mt: '11px',
                paddingBottom: '10px',
                textTranform: 'capitalize',
                fontSize: '24px'
            }}>
                { exercise.name }
            </Typography>
        </Link>
    )
}

export default ExerciseCard;