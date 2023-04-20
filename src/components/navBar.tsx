import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/req1">
            Request 1
          </Link>
        </li>
        <li>
          <Link href="/req2">
            Request req2
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
