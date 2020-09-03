import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]

const Translate = () => {
    const [ language, setLanguage ] = useState(options[2]); 
    const [ text, setText ] = useState('');
    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter Text</label>
                    <input value={text} onChange={(e)=> setText(e.target.value)} />
                </div>
            </div><br />
            <Dropdown label={'Language'} options={options} selected={language} onSelectedChange={setLanguage} onChoiceChange={setLanguage} />
            <hr />
            <Convert text={text} language={language} />
        </div>
    );
}

export default Translate;