import React, { useState } from 'react';


const Accordion = (props) => {

    const [ activeIndex, setActiveIndex ] = useState(null);
    
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }
    
    const renderedList= props.itemsList.map(( item,index )=> {
        
        const active = index === activeIndex ? 'active' : '' ;

        return (
            <React.Fragment key={item.title} >
                <div onClick={()=> onTitleClick(index)} className={`title ${active}`}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>                    
                </div>
            </React.Fragment>
        );
    });    
    
    return (
        <div className="ui styled accordion">{renderedList}</div>
    );
}

export default Accordion;