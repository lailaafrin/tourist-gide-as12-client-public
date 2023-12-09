import React, { useState } from 'react';

const ManageUsers = () => {

    const [ role, setRole ] = useState('User/Tourist');
    const [ isAdmin, setIsAdmin ] = useState(false);

    const makeAdmin = () => {
        setRole('Admin');
        setIsAdmin(true);
    };

    const makeTourGuide = () => {
        setRole('Tour Guide');
        setIsAdmin(true);
    };
    return (
        <div className='w'>
            <table className="custom-table">
                <thead>
                    <tr style={{ backgroundColor: 'lightgray' }}>
                        <th>User ID</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{ backgroundColor: 'white' }}>
                        <td>1</td>
                        <td>{role}</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>

            <button
                onClick={makeAdmin}
                disabled={isAdmin}
                style={{ backgroundColor: 'blue', color: 'white' }}
            >
                Make Admin
            </button>
            <button
                onClick={makeTourGuide}
                disabled={isAdmin}
                style={{ backgroundColor: 'green', color: 'white' }}
            >
                Make Tour Guide
            </button>
        </div>
    );
};

export default ManageUsers;