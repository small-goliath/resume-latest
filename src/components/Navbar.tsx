import styles from './Navbar.module.css';

const navItems = [
  { href: '#education', label: '교육사항' },
  { href: '#skills', label: '역량' },
  { href: '#awards', label: '수상' },
  { href: '#volunteering', label: '봉사활동' },
  { href: '#activities', label: '대/외활동' },
  { href: '#internships', label: '인턴십' },
  { href: '#research', label: '연구활동' },
  { href: '#peer-reviews', label: '동료평가' },
  { href: '#side-projects', label: '사이드프로젝트' },
];

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {navItems.map(item => (
        <a key={item.href} href={item.href}>{item.label}</a>
      ))}
    </nav>
  );
};

export default Navbar;
