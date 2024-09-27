import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar bg-base-300">
            <Link to={'/'} className="flex-1">
                <a className="btn btn-ghost text-xl">Business</a>
            </Link>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to={'/userList'}>User List</Link>
                    </li>
                    <li>
                        <Link to={'/addUser'}>Add User</Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Nav;