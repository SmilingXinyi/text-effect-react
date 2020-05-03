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
            <div style={{minHeight: 200}}>
                <div style={{textAlign: 'center'}}>
                    <Effect1 title={`Hello World`}
                             expanded={expanded}
                             styles={{head: {fontSize: 24}}}/>
                </div>
            </div>
            <hr/>
            <button onClick={() => setExpanded(!expanded)}>Click</button>
            <p>
                <i>
                    <a href="https://codepen.io/esse/pen/qxmqPQ?__cf_chl_jschl_tk__=698208f136860da86ea49d1272905c159d9bb494-1588146771-0-AfgqpsEWFdMymLlRbGE9ONeObCRgVpQMr0soYt2OPQB0sslZZyy92r2-S3EtuSJGHM-atkpLy0cMms7o5BKuuFPYwKvf-T101mQmqzjWabv-jwHx0lIcepy6RqSGbtAMy5GJ5WfrnHBzTzVSyLN5QF4Ifftx8RQji7D_XLUN7IIp6rJgO4N0iRIjZTe5RcxQpV-DiGr_BpA16KgzPEMyiyvj4FCes80-XNYifZ_ZtERB87F_SxpFTIQxWTQp_TsPzsa-dAtRH63SE2H30_dskxzmwUTGCvHlhWYKXW75N4ntPwCc14llZ4qQ8Z1W8VG4GgfyKnUmVvpBno806v17A_9l75hKPSbJjOVGhd-EHjG8"
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
