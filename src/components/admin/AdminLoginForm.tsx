import React, { useState } from 'react';

export const AdminLoginForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid Admin Credentials');
      }

      const data = await response.json();
      localStorage.setItem('adminToken', data.token);
      localStorage.setItem('role', 'admin');
      onSuccess();
      window.location.reload();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-sm w-full">
      <h2 className="text-2xl font-bold mb-6">Admin Login</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input type="text" placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} className="w-full p-3 border rounded-lg mb-4" required />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-3 border rounded-lg mb-4" required />
      <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-lg">Login</button>
    </form>
  );
};
