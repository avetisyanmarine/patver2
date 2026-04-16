import {
  ThirdPagePart,
  ThirdPagePartCalendar,
  ThirdPagePartContext,
  ThirdPagePartMini,
} from "./styled";
import { Container } from "../../GlobalStyle";
import Haverjutyun from "../../assets/image/haverjutyun.png";
import Church from "../../assets/image/church.png";
import Kenac from "../../assets/image/kenac.png";
import { ThirdPageBlock } from "./third-page-block";

export const ThirdPage = () => {
  return (
    <ThirdPagePart>
      <Container>
        <h2 style={{ marginBottom: "40px" }}>Ծրագիր</h2>
        <ThirdPagePartContext>
          <ThirdPageBlock
            // uniqueMargin={50}
            imageSize={70}
            ImageSrc={Haverjutyun}
            number={"12:00"}
            bigText="ՀԱՐՍԻ ՏՈՒՆ"
            // smallText="Այստեղ կարող է լինել Ձեր հասցեն"
          />
          <ThirdPageBlock
            imageSize={80}
            ImageSrc={Church}
            number={"14:00"}
            bigText="ՊՍԱԿԱԴՐՈՒԹՅՈՒՆ"
            smallText="Զորավոր Սուրբ Աստվածածին Եկեղեցի"
          />
          <ThirdPageBlock
            line={true}
            ImageSrc={Kenac}
            imageSize={80}
            number={"18:00"}
            bigText="ՀԱՐՍԱՆՅԱՑ ՀԱՆԴԻՍՈՒԹՅՈՒՆ"
            smallText="Օջախ ռեստորան"
          />
        </ThirdPagePartContext>
        <ThirdPagePartMini>
          {/* <h3>Սիրով սպասում ենք</h3> */}
          <hr />
        </ThirdPagePartMini>
      </Container>
    </ThirdPagePart>
  );
};
