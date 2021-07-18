import React from 'react';

import * as Logo from '../Brands';
import './styles.css';

export const Footer: React.FC = () => {
  return (
  <footer>
    <h3>Realizadores:</h3>
    <Logo.VTEX />
    <Logo.WeDigi />
    <Logo.GamaAcademy />
    <Logo.AWS />
    <Logo.ACCT />
  </footer>
  );
}