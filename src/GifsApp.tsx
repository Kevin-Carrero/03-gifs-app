import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviusSearches } from './gifs/components/PreviusSearches'
import { GifList } from './gifs/components/GifList'

export const GifsApp = () => {

    const [previusTerms, SetpreviusTerms] = useState(['Red Dead Redemption 2']);

    const handleTermClicked = (term: string) => {
        console.log({ term });

    };

    const handleSearch = (search: string) => {
        console.log({ search });
    }

    return (
        <>

            {/* Header */}
            <CustomHeader tittle='Buscador de Gifs' description='Descubre y comparte el Gif perfecto' />

            {/* Search */}
            <SearchBar
                placeHolder='Buscar Gifs'
                onSearch={handleSearch}
            />

            {/* Busquedas previas */}
            <PreviusSearches
                searches={previusTerms}
                onLabelCliecked={handleTermClicked}
            />

            {/* Lista de Gifts */}
            <GifList gifs={mockGifs} />
        </>
    )
}
