import Image from "next/image";
import profileImg from "../utils/imgs/profileImg.jpg";

export default function ProfileImg() {
  return (
    <div className="w-full flex justify-center">
      <Image
        src={profileImg}
        alt="ProfileImg"
        className="rounded-full p-8 w-full max-w-[380px] h-full max-h-[380px]"
      />
    </div>
  );
}
