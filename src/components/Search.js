import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    
    const [ term, setTerm ] = useState('programming');
    const [ results, setResults ] = useState([]);

    // console.log('term',term);
    // console.log('outside',results);

    useEffect (() => {
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            });
            // console.log('1',results);
            setResults(data.query.search);
            // console.log('2',results);  
        } 

        if( term && !results.length ) {
            searchWiki();
        } else {
            const timeoutId= setTimeout(() => {
                if(term) {
                    searchWiki();
                }
            },1000);
    
            return () => {
                clearTimeout(timeoutId);
            }
        }
       
        
    }, [term]);


    const renderedList = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        href={`https://en.wikipedia.org/?curid=${result.pageid}`} 
                        className="ui button"
                    >Go</a> 
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }} ></span>                
                </div>
            </div>
        );
    });
    
    return (
        <div className="ui segment">
            <div className= "ui form">
                <div className="field">
                    <label>Enter Search Term:</label>
                    <input  
                        value = {term} 
                        onChange={e=> setTerm(e.target.value)} 
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">
                {renderedList}
            </div>
        </div>
    );
}

export default Search;