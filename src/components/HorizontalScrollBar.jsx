import { Box } from '@mui/material';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
    return ( 
        <div className='scroll'>
            { data.map((item) => (
                <Box 
                  key={item.id || item} 
                  itemID={item.id || item} 
                  title={item.id || item} 
                  margin='0 40px'
                >
                    {isBodyParts ? (
                        <BodyPart  item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                    ) : (
                        <ExerciseCard exercise={item} />
                    )}
                </Box>
            )) }
        </div>
     );
}
 
export default HorizontalScrollBar;