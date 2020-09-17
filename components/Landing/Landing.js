
import dynamic from 'next/dynamic'
import './Landing.scss'; 
import { useState, useEffect } from 'react'; 

const Cards = dynamic(() => import('../Card/Cards'));
const Filters = dynamic(() => import('../Filter/Filters'));

const Landing = () => {

    const [values, setValues] = useState({
        filters: {}
    });
    const { filters } = values;

    
    const onClick = (payload) => {
        setValues( { ...values, filters: payload } );
      }

    return(
        <React.Fragment>
            <Filters onClick={ onClick } filters = { filters }/>
            <Cards filters = { filters }/>
        </React.Fragment>
    )
}

export default Landing;