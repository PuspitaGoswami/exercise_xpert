
import { Stack, Typography, Box, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


const SearchExercises = ({setExercices, bodyPart, setBodyPart}) => {

  const [search, setSearch] = useState('');

  const [bodyparts, setBodyparts] = useState([]);

  useEffect(() =>{
    const fetchExercisesData = async () =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)  ;
    
      setBodyparts(['all', ...bodyPartsData]);
    }

    fetchExercisesData();
  },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      const SearchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodypart.toLowerCase().includes(search)

      )
      setSearch('');
      setExercices(SearchedExercises);
    }
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent={'center'} p='20px'>

      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign='center'>Awesome Exercises You can Follow</Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px'
            }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px'
          }}
          height='70px' value={search} onChange={(e) => { setSearch(e.target.value.toLowerCase()) }} placeHolder='Search Exercise' type='text' />
        <Button onClick={handleSearch} className='search-btn' sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, fontsize: { lg: '20px', xs: '14px' }, height: '56px', position: 'absolute', right: '0' }}>Search</Button>
      </Box>

      <Box sx={{position:'relative', width:'100%', p:'20px' }}>
          <HorizontalScrollbar data={bodyparts} bodypart={bodyPart} setBodypart = {setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises