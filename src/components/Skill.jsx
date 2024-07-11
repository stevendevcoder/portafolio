import React from 'react';

function Skill({ tec }){
    return (
        <div className="skill" key={tec.nombre}>
            <div 
                className={'logo-skill ' + tec.nombre.toLowerCase()}
                
            ></div>
            <p>{tec.nombre}</p>
        </div>
    );
}

export default Skill;