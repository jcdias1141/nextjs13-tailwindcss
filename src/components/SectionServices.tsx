import { Container } from "./Container";
import Image from "next/image";

import PhoneIcon from "@/assets/icon-phone.svg";
import SolucaoIcon from "@/assets/icon-solutions.svg";
import InverstIcon from "@/assets/icon-options.svg";
import CardIcon from "@/assets/icon-card.svg";
import ImagePhone from "@/assets/phone.png";

export function SectionServices() {
    return(
        <section className="relative w-full h-[965px pb-20">
            <Container flexDirectionColumn> {/* Passa a propriedade flexDirectionColumn */}
                <div className="flex-1 max-w-[594px] pt-32  max-sm:pt-16">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9 max-sm:mb-3">serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6 max-sm:text-3xl">Gerencia suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-secondary-gray max-sm:mb-10">Veja como voce pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa</p>
                    <ul className="flex flex-col items-start gap-9">
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={PhoneIcon}
                                    alt="Phone"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhar sua conta, fazer transferencia e pagamentos de onde estiver.</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={SolucaoIcon}
                                    alt="Phone"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Solução de empréstimos e renegociação para organizar suas finanças.</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={InverstIcon}
                                    alt="Phone"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Diversas opções de investimentos.</p>
                        </li>
                        <li className="flex items-center gap-9 pb-9">
                            <div className="w-7 h-7 flex items-center justify-center">
                                <Image
                                    src={CardIcon}
                                    alt="Phone"
                                />
                            </div>
                            <p className="flex-1 text-txt-gray pr-2">Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual.</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="absolute top-0 right-0 w-[32%] h-full bg-gray-phone flex items-center max-sm:relative w-[40%] z-0  max-sm:bg-transparent">
                <Image
                    className="translate-x-[-50%] max-sm:translate-x-[70%]"
                    src={ImagePhone}
                    alt="Phone"
                />
            </div>
        </section>
    )
}