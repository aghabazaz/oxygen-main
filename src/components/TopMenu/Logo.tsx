import Image from "next/image";
import cube from "~/public/images/menu/cube.png";
import logoDark from "~/public/images/logoDark.png";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex relative z-40 items-center justify-end gap-1">
        <Image
          src={logoDark}
          alt="oxygenLogo"
          className="w-auto h-5 mr-2 mt-3"
        />
        <Image
          src={cube}
          alt="oxygenLogo"
          width={75}
          height={75}
          className="mt-7 drop-shadow-[0_4px_0_rgba(255,255,255)]"
        />
      </div>
    </Link>
  );
};

export default Logo;
