/**
 * @file (index)
 * Created by xinyi on 2020/5/3.
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Effect2 = (
    {
        title,
    }
) => {
    title.trim();

    const defaultStyels = {
        blobs: {
            position: 'absolute'
        }
    };

    return (
        <h1 style={defaultStyels.frame}>
            {title}
            <div className="blobs_1"></div>
            <div className="blobs_2"></div>
            <div className="blobs_3"></div>
            <div className="blobs_4"></div>
            <div className="blobs_5"></div>
            <div className="blobs_6"></div>
            <div className="blobs_7"></div>
        </h1>
    );
};


export default Effect2;
