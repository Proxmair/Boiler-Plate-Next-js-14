
import Image from "next/image";
import MyBanner from "./ui/MyBanner";

const HeroCarusel = ({ imageURL, text }: any) => {
  return (
    <div className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-112px)]">
      <Image
        src={imageURL}
        alt="Slide"
        layout="fill"
        objectFit="cover"
      />
      <MyBanner text={text} imageUrl={imageURL} className="h-full"/>
    </div>

  );
};

export default HeroCarusel;
