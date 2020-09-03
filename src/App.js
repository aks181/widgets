import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
    {
        title: "What is React?",
        content: "React is the most popular JS library these days. React is implemented through the use of components."
    },
    {
        title: "Why to use React?",
        content: "React is the most popular JS library these days."
    },
    {
        title: "How to implement React?",
        content: "React is implemented through the use of components."
    }
];

const colors = [
    {
        label: 'Dangerous red',
        value: 'red'
    },
    {
        label: 'Soothing green',
        value: 'green'
    },
    {
        label: 'Mystical yellow',
        value: 'yellow'
    },  
    {
        label: 'Quiet Orange',
        value: 'orange'
    },  
    {
        label: 'Peaceful Olive',
        value: 'olive'
    },  
    {
        label: 'Majestic blue',
        value: 'blue'
    }
]


export default () => {
    
    const [selected, setSelected] = useState({label:'',value:''});
    const [showDropdown, setShowDropdown] = useState(true);
    const [choice, setChoice] = useState('');
    
    return (
        
        <div>
            <Header />
            <Route path= '/'>
                <Accordion itemsList={items} />
            </Route>

            <Route path= '/search'>
                <Search />
            </Route>

            <Route path= '/dropdown'>
                {
                    showDropdown 
                    ? <div onClick={() => setShowDropdown(!showDropdown)} className="ui button">Hide Dropdown</div>
                    : <div onClick={() => setShowDropdown(!showDropdown)} className="ui button">Show Dropdown</div>
                }
                {
                    showDropdown 
                    ? <Dropdown 
                        label= 'Color'
                        options={colors}
                        selected={selected}
                        onSelectedChange={setSelected}
                        choice={choice}
                        onChoiceChange={setChoice}
                    /> 
                    : null
                }
            </Route>

            <Route path= '/translate'>
                <Translate />
            </Route>
                       
            
            
            
            
            
        </div>
    );
}