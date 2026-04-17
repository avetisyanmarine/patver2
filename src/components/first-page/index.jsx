import MainPhoto from "../../assets/image/firstPhoto.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "/heartline.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          <h1>26.06.2026</h1>
          <div className="couples">
            <h3>Դավիթ</h3>
            <img src={Srtik} alt="Heartline" />
            <h3>Հասմիկ</h3>
          </div>
        </FirstPagePartContext>
      </Container>
    </FirstPagePart>
  );
};
