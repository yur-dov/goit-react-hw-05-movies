import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import api from '../../components/service/serviceApi'
import MoviesList from '../../components/MoviesList/MoviesList'
import { toast } from 'react-toastify';
import css from './Movies.module.css'

const Movies = () => {
    const [name, setName] = useState('');
    const [films, setFilms] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query');

    useEffect(() => {
        (() => {
            query &&
                api.searchFilms(query).then(response => {
                    if (response.results.length === 0) {
                        toast.warning(`Not found!`);
                    }
                    setFilms(response.results);
                });
        })();
    },[query]);

    const handleChange = event => {
        setName(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (name.trim() === '') {
        return toast.error('Please enter a name to search!');
        }
        setSearchParams({ query: name });
        setName('');
    };

        
    
    return (
        <div>
            <form className={css.Form} onSubmit={handleSubmit}>
                <input
                    className={css.Input}
                    type="text"
                    placeholder="Enter the name of the movie"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    required
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                />
                <button className={css.Button} type="submit">Search</button>
            </form>
            {films.length > 0 && <MoviesList films={films} />}
        </div>
    )
}
export default Movies;