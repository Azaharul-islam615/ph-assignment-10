

import { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../Context/Authprovider';

const Privetprovider = ({ children }) => {
    const location = useLocation()

    const { user, loading } = use(AuthContext)

    if (loading) {
        return <div className='w-full flex justify-center'><span className="loading loading-dots loading-xl"></span></div>
    }
    if (user && user?.email) {
        return children
    }
    return <Navigate state={{ from: location.pathname }
    } to="/login"></Navigate>;
};

export default Privetprovider;