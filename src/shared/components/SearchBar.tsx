import React, { useState } from 'react'

interface SearchBarProps {
    placeHolder: string;

    onSearch: (query: string) => void;
}

export const SearchBar = ({ placeHolder = 'Buscar', onSearch }: SearchBarProps) => {

    const [search, setSearch] = useState('')

    const handleSearch = () => {
        onSearch(search);
        setSearch('');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (

        <div className='search-container'>
            <input
                type="text"
                placeholder={placeHolder}
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Buscar</button>
        </div>
    )
}
