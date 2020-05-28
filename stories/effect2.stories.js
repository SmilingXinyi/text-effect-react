import React from 'react';

import Effect2 from '../src/Effect2';

export default {
    component: Effect2,
    title: 'Effect2'
};

export const Example1 = () => {
    return (
        <React.Fragment>
            <div style={{minHeight: 200}}>
                <div style={{textAlign: 'center', height: 200}}>
                    <Effect2 title={`Hello World`}/>
                </div>
            </div>
            <hr/>
            <p>
                <i>
                    <a href="https://codepen.io/uzcho_/pen/LaPqWJ"
                       target="_blank"
                       referrerpolicy="no-referrer"
                    >
                        Source Code
                    </a>
                </i>
            </p>
        </React.Fragment>
    );
};
