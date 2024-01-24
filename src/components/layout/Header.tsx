import Image from "next/image";
import LogoShab from "../../../public/logo/logo-shab.svg";
import Link from "next/link";


export default function Header() {
    return (
        <div className="header">
            <div className="container-7xl flex justify-between py-4">
                <Link href={"/"}>
                    <Image alt="logo" priority src={LogoShab} sizes="78px" />
                </Link>
                <p className="text-xl text-blue-800">
                    Todo list
                </p>
            </div>
        </div>
    )

}
