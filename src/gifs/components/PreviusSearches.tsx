
interface Props {
    searches: string[];

    onLabelCliecked: (term: string) => void;
}

export const PreviusSearches = ({ searches, onLabelCliecked }: Props) => {
    return (
        <div className='previous-searches'>
            <h2>Busquedas previas</h2>
            <ul className='previous-searches-list'>
                {
                    searches.map(search => (
                        <li key={search} onClick={() => onLabelCliecked(search)}>
                            {search}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
