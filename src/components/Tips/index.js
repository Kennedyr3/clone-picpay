import React from 'react';
import { Container, Option, Title, Img} from './styles';
import img8 from '../../imagens/08.png';

export default () => {
    return (
    <Container>
        <Option bgColor="#17264a">
            <Title>Pague suas contas sem sair de casa</Title>
            <Img source={img8}/>
        </Option>
    </Container>
    );
}