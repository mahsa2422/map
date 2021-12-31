import React from 'react';
import Map from '../components/mapComponent/map';
import ReadExcels from '../components/readExcel';


const Home=()=>{
    return(
        <>
        <ReadExcels/>
          <Map/>
        </>
    );
}
export default Home;