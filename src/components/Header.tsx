import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import Link from "next/link";
import { Search } from "./Search";

import Logo  from '@/assets/logo.svg';
import IconUser from '@/assets/icon-user.svg';
import { Container } from "./Container";

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bg-primary-orange relative">
            <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-[100%] h-full z-0"></div>
            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <a href="/">
                            <Image
                                src={Logo}
                                alt="Logo"
                            />
                        </a>
                        <ul className="lg:flex items-center gap-14 max-sm:hidden max-lg:hidden">
                                <li>
                                <ItemMenu
                                    name="Para você"
                                />
                                </li>
                                <li>
                                    <ItemMenu
                                        name="Para empresas"
                                    />
                                </li>
                                <li>
                                <ItemMenu
                                    name="Ajuda"
                                />
                                </li>
                        </ul>
                    </div>
                    <Search/>
                </div>
                <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-1 relative">
                    <Image
                        src={IconUser}
                        alt=""
                    />
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </Container>
        </header>
    )
}