import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='social-media'>
          <ul className='footer-social-links'>
            <li>
              <a href='https://twitter.com/Bassil_Offical' target="_blank" rel="noreferrer">Twitter</a>
            </li>
            <li>
              <a href='https://www.facebook.com/profile.php?id=100004515360178' target="_blank" rel="noreferrer">Facebook</a>
            </li>
            <li>
              <a href='https://instagram.com/bassil_qadi' target="_blank" rel="noreferrer">Instagram</a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/bassil-alqadi-929164195' target="_blank" rel="noreferrer">Linkedin</a>
            </li>
            <li>
              <a href='https://github.com/bassil-97' target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
        <div className='footer-copyrights'>
          <p>&copy; 2022 All rights reserved.</p>
        </div>
    </div>
  )
}
