import React from 'react';
import './Home.css'; // import custom styles

function Example2({ goBack }) {
    return (
        <div className="example-container">
            <div className="example-card">
                <div className="example-header">Example 2 Component</div>

                <div className="example-body">
                    <p>This is Example2 component!</p>
                    <button 
                        className="example-button" 
                        onClick={goBack}
                    >
                        ⬅ Back to Example
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Example2;
