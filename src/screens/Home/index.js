import React from 'react';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './style';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';
import Tips from '../../components/Tips';

export default () => {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                    <BalanceContainer>
                        <BalanceTitle>Meu Saldo</BalanceTitle>
                        <Balance>R$ 0,00</Balance>
                    </BalanceContainer>
                    <AntDesign name="gift" size={30} color="#10c86e" />
                </Header>
                <Suggestions></Suggestions>
                <Activities></Activities>
                <Tips></Tips>
            </Container>
        </Wrapper>
    );
}