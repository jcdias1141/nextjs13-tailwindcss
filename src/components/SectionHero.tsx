import Image from "next/image";
import { Container } from "./Container";

//images
import Arrow from '@/assets/arrow-explorer.svg';
import imageApple from '@/assets/btn-apple-store.svg';
import imagePlayStore from '@/assets/btn-google-play.svg';
import Woman from '@/assets/woman.png';

export function SectionHero() {
    return(
        <section className="w-full bg-img_bg_hero bg-no-repeat bg-cover h-[auto]">
             <Container flexDirectionColumn> {/* Passa a propriedade flexDirectionColumn */}
                <div className="flex-1 max-w-[500px] max-sm:pt-8">
                    <h1 className="text-white text-7xl font-bold mb-4 max-sm:text-5xl">Tenha seu banco na palma da mão</h1>
                    <p className="text-white text-xl max-w-[408px] mb-8">Todas as operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>

                    <div className="flex gap-4 mb-24 max-sm:mb-12">
                        <button>
                            <Image
                                src={imageApple}
                                alt="Apple"
                            />
                        </button>
                        <button>
                            <Image
                                src={imagePlayStore}
                                alt="Play store"
                            />
                        </button>
                    </div>
                    <button className="flex items-center gap-4 max-sm:justify-center w-full">
                        <Image
                            src={Arrow}
                            alt="Arrow"
                        />
                        <span className="text-white font-bold">Continue explorando</span>
                    </button>
                </div>
                <Image className="mr[-48px] max-sm:mr-0 mt-6 z-1 relative"
                    src={Woman}
                    alt="Woman"
                />
            </Container>
        </section>
    )
}
