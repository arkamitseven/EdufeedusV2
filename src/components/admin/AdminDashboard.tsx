
import React from 'react';
import { Users, BookOpen, GraduationCap, ClipboardList, Settings } from 'lucide-react';

export const AdminDashboard = () => {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium">Total Students</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-2">1,240</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium">Total Teachers</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-2">85</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <h3 className="text-slate-500 text-sm font-medium">Recent Admissions</h3>
                    <p className="text-3xl font-bold text-slate-900 mt-2">12</p>
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-lg mb-4">Admin Quick Links</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                     <button className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-primary/10">
                        <Users className="w-5 h-5 text-primary" /> Manage Users
                     </button>
                      <button className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-primary/10">
                        <BookOpen className="w-5 h-5 text-primary" /> Manage Courses
                     </button>
                     <button className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-primary/10">
                        <ClipboardList className="w-5 h-5 text-primary" /> System Logs
                     </button>
                     <button className="flex items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-primary/10">
                        <Settings className="w-5 h-5 text-primary" /> Settings
                     </button>
                </div>
            </div>
        </div>
    );
};
