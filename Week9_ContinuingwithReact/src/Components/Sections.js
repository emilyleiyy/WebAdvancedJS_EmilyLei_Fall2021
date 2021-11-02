import React from 'react'
import '../App.css';
import Project from './Projects';
import { useState } from 'react';

const Sections = (list) => {
    return (
        <div key={list.id} className='sections'>
            <h2>{list.name}</h2>
            <h3>{list.duration}</h3>
            <p>{list.description1}</p>
            <p>{list.description2}</p>
            <p>{list.description3}</p>
        </div>
    )
}

export default Sections
