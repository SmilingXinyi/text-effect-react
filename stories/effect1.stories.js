import React, {useState} from 'react';

import Effect1 from '../src/Effect1';

export default {
    component: Effect1,
    title: 'Effect1'
};

export const Example1 = () => {
    const [expanded, setExpanded] = useState(false);
    return (
        <React.Fragment>
            <div style={{textAlign: 'center'}}>
                <Effect1 title={`Hello World`}
                         expanded={expanded}
                         styles={{head: {fontSize: 24}}} />
            </div>
            <button onClick={() => setExpanded(!expanded)}>Click</button>
        </React.Fragment>
    );
};
