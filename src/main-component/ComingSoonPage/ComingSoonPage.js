import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ComingSoonPage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="coming-soon-page">
            <div className="coming-soon-container">
                <div className="coming-soon-content">
                    <div className="icon-wrapper">
                        <i className="fi flaticon-rocket"></i>
                    </div>
                    <h1>Coming Soon</h1>
                    <p>We're working on something exciting! This feature will be available soon.</p>
                    <p className="sub-text">Stay tuned for updates on enterprise IT solutions, distribution insights, and technology news.</p>
                    <button onClick={handleGoBack} className="back-button">
                        <i className="ti-arrow-left"></i> Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonPage;
