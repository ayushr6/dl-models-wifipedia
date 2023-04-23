import './navbar.css';

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='left'>
                    Wikipedia of Models
                </div>
                <div className='right'>
                    <div className='navbar-items'>
                        <div className='item'>
                            Home
                        </div>
                        <div className='item'>
                            All Models
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;