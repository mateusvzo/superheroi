import React, {useEffect, useState} from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api';
import {Title, Form} from './styles';
import { FiArrowLeft } from 'react-icons/fi'


interface RepositoryParams {
    repository: string;
}

interface Repository {
    id: string;
    name: string;
    image: {
        url: string;
    };
    powerstats: {
        combat: string;
        durability: string;
        intelligence: string;
        power: string;
        speed: string;
        strength: string;
    }

}

const Powerstats: React.FC = () => {
    const [poder, setPoder] = useState<Repository>();
    const {params} = useRouteMatch<RepositoryParams>();

    useEffect(() => {
        async function loadData (): Promise<void> {
            const response = await api.get(`/search/${params.repository}`)
            console.log(response.data.results)
            setPoder(response.data.results[0])
        }
        loadData()

    }, [params.repository]);

    return (
        <>
            <Title>Poder</Title>
            <Form>
                <h1>Nome: {poder?.name}</h1>
                <div>
                    <p>Inteligencia: {poder?.powerstats.intelligence}</p>
                    <p>Força: {poder?.powerstats.power}</p>
                    <p>Velocidade: {poder?.powerstats.speed}</p>
                    <p>Durabilidade: {poder?.powerstats.durability}</p>
                    <p>Poder: {poder?.powerstats.strength}</p>
                    <p>Combate: {poder?.powerstats.combat}</p>
                </div>
                <Link to={'/'}>
                    <FiArrowLeft id="button" size= {40} color="#FFF"/>
                </Link>

            </Form>
        </>
    )
};


export default Powerstats;
