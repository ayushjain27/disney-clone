import styled from "styled-components"

const Detail = () => {
    return (
        <Container>
            <Background>
                <img src="" alt="Error" />
            </Background>

            <ImageTitle>
                <img src="" alt="Error" />
            </ImageTitle>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-htight: (100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;

        @media (max-width: 768px){
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 0px auto;
    height: 30vw;
    min-height: 170px;
    padding-bottom: 24px;
    widht: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

export default Detail;
