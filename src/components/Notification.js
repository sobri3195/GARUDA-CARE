import React from 'react';
import { CheckCircle, AlertTriangle, Info, XCircle, X } from 'lucide-react';

const Notification = ({ notification, onClose }) => {
  if (!notification) return null;

  const { message, type } = notification;

  const icons = {
    success: <CheckCircle size={20} />,
    warning: <AlertTriangle size={20} />,
    info: <Info size={20} />,
    error: <XCircle size={20} />
  };

  const alertClass = `alert alert-${type}`;

  return (
    <div 
      className={alertClass}
      style={{
        position: 'fixed',
        top: '80px',
        right: '20px',
        zIndex: 10000,
        minWidth: '300px',
        maxWidth: '500px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        animation: 'slideInFromRight 0.3s ease-out',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
      }}
    >
      {icons[type]}
      <span style={{ flex: 1 }}>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            display: 'flex',
            alignItems: 'center',
            color: 'inherit'
          }}
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Notification;
