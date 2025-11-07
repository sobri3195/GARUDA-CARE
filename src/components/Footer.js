import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-title">RS Trimatra</h3>
          <p className="footer-text">
            Sistem Informasi Rumah Sakit Trimatra - Melayani dengan Sepenuh Hati
          </p>
          <div className="footer-social">
            <Heart size={16} style={{ color: 'var(--danger)' }} />
            <span style={{ marginLeft: '8px' }}>Kesehatan Anda, Prioritas Kami</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Kontak</h4>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <Phone size={16} />
              <span>(021) 1234-5678</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} />
              <span>info@rstrimatra.id</span>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 className="footer-subtitle">Jam Operasional</h4>
          <p className="footer-text">Senin - Jumat: 08:00 - 16:00</p>
          <p className="footer-text">Sabtu: 08:00 - 12:00</p>
          <p className="footer-text">IGD: 24 Jam</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 RS Trimatra. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
