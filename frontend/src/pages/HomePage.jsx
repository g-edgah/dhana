import { useState, useEffect } from 'react';
import api from '../lib/axios.js';
import toast from 'react-hot-toast';

import Navbar from '../components/navbar.jsx';
import RateLimitToast from '../components/ratelimittoast.jsx';
import NoteCard from '../components/NoteCard.jsx'

function HomePage() {
    const [isRateLimited, setIsRateLimited] = useState(false);
    const [ notes, setNotes ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                //const res = await fetch('http://localhost:5001/api/notes/');
                //const data = res.json();

                setLoading(true);  
                const res = await api.get('/notes');
                
                setNotes(res.data)
                console.log("here are your notes: "+ notes);
                setIsRateLimited(false)
            } catch(error) {
                console.error(error);
                if(error.response?.status == 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load notes. Please try refreshreshing the page")
                }
            } finally {
                setLoading(false)
            }
        }
        
        fetchNotes();

    }, [])

  return (
    <div className='min-h-screen' >
        <Navbar />
        {isRateLimited && <RateLimitToast/>}
        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className='text-center text-primary py-10'>fetching notes...</div>}
            {notes.length > 0 && !isRateLimited && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
                    {notes.map((note) => (
                        <NoteCard key={note._id} note={note} setNotes={setNotes}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}
export default HomePage