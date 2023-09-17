
const NavBar = () => {

    const routes = [
        { path: '/', id: 'home' },
        { path: '/about', id: 'about' },
        { path: '/services', id: 'services' },
        { path: '/contact', id: 'contact' },
        { path: '/products', id: 'products' }
    ];

    return (
        <nav>
            {
                routes.map(route => <li key={}></li>)
            }
        </nav>
    );
};

export default NavBar;

