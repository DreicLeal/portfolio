import Image from "next/image";
import profileImg from "../utils/imgs/profileImg.jpg";

export default function ProfileImg() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={profileImg}
        alt="ProfileImg"
        width={300}
        height={300}
        className="rounded-full p-8"
      />
    </div>
  );
}
