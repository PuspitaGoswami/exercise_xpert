
import { Stack, Typography, Box, Button,TextField} from '@mui/material';
import React, {useEffect, useState} from 'react';

const SearchExercises = () => {

  const [search, setSearch] = useState('');

  const handleSearch = async () => {
      if(search){
        // const exercises = await fetchData();
      }
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent={'center'} p='20px'>

      <Typography fontWeight={700} sx={{fontSize:{lg:'44px', xs:'30px' }}} mb='50px' textAlign='center'>Awesome Exercises You can Follow</Typography>
      <Box position='relative' mb='72px'>
          <TextField 
          sx={{input: {
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'
          }, width:{lg:'800px', xs:'350px'} , backgroundColor: '#fff', borderRadius:'40px'}}
          height='70px' value={search} onChange={(e) => {setSearch(e.target.value.toLowerCase())}} placeHolder='Search Exercise' type='text'/>
      <Button onClick={handleSearch} className='search-btn' sx={{bgcolor:'#FF2625', color:'#fff', textTransform:'none', width:{lg:'175px', xs:'80px'}, fontsize:{lg:'20px', xs:'14px'}, height:'56px', position:'absolute' , right:'0'}}>Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises