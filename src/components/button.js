import React from 'react'

export default function Button({ text, buttonClass }) {
    return (
        <button className={`btn btn-${buttonClass}`}>{text}</button>
    )
}
