import React from 'react';
import './Card.css';

export default function Card({data}){
    return(
        <div className="card">
            <ul>
                <li>Title: {data.title}</li>
                <li>Subtitle: {data.subtitle}</li>
                <li>Author: {data.author}</li>
                <li>Isbn: {data.isbn}</li>
            </ul>
        </div>
    )
}