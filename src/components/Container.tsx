import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    flexDirectionColumn?: boolean; // Nova propriedade
}

export function Container({ children, flexDirectionColumn = false }: Props) {
    const flexDirection = flexDirectionColumn ? 'flex-col' : ''; // Condicionalmente adiciona 'flex-col'

    return(
        <div className={`flex items-center w-full max-w-[1246px] px-[15px] mx-auto max-sm:${flexDirection}`}>
            {children}
        </div>
    )
}
