import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-width: 400px',
    md: 'max-width: 600px',
    lg: 'max-width: 800px',
    xl: 'max-width: 1000px',
    full: 'max-width: 95vw'
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px',
        animation: 'fadeIn 0.2s ease-in-out'
      }}
      onClick={handleBackdropClick}
    >
      <div 
        className="card"
        style={{
          ...({ [sizeClasses[size]]: true }),
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          animation: 'scaleIn 0.2s ease-in-out'
        }}
      >
        <div className="card-header" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid var(--border)'
        }}>
          <h2 className="card-title" style={{ margin: 0 }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text)'
            }}
          >
            <X size={24} />
          </button>
        </div>
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
