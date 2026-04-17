import { Container, Flexible } from "../../GlobalStyle";
import { ForthPageBlock } from "./fortg-page-block";
import { ForthPagePart, ForthPagePartContext } from "./styled";
import Church from "../../assets/image/church.jpg";
import Restaurant from "../../assets/image/restaurant.jpg";
import HeartLine from "../../assets/image/heartline.png";
import Photo1 from "../../assets/image/photo1.jpg";

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
            src={Photo1}
            alt="Restaurant"
            className="w-full rounded-[15px] grayscale brightness-105 contrast-100"
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
