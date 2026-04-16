import MainPhoto from "../../assets/image/mainPhotoExample.jpg";
import { Container, Flexible } from "../../GlobalStyle";
import { FirstPagePart, FirstPagePartContext } from "./styled";
import Srtik from "/heartline.png";

export const FirstPage = () => {
  return (
    <FirstPagePart>
      <img className="grayscale contrast-125 brightness-105" src={MainPhoto} />
      <Container>
        <FirstPagePartContext>
          {/* <div className="mt-7 text-[#2D2929] maintext">
            <p>Wedding day</p>
            <h3>Robert & Maria</h3>
            <p>26.06.2026</p>
          </div> */}
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
