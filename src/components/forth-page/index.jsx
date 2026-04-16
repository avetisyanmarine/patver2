import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo3 from "../../assets/image/examp2.jpg";
import Bant from "../../assets/image/bant.png";

export const ForthPage = () => {
  return (
    <ForthPagePart>
      <Container>
        <ForthPagePartContext>
          <ForthPageBlock
            ImageSrc={Church}
            bigText={"Զորավոր Սուրբ Աստվածածին Եկեղեցի"}
            mapSrc={"https://maps.app.goo.gl/exU8dNdNTm9ut2uX8"}
          />
          <ForthPageBlock
            ImageSrc={Restaurant}
            bigText={"Օջախ Ռեստորանային Համալիր"}
            mapSrc={"https://maps.app.goo.gl/vSjZUzzeoEvgKucL6"}
          />
        </ForthPagePartContext>
        <div className="relative mt-10">
          <img
            src={Photo3}
            alt="Restaurant"
            className="w-full rounded-[15px] grayscale contrast-125 brightness-105"
          />
        </div>
      </Container>

      <div className="text-center my-14">
        <h2>Դետալներ</h2>
        <img src={HeartLine} className="mx-auto my-8 w-[300px]" />
        <Flexible
          className=" font-[600] px-5"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Ձեզ հետ բերեք ՍԵՐ, ժպիտներ ու անսահման դրական էմոցիաներ.
        </Flexible>
        <hr className="mx-auto my-8 w-[300px]" />
      </div>
    </ForthPagePart>
  );
};
