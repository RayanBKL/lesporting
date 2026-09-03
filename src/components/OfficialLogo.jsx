import React from 'react'

export default function OfficialLogo({ className = '', style = {}, height = 80, invert = false }) {
  return (
    <div
      className={`logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style
      }}
    >
      <img
        src="/logo-official.png"
        alt="Le Sporting by Papüm Saint-Tropez"
        style={{
          height: `${height}px`,
          width: 'auto',
          objectFit: 'contain',
          filter: invert ? 'brightness(1.2)' : 'none',
          display: 'block'
        }}
      />
    </div>
  )
}
