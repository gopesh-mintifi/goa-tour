import React,{Suspense} from "react";
import { Row, Col } from 'react-bootstrap';
import Header from "../component/Header/header";
import CarouselBox from "../component/Carousel/carousel";
import Footer from "../component/footer/footer";
import Activities from "../component/Activities/activities";
import './layout.scss';
import {BrowserRouter as Router, redirect, Route, Routes} from 'react-router-dom';
import Schedule from '../component/schedule/schedule';

function Layout (){
return(
    <div className="mainContainer">
        <Header />
        <CarouselBox />
        <Router>
            <Suspense fallback={"loading"}>
            <Routes>
                <Route path="/goa-tour" element={<Activities/>} />
                <Route path="/goa-tour/schedule" element={<Schedule/>} />
            </Routes>
            </Suspense>
        </Router>
        
        <Footer />
    </div>
    
);
}

export default Layout;