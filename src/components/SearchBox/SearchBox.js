import React, { Component, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetcher } from '../store/reducer';
import './SearchBox.css';

function SearchBox() {
    const [searchLine, setSearchLine] = useState('')
    const dispatch = useDispatch()
    const searchLineChangeHandler = (e) => {
        setSearchLine(e.target.value);
        console.log(e.target.value)
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(fetcher(searchLine))
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    Искать фильм по названию:
                    <input
                        type="text"
                        className="search-box__form-input"
                        placeholder="Например, Shawshank Redemption"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!searchLine}
                >
                    Искать
                </button>
            </form>
        </div>
    );
}


export default SearchBox;