import { useRef, useState } from 'react'
import type { Gif } from '../components/interfaces/gif.interface';
import { getGifsByQuery } from '../actions/get-gifs-by-query.action';
import { mockGifs } from '../../mock-data/gifs.mock';

/* const gifsCache: Record<string, Gif[]> = {}; */

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>(mockGifs);
    const [previusTerms, setPreviusTerms] = useState<string[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handleTermClicked = async (term: string) => {

        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
        gifsCache.current[term] = gifs;
    };

    const handleSearch = async (search: string) => {
        const qwery = search.trim().toLocaleLowerCase();

        if (qwery === '' || previusTerms.includes(qwery)) return;

        const isAtLimit = previusTerms.length > 7;
        const terms = isAtLimit ? previusTerms.slice(0, -1) : previusTerms;

        setPreviusTerms([qwery, ...terms]);

        const gifs = await getGifsByQuery(qwery);
        setGifs(gifs);
        gifsCache.current[qwery] = gifs;
    }

    return {
        // Properties
        gifs,

        // Methods
        previusTerms,
        handleTermClicked,
        handleSearch
    }
}
