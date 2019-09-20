import React from 'react';
import './PreloaderSmall.css';

const PreloaderSmall = () => {
    return (
        <div className='lds-css ng-scope'>
            <div className="lds-spinner" style={{ width: '100%', height: '100%', margin: "0 auto" }}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
}

export default PreloaderSmall;