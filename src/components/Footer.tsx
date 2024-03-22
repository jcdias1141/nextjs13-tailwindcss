import Image from 'next/image';

import {Container} from './Container';
import Logo  from '@/assets/logo.svg';
import imageApple from '@/assets/btn-apple-store.svg';
import imagePlayStore from '@/assets/btn-google-play.svg';

export function Footer() {
    return(
        <footer className='bg-primary-orange'>
            <Container>
                <div className='w-full pt-20 pb-20 flex items-center justify-between max-sm:flex-col'>
                    <Image
                        src={Logo}
                        alt="Logo"
                    />
                    <div className='flex items-start flex-col max-sm:items-center mt-6'>
                        <h4 className='text-white font-bold mb-2 max-sm:flex max-sm:mb-4'>Baixe o App</h4>
                        <div className="flex gap-4">
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
                    </div>
                </div>
            </Container>
        </footer>
    )
}