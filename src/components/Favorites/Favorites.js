import React, { Component, useState } from 'react';
import { useSelector } from 'react-redux';
import './Favorites.css';


function Favorites() {
    const favorites = useSelector(state => state.favorites)
    const [title] = useState('Новый список') 
    return (
        <div className="favorites">
            <input defaultValue="Новый список" className="favorites__name" />
            <ul className="favorites__list">
                {favorites.map((item) => {
                    return <li key={item.id}>{item.title} ({item.year})</li>;
                })}
            </ul>
            <button type="button" className="favorites__save">Сохранить список</button>
        </div>
    );
}


export default Favorites;