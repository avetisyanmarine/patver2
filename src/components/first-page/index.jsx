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
          <div className="absolute flex items-center justify-center mt-[30px] text-white w-full">
            {/* Օր */}
            <div className="px-6 leading-none flex items-center h-full mb-[19px]">
              <h1 className="m-0 p-0">26</h1>
            </div>

            {/* Գիծ 1 */}
            <div className="w-[1px] h-[30px] bg-white"></div>

            {/* Ամիս */}
            <div className="px-6 leading-none flex items-center h-full mb-[19px]">
              <h1 className="m-0 p-0">06</h1>
            </div>

            {/* Գիծ 2 */}
            <div className="w-[1px] h-[30px] bg-white"></div>

            {/* Տարի */}
            <div className="px-6 leading-none flex items-center h-full mb-[19px]">
              <h1 className="m-0 p-0">26</h1>
            </div>
          </div>
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
