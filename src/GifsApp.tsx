import { CustomHeader } from './shared/components/CustomHeader'
import { SearchBar } from './shared/components/SearchBar'
import { PreviusSearches } from './gifs/components/PreviusSearches'
import { GifList } from './gifs/components/GifList'
import { useGifs } from './gifs/hooks/useGifs'

export const GifsApp = () => {

    const { gifs, previusTerms, handleTermClicked, handleSearch } = useGifs();

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
            <GifList gifs={gifs} />
        </>
    )
}
