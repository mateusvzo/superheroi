import React, { useState, FormEvent } from 'react';
import {Title, Form, Listas, Error} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

interface Repository {
    results: [
        {
            id: string;
            name: string;
            image: {
                url: string;
            }
        },
    ];

}


const Dashboard: React.FC = () =>{
    const [newHeroi, setNewHeroi] = useState('');
    const [herois, setHerois] = useState<Repository[]>([]);
    const [inputError, setInputError] = useState('');

    async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void>{
        e.preventDefault();

        if(!newHeroi) {
            setInputError('Digite o nome do heroi');
            return;
        };

        try {
            const response = await api.get<Repository>(`/search/${newHeroi}`);
            //console.log(response.data)
            const repository = response.data
            //console.log(repository.results[0].image.url)
            setHerois([...herois, repository])
            setNewHeroi('');
            setInputError('');
        } catch (err) {
            setInputError('Heroi Inexistente!');
        };

    };

    return (
        <>
            <Title>Bem Vindo a Pagina dos SuperHerois</Title>
            <Form onSubmit={handleAddRepository}>
                <input
                value={newHeroi}
                onChange={(e) => setNewHeroi(e.target.value)}
                placeholder= "Digite o nome do Heroi" />
                <button type="submit">Chamar Heroi</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}
            <Listas>
                {herois.map((heroi =>(
                <Link key={heroi.results[0].id} to={`/powerstats/${heroi.results[0].name}`}>
                    <img src={heroi.results[0].image.url} alt= {heroi.results[0].name}/>
                    <strong>{heroi.results[0].name}</strong>
                </Link>)))
                }
            </Listas>
        </>

    )
};


export default Dashboard;
