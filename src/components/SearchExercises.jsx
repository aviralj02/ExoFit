import { useEffect, useState } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import {exerciseOptions, fetchData} from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['All', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search){
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            const searchedExercises = exerciseData.filter((exercise) =>
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch("");
            setExercises(searchedExercises);
            window.scrollTo({top: '1700', behavior: 'smooth'});
        }
    }

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' padding='20px'>
            <Typography 
                fontWeight='700'
                mb='50px'
                textAlign='center'
                sx={{fontSize:{lg:'44px', xs:'30px'}}}
            >
                Awesome Exercises You <br /> should know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField 
                    height="76px"
                    value={search}
                    onChange={ (e) => {
                        setSearch(e.target.value.toLowerCase());
                    }}
                    type="text"
                    placeholder='Search Exercise'
                    sx={{input: {border:'none', borderRadius:'5px', fontWeight:'700'}, width: {lg:'800px', xs:'350px'}, backgroundColor:'#fff'}}
                />

                <Button className='search-btn'
                    sx={{
                        bgcolor:'#ff2625', 
                        color:'#fff', 
                        textTransform:'none', 
                        width: {lg:'175px', xs:'80px'}, 
                        fontSize: {lg:'20px', xs:'14px'},
                        height: '56px',
                        position:'absolute',
                        right: '0'
                    }}
                    onClick={ handleSearch }
                >
                    Search
                </Button>
            </Box>
            <Box sx={{position:'relative', width:'100%', padding:'20px'}}>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
            </Box>
        </Stack>

    );
}
 
export default SearchExercises;