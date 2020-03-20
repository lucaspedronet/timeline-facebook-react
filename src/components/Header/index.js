import React from 'react';

import { Container } from './styles';
import facebook from '../../assets/facebook-1@2x.png'

export default function Header() {
  return (
    <Container>
      <img src={facebook} alt="facebook" />
      <strong>Meu Perfil</strong>
    </Container>
  );
}
