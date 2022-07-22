import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons(props) {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const toggles = props.list.map((el, idx)=>{
        const toggle_e = (e)=>{
            if(e.target.ariaPressed){
                const search = new URL(window.location).searchParams.get('search');
                props.e(el.api, search);
            }   
        }
        return <ToggleButton 
            key={idx}
            value={el.label}
            onClick={toggle_e}
            style={{"fontWeight":"bold"}}
            >
                {el.label}
            </ToggleButton>
    })

    return (
        <ToggleButtonGroup
        size='large'
        value={alignment}
        exclusive
        onChange={handleAlignment}
        >
            {toggles}
        </ToggleButtonGroup>
    );
}