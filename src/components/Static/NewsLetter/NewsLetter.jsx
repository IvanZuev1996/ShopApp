import { Send } from '@mui/icons-material';
import React from 'react';
import './NewsLetter.scss';

const NewsLetter = () => (
    <div className="news-container">
        <h1 className="news-title">NewsLetter</h1>
        <p className="news-desc">
            Get timely updates from your favorite products.
        </p>
        <div className="news-send-form">
            <input type="text" placeholder="Your email" className="news-input" />
            <a href="#" className="news-button">
                <Send />
            </a>
        </div>
    </div>
);

export default NewsLetter;
