import React from 'react';
import { Container, SearchContainer, Input, SearchButton } from './styles';
import Header from '../../components/Header';
import { Feather } from '@expo/vector-icons';

function Home() {
  return(
    <Container>
      <Header title="Meus Filmes"/>
      <SearchContainer>
        <Input
          placeholder="Vingadores - A Era de Ultron"
          placeholderTextColor="#DDD"
        />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF"/>
        </SearchButton>
      </SearchContainer>
    </Container>
  )
}

export default Home;