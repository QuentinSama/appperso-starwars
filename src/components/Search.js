import React from 'react';
import { useEffect, useState } from 'react';
import {format} from "date-fns"
import { Card, Grid} from 'semantic-ui-react';
import "./Search.css";
// import Pages from './Pages';

function Search() {

    const [people, setPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    // const [nextPageUrl, setNextPageUrl] = useState();
    // const [previousPageUrl, setPreviousPageUrl] = useState();

    const fetchPeople = async () => {
        return await fetch('https://swapi.py4e.com/api/people/?format=json')
            .then(response => response.json())
            .then(data => {
                setPeople(data.results)
                // setNextPageUrl(data.results.next)
                // setPreviousPageUrl(data.results.previous)
            });
    }

    useEffect(() => { fetchPeople() }, []);

    //  function gotoNextPage(){
    //      setPeople(nextPageUrl)
    // }

    
    //  function gotoPreviousPage(){
    //      setPeople(previousPageUrl)
    //  }

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    };
    
    return (
        <>
            <div className="searchBar">
            <h1 className="title">Liste des personnages de StarWars</h1>
                <input
                    type="text"
                    name="searchbar"
                    id="searchbar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                />
            </div>
            <div className="search_results">
                <Grid columns={3}>
                    {people.filter((val) =>{
                        return val.name.toLowerCase().includes(searchTerm.toLowerCase());
                    }).map((val) => {
                        let editedDate = format(new Date(val.edited),"dd-MM-yyyy");
                        let createdDate = format(new Date(val.created),"dd-MM-yyyy");
                        return(
                            <div className="search_result">
                            <Grid.Column key={val.id}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{val.name}</Card.Header>
                                        <Card.Description>
                                            <strong>Taille</strong>
                                            <p>{val.height}</p>
                                            <strong>Poids</strong>
                                            <p>{val.mass}</p>
                                            <strong>Couleur des cheveux</strong>
                                            <p>{val.hair_color}</p>
                                            <strong>Couleur des yeux</strong>
                                            <p>{val.eye_color}</p>
                                            <strong>Genre</strong>
                                            <p>{val.gender}</p>
                                            <strong>Date de création</strong>
                                            <p>{createdDate}</p>
                                            <strong>Dernières modifications</strong>
                                            <p>{editedDate}</p>
                                            <br></br>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                            </div>
                        )
                    })}
                </Grid>
                {/* <Pages
                gotoNextPage={nextPageUrl ? gotoNextPage : null}
                gotoPreviousPage={previousPageUrl ? gotoPreviousPage : null}
                /> */}
            </div>
        </>
    );
}

export default Search
