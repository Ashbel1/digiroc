import React from 'react';
import './Shimmer.css';

const Shimmer = ({ width = '100%', height = '200px', className = '' }) => {
    return (
        <div 
            className={`shimmer-wrapper ${className}`}
            style={{ width, height }}
        >
            <div className="shimmer"></div>
        </div>
    );
};

export const ShimmerCard = () => (
    <div className="shimmer-card">
        <Shimmer height="200px" className="shimmer-image" />
        <div className="shimmer-content">
            <Shimmer height="24px" width="80%" />
            <Shimmer height="16px" width="60%" />
            <Shimmer height="16px" width="90%" />
        </div>
    </div>
);

export const ShimmerList = ({ count = 3 }) => (
    <>
        {Array.from({ length: count }).map((_, i) => (
            <ShimmerCard key={i} />
        ))}
    </>
);

export default Shimmer;
