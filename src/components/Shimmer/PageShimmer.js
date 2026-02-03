import React from 'react';
import './PageShimmer.css';

const PageShimmer = () => {
    return (
        <div className="page-shimmer-wrapper">
            {/* Header Shimmer */}
            <div className="header-shimmer">
                <div className="shimmer-box logo-shimmer"></div>
                <div className="nav-shimmer">
                    <div className="shimmer-box nav-item"></div>
                    <div className="shimmer-box nav-item"></div>
                    <div className="shimmer-box nav-item"></div>
                    <div className="shimmer-box nav-item"></div>
                    <div className="shimmer-box nav-item"></div>
                </div>
            </div>

            {/* Hero/Banner Shimmer */}
            <div className="hero-shimmer">
                <div className="shimmer-box hero-title"></div>
                <div className="shimmer-box hero-subtitle"></div>
                <div className="shimmer-box hero-button"></div>
            </div>

            {/* Content Sections Shimmer */}
            <div className="content-shimmer">
                {/* Section 1 */}
                <div className="section-shimmer">
                    <div className="shimmer-box section-title"></div>
                    <div className="shimmer-grid">
                        <div className="shimmer-box card-shimmer"></div>
                        <div className="shimmer-box card-shimmer"></div>
                        <div className="shimmer-box card-shimmer"></div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="section-shimmer">
                    <div className="shimmer-box section-title"></div>
                    <div className="shimmer-grid">
                        <div className="shimmer-box card-shimmer"></div>
                        <div className="shimmer-box card-shimmer"></div>
                        <div className="shimmer-box card-shimmer"></div>
                        <div className="shimmer-box card-shimmer"></div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="section-shimmer">
                    <div className="shimmer-box section-title"></div>
                    <div className="shimmer-grid-two">
                        <div className="shimmer-box large-card"></div>
                        <div className="shimmer-box large-card"></div>
                    </div>
                </div>
            </div>

            {/* Footer Shimmer */}
            <div className="footer-shimmer">
                <div className="shimmer-box footer-content"></div>
            </div>
        </div>
    );
};

export default PageShimmer;
