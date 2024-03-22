import Image from "next/image";
import IconSearch from '@/assets/icon-search.svg';

export function Search() {
    return (
        <div className="flex items-center gap-4 max-sm:hidden">
            <Image
                src={IconSearch}
                alt="Icon Search"
            />
            <input type="text" placeholder="Buscar" className="bg-transparent outline-none text-white placeholder:text-white pr-7" />
        </div>
    )
}