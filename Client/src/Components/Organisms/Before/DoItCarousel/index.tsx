import { CAROUSEL_TIME } from "@Constant/.";
import { CAROUSEL_URL } from "@Constant/img";
import Carousel from "@Molecules/Common/Carousel";
import { Container, FirstContainer, FirstCropContainer, MainTitle } from "./styles";

const DoItCarousel = () => {
  return (
    <Container>
      <Carousel timer={Number(CAROUSEL_TIME)}>
        {CAROUSEL_URL.map((data: string, idx: number) => (
          <div>
            <FirstCropContainer key={idx} url={data + ".jpeg"} />
            <FirstContainer key={idx} url={data + ".png"} />
          </div>
        ))}
      </Carousel>
      <MainTitle>
        <span>작은&nbsp;아이디어를&nbsp;통해 꿈을&nbsp;실현하는</span>
        <span>아주대학교&nbsp;IT 중앙동아리,&nbsp;Do-IT</span>
      </MainTitle>
    </Container>
  );
};

export default DoItCarousel;
