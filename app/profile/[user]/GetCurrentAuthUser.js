'use client'

import { supabase } from "@/app/contexts/AuthContext";

export default async function GetCurrentAuthUser(setUser) {
    const { data: { user }, error } = await supabase.auth.onAuthStateChange((event, session) => { setUser(session.user) });
    if (error) {
        throw new Error(error);
    }
    user;
}
