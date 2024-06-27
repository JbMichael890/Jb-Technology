import logo from "../assets/images.jpeg";
import logo2 from "../assets/logoTwo.jpeg";

import Image4 from "../assets/Image4.webp";
import logo3 from "../assets/logo3.jpeg";
import styled from "styled-components";
import Image3 from "../assets/image3.avif";
import Image2 from "../assets/stock-photo-data-science-and-big-data-technology-scientist-computing-analysing-and-visualizing-complex-data-2284126663.jpg";
import Demo from "../assets/pexels-photo-3183197.jpeg";
import HomeCard from "../component/block/HomeCard";
import Carocel from "../component/Carocel";

// import NewPostPage from "../pages/NewPostPage/";

const HomePage = () => {
  return (
    <Container>
      <CarocelHolder>
        <Carocel />
      </CarocelHolder>
      <Holder>
        <HomeCard
          logo={`${logo}`}
          title="🥇The first framework that lets you visualize your
        app 🤯"
          date="January 12 "
          time=" 12"
          image={`${Demo}`}
          voteNum="12"
          comments="16"
          bookmark="20"
        />
        <HomeCard
          logo={`${logo2}`}
          title="I’ve worked in IT for over 10 years. Here are 5 things I wish I knew when I started"
          date="April 16 "
          time=" 16"
          image={`${Image2}`}
          voteNum="18"
          comments="19"
          bookmark="21"
        />
        <HomeCard
          logo={`${logo3}`}
          title="The Dangers of Hacking and What a Hacker Can Do to Your Computer. How Hackers Operate and How to Protect Yourself."
          date="June 22 "
          time=" 18"
          image={`${Image3}`}
          voteNum="77"
          comments="10"
          bookmark="60"
        />
        
    
      </Holder>
      
    </Container>
  );
};
export default HomePage;
const Container = styled.div``;
const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: red; */
`;
const CarocelHolder = styled.div`
  max-width: 90%;

  margin-right: auto;
  margin-left: auto;
`;
