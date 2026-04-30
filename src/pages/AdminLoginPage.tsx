import React from 'react';
import { AdminLoginForm } from '../components/admin/AdminLoginForm';
import { useNavigate } from 'react-router-dom';

export const AdminLoginPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <AdminLoginForm onSuccess={() => navigate('/portal')} />
        </div>
    );
};
