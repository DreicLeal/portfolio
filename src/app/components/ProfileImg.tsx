// import Image from "next/image";
import Image from "next/image";
import profileImg from "../utils/imgs/profileImg.jpg";

export default function ProfileImg() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
        <Image
          src={profileImg}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
