import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange, choice, onChoiceChange }) => {
    
    const [open, setOpen] = useState(false);
    const ref = useRef();
    
    const onBodyClick= (event)=> {
        if(ref.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    }

    useEffect (() => {
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options.map((option) => {

        if(selected.value === option.value) {
            return null;
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => {
                    onSelectedChange(option);
                    onChoiceChange(option);
                }}
            >
                {option.label}
            </div>
        ); 
    })   
    
    
    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{`Select a ${label}:`}</label>
                <div onClick={()=> setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? `visible transition` : ''}`}>
                        {renderedOptions}
                    </div>                    
                </div>
                
                {/* <div className={`ui ${selected.value} message`}>{`Hey, thank you for choosing ${selected.label}`}</div> */}
                <div className={choice ? `ui ${selected.value} message` : ''}>{choice ? `Hey, thank you for choosing ${selected.label}` : ''}</div>
            </div>
        </div>
    );
}

export default Dropdown;