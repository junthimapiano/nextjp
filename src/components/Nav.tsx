import Link from 'next/link';
import Image from 'next/image';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
  padding: '10px',
};

const Navbar = () => {
  return (
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-8 bg-yellow-500 justify-items-center items-center py-2'>
        <div className='col-span-2 flex gap-4 items-center'>
          <span className='text-2xl font-bold text-white'>{}</span>
        </div>
        <div className='col-span-3'></div>
        <Link className='' href="/" passHref>
          <span style={linkStyle}>Home</span>
        </Link>
        <Link href="/pokemon" passHref>
          <span style={linkStyle}>Pokemon</span>
        </Link>
        <Link href="/aboutme" passHref>
          <span style={linkStyle}>About Me</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;