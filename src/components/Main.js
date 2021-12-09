import React from 'react';
import BanlanceDisplay from './BanlanceDisplay';
import IncomeExpenseDisplay from './IncomeExpenseDisplay';
import Title from './Title';

const Main = () => {
    return (
        <div className='Container'>
            <Title />

            <BanlanceDisplay />

            <IncomeExpenseDisplay />
        </div>
    )
}


export default Main;