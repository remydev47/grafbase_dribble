import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '@/constants';
import AuthProviders from './AuthProviders';
import { getCurrentUser } from '@/lib/sessions';
import  { useSession }from 'next-auth/react';


const Navbar = async () => {
  //  const{ data: session } = useSession();
    const session = await getCurrentUser();
  return (
    <nav className='flexBetween navbar'>
        <div className='flex-1 flexStart gap-10'>
            <Link
              href='/'
            >
                <Image src="/logo.svg" alt="logo" width={115} height={43}/>
            </Link>
            <ul className='xl:flex hidden text-sm gap-7'>
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className='flexCenter gap-4'>
            {session ?.user ? (
                <>
                {session?.user?.image && (
                     <Image alt='userProfile'src={session.user.image} width={40} height={40} className='rounded-full' />
                )}
                <Link href='/create-project'>
                  Share Your Work
                </Link>
                </>
            ) : (
                <AuthProviders />

            
            )}
        </div>

    </nav>
  )
}

export default Navbar