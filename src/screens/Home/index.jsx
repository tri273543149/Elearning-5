import React from 'react';

// import components
import Slider from "../../components/Slider";
import Introduction from "../../components/Introduction";
import CarouselCourses from "../../layouts/CarouselCourses";
import CategoriedCourses from "../../layouts/CategoriedCourses";

const Home = () => {
    return (
        <>
            <Slider />
            <Introduction />
            <CarouselCourses />
            <CategoriedCourses />
        </>
    );
};

export default Home;