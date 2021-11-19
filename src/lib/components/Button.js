import React from 'react'
import './button.css'

export default function Button({ size = undefined, variant = undefined, label = "", onClick = () => { } , style={}}) {
    return (
        <div className="btn-wrapper">
            <button
                className={`default-style btn-${variant} btn-${size} btn-${style}`}>  {label}  </button>
        </div>
    );
}