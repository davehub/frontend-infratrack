import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import authService from '../services/authService'; // Import authService

const useAuth = () => {
    const context = useContext(AuthContext);
    const navigate = useNavigate();

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    const { user, setUser } = context;

    const login = async (credentials) => {
        // Call your authentication service
        const response = await authService.login(credentials);
        setUser(response.user);
        navigate('/dashboard');
    };

    const logout = () => {
        setUser(null);
        navigate('/login');
    };

    const isAuthenticated = () => {
        return !!user;
    };

    return {
        user,
        login,
        logout,
        isAuthenticated,
    };
};

export default useAuth;