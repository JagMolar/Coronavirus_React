import React from 'react';
import PropTypes from 'prop-types';
import Data from './Data';
import FlexContainer from './FlexContainer';

const DataList = ({deaths, confirmed, recovered}) =>(
    <FlexContainer>
        <Data title="Muertes" number={deaths} />
        <Data title="Casos Confirmados" number={confirmed} />
        <Data title="Casos Recuperados" number={recovered} />
    </FlexContainer>

);
//Data.defaultProps ={deaths: 1,};
DataList.propTypes = {
    deaths: PropTypes.number.isRequired,
    confirmed: PropTypes.number.isRequired,
    recovered: PropTypes.number.isRequired
};

export default DataList;