'use client'
import { createContext, useState, useEffect, useContext } from 'react';
import supabase from '../services/supbase/supabaseClient';

// Initialize Supabase client

// Create the Auth Context
const AuthContext = createContext({
    user: null,
    session: null,
    loading: true,
    signUp: async () => { },
    signIn: async () => { },
    signOut: async () => { },
    passwordReset: async () => { }
});

// AuthProvider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check initial session
        const checkSession = async () => {
            const { data: { session: initialSession } } = await supabase.auth.getSession();
            setSession(initialSession);
            setUser(initialSession?.user ?? null);
            setLoading(false);
        };

        checkSession();

        // Listen for auth changes
        const { data: authListener } = supabase.auth.onAuthStateChange((event, newSession) => {
            setSession(newSession);
            setUser(newSession?.user ?? null);
            setLoading(false);
        });

        // Cleanup subscription
        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    // Authentication Methods
    const signUp = async (email, password, metadata = {}) => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: { data: metadata }
            });

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Sign Up Error:', error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Sign In Error:', error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        setLoading(true);
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        } catch (error) {
            console.error('Sign Out Error:', error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const passwordReset = async (email) => {
        setLoading(true);
        try {
            const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/update-password`
            });

            if (error) throw error;
            return data;
        } catch (error) {
            console.error('Password Reset Error:', error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    // Context value
    const contextValue = {
        user,
        session,
        loading,
        signUp,
        signIn,
        signOut,
        passwordReset,
        supabase
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
};

// Export Supabase client for direct use if needed
export { supabase };
