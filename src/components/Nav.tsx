import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <Link href="/" passHref>
        <span style={styles.link}>Home</span>
      </Link>
      <Link href="/pokemon" passHref>
        <span style={styles.link}>Pokemon</span>
      </Link>
      <Link href="/aboutme" passHref>
        <span style={styles.link}>AboutMe</span>
      </Link>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#333',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
};

export default Navbar;
