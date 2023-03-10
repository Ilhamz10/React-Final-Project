import React, { Component, useState } from 'react';
import './ListPage.css';

function ListPage() {
    const [movies] = useState([
        { title: 'The Godfather', year: 1972, imdbID: 'tt0068646' }
    ])
    // TODO: запрос к сервер на получение списка
    // TODO: запросы к серверу по всем imdbID
    return (
        <div className="list-page">
            <h1 className="list-page__title">Мой список</h1>
            <ul>
                {movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <a href="https://www.imdb.com/title/tt0068646/" target="_blank">{item.title} ({item.year})</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default ListPage;