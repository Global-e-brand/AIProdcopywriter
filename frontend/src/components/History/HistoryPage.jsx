import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HeaderLogo from '../../HeaderLogo'
import SidebarMenu from '../../SidebarMenu'
import "./HistoryPage.css";
import { Grid, Button, Card } from "@mui/material";
import Loader from "../loader/loader";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';

/*import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"; */



const HistoryPage = () => {
  return (
    /*<div className="main-division">
        <Grid container spacing={4}>
            {/* sidebar }
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                <div className="logo-panel">
                    <HeaderLogo />
                    <SidebarMenu />
                </div>
            </Grid>
        </Grid>

        
            <div>
                <h2>
                    <strong>Result</strong>
                </h2>
            </div> 
      
    </div>

    */

    <div className="category-page">

        {/* Recently Saved Searches Title */}
        <div className="category-title">
            <h2 className="category-title-text">
                <strong>Recently Saved Searches</strong>
            </h2>
        </div>
        <div className="main-division">
            <Grid container spacing={4}>
                {/* sidebar */}
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <div className="logo-panel">
                        <HeaderLogo />
                        <SidebarMenu />
                    </div>
                </Grid>


                
                <Grid item lg={8.75} align-items="center">

                    {/* today accordion */}
                    <Accordion className='closeacc'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <strong>Today</strong>
                        </AccordionSummary>
                        <AccordionDetails className="openacc">
                            <div>
                                {/* card description 1 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        {/* card headings */}
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        {/* card input infomation */}
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        {/* carousel of description */}
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                <Carousel>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <div className="btwcards"/>

                                {/* card description 2 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                {/* card description 3 */}
                                <div className='btwcards'/>
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmond tempor labore et</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                <div className='btwcards'/>

                                {/* card description 4 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                
                            </div>
                            
                        
                        </AccordionDetails>
                    </Accordion>

                    <div className="btwcards"/>
                    
                    {/* yesterday accordion */}
                    <Accordion className='closeacc'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <strong>Yesterday</strong>
                        </AccordionSummary>
                        <AccordionDetails className="openacc">
                        <div>
                                {/* card description 1 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        {/* card headings */}
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        {/* card input infomation */}
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        {/* carousel of description */}
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                <Carousel>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <div className="btwcards"/>

                                {/* card description 2 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                {/* card description 3 */}
                                <div className='btwcards'/>
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmond tempor labore et</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                <div className='btwcards'/>

                                {/* card description 4 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                
                        </div>

                        </AccordionDetails>
                    </Accordion>

                    <div className='btwcards'/>

                    {/* this week accordion */}
                    <Accordion className='closeacc'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <strong>This Week</strong>
                        </AccordionSummary>
                        <AccordionDetails className="openacc">
                        <div>
                                {/* card description 1 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        {/* card headings */}
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        {/* card input infomation */}
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        {/* carousel of description */}
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                <Carousel>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <div className="btwcards"/>

                                {/* card description 2 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                {/* card description 3 */}
                                <div className='btwcards'/>
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmond tempor labore et</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                <div className='btwcards'/>

                                {/* card description 4 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                
                        </div>


                        </AccordionDetails>
                    </Accordion>

                    <div className='btwcards'/>

                    {/* last week accordion */}
                    <Accordion className='closeacc'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <strong>Last Week</strong>
                        </AccordionSummary>
                        <AccordionDetails className="openacc">
                        <div>
                                {/* card description 1 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        {/* card headings */}
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        {/* card input infomation */}
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        {/* carousel of description */}
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                <Carousel>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <div className="btwcards"/>

                                {/* card description 2 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                {/* card description 3 */}
                                <div className='btwcards'/>
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmond tempor labore et</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                <div className='btwcards'/>

                                {/* card description 4 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                
                        </div>


                        </AccordionDetails>
                    </Accordion>

                    <div className='btwcards'/>

                    {/* this month accordion */}
                    <Accordion className='closeacc'>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        >
                        <strong>This Month</strong>
                        </AccordionSummary>
                        <AccordionDetails className="openacc">
                        <div>
                                {/* card description 1 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        {/* card headings */}
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        {/* card input infomation */}
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        {/* carousel of description */}
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                <Carousel>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                    <Carousel.Item className='cardescard'>
                                                        <div className='cardestyle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    </Carousel.Item>
                                                </Carousel>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                <div className="btwcards"/>

                                {/* card description 2 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                {/* card description 3 */}
                                <div className='btwcards'/>
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Friendly</card-text>
                                            </div>
                                            <div>
                                                <card-text>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmond tempor labore et</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>

                                <div className='btwcards'/>

                                {/* card description 4 */}
                                <Card className="indivcard">
                                    <Grid container spacing={2} columns={16}>
                                        <Grid item lg={2}>
                                            <div>
                                                <strong>Category</strong>
                                            </div>
                                            <div>
                                                <strong>Tone</strong>
                                            </div>
                                            <div>
                                                <strong>Description</strong>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6}>
                                            <div>
                                                <card-text>Product Description</card-text>
                                            </div>
                                            <div>
                                                <card-text>Professional</card-text>
                                            </div>
                                            <div>
                                                <card-text>a warm and lightweight fur winter coat</card-text>
                                            </div>
                                        </Grid>
                                        <Grid item lg={8}>
                                            <Card className='instruction-carousel'>
                                                
                                                    <div className="destyle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                                    
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Card>
                                
                        </div>

                        
                        </AccordionDetails>
                    </Accordion>

                    <div className='btwcards'/>
                    

                </Grid>

            </Grid>
            
        </div>

    </div>



  )
}

export default HistoryPage
