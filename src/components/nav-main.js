import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function NavMain(props) {
    const menuItems = props.items;
    return (
        <Nav>
            {menuItems.map(mi => <Nav.Item><Link to={mi.link}>{mi.anchor}</Link></Nav.Item>)}
        </Nav>
    );
}

export default NavMain;
