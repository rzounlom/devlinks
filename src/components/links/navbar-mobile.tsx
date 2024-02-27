import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarMobileProps {}

const NavbarMobile: FC<NavbarMobileProps> = ({}) => {
  return (
    <div className="h-[74px] p-[16px] flex justify-around items-center">
      <Link href={"/"}>
        <Image
          src={"/img/logo-devlinks-small.svg"}
          height={32}
          width={32}
          alt="devlinks mobile icon"
        />
      </Link>
      <div className="h-[42px] w-[74px] flex justify-center items-center bg-[#EFEBFF] rounded-md">
        <Image
          src={"/img/icon-link.svg"}
          height={20}
          width={20}
          alt="devlinks mobile icon"
        />
      </div>
      <div>
        <Image
          src={"/img/icon-profile-details-header.svg"}
          height={20}
          width={20}
          alt="devlinks mobile icon"
        />
      </div>
      <div className="h-[42px] w-[52px] flex justify-center items-center rounded-md border-1 border-[#633CFF]">
        <Image
          src={"/img/icon-preview-header.svg"}
          height={20}
          width={20}
          alt="devlinks mobile icon"
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
