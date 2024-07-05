import * as React from 'react';

import Card from '@mui/material/Card';

export default function CurrentBudget({ budgetDetails }) {

    return (
        <div >
            <Card variant="outlined">{budgetDetails}</Card>
        </div>
    )
}