/**
 * @file (index)
 * Created by xinyi on 2020/4/29.
 */

import React from 'react';
import PropTypes from 'prop-types';

const Effect1 = (
    {
        title,
        expanded,
        styles: {head: headStyle, body: bodyStyle, frame: frameStyle},
        classes: {head: headClass, body: bodyClass, frame: frameClass},
        ...rest
    }
) => {
    title.trim();

    const defaultStyles = {
        frame: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            textAlign: 'center',
            display: 'inline'
        },
        head: {
            display: 'inline-block',
            paddingLeft: 0,
            transition: 'all .5s ease-in-out'
        },
        headPadding: {
            paddingLeft: '.5rem'
        },
        body: {
            display: 'inline-block',
            opacity: 0,
            maxWidth: 0,
            transition: 'all .5s ease-in-out'
        },
        expandedBody: {
            maxWidth: '1em',
            opacity: 1,
            borderBottom: 0
        },
        underline: {
            borderBottom: 'solid 1px'
        }
    };

    const words = title.split(' ');

    const styles = {
        frame: Object.assign({}, defaultStyles.frame, frameStyle, !expanded && defaultStyles.underline),
        head: Object.assign({}, defaultStyles.head, headStyle),
        body: Object.assign({}, defaultStyles.body, bodyStyle)
    };

    return (
        <ul className={frameClass} style={styles.frame}>
            {words.map((word, i) => (
                <React.Fragment key={i}>
                    <li style={
                        Object.assign({}, styles.head, expanded && i > 0 ? defaultStyles.headPadding : {})
                    }
                        className={headClass}
                    >
                        {word.slice(0, 1)}
                    </li>
                    {
                        word.substring(1).split('').map((char, j) => (
                            <li
                                key={`${i}_${j}`}
                                className={bodyClass}
                                style={
                                    expanded
                                        ? Object.assign({}, styles.body, defaultStyles.expandedBody)
                                        : styles.body
                                }
                            >{char}</li>
                        ))
                    }
                </React.Fragment>
            ))}
        </ul>
    );
};

Effect1.defaultProps = {
    styles: {},
    classes: {}
};

Effect1.proptypes = {
    title: PropTypes.string.isRequired,
    styles: PropTypes.object,
    classes: PropTypes.object,
    expanded: PropTypes.bool
};

export default Effect1;
