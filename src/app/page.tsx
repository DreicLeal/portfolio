import Carroussel from "./components/Carousel";
import ProfileImg from "./components/ProfileImg";

export default function Home() {
  return (
    <div className="w-full h-full flex-column items-center justify-center">
      <ProfileImg />
      <Carroussel/>
    </div>
  );
}
