import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      <Link to="/" className="breadcrumb-item">
        <Home size={16} />
        <span>Home</span>
      </Link>
      {items && items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight size={16} className="breadcrumb-separator" />
          {item.path ? (
            <Link to={item.path} className="breadcrumb-item">
              {item.label}
            </Link>
          ) : (
            <span className="breadcrumb-item active">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
