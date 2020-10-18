import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 25px;
    `;

export const Option = styled.TouchableOpacity`
background: ${({ bgColor }) => bgColor};
width: 150px;
height: 200px;
`;
export const Title = styled.Text``;
export const Img = styled.Image``;