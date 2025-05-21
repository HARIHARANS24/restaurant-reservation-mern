import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-row">
          <div className="footer-left">
            <h2>The Fork & Flame</h2>
          </div>
          <div className="footer-right">
            <p>Coimbatore, Tamilnadu, India</p>
            <p>Open: 05:00 PM - 12:00 AM</p>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-left">
            <p>Developed By HARIHARAN-S</p>
          </div>
          <div className="footer-right">
            <p>All Rights Reserved © {new Date().getFullYear()} HARIHARAN-S</p>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-left">
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="footer-right">
            <a href="/terms-and-conditions">Terms & Conditions</a>
          </div>
        </div>

      </div>

      <style jsx>{`
        .footer {
          background-color: #222;
          color: #eee;
          padding: 3rem 2rem;
          font-family: Arial, sans-serif;
          font-size: 0.95rem;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
          padding: 1rem 0;
          border-bottom: 1px solid #444;
          gap: 1rem;
        }

        .footer-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }

        .footer-left h2 {
          margin: 0;
          font-size: 1.75rem;
          font-weight: 700;
          color: #e25822;
        }

        .footer-left p,
        .footer-right p,
        .footer-left a,
        .footer-right a {
          margin: 0;
          color: #ccc;
          text-decoration: none;
        }

        .footer-left a:hover,
        .footer-right a:hover {
          color: #e25822;
          text-decoration: underline;
        }

        @media (max-width: 600px) {
          .footer-row {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
