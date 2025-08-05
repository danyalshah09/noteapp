import React from 'react'
import { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';
import RateLimitedUI from '../components/RateLimitedUI';
import axios from "axios"
import toast from 'react-hot-toast';
const HomePage = () => {
  const [isRateLimited, setRateLimited] = useState(false);
   const [notes, setNotes] = useState([]);
   const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.post("http://localhost:5001/api/notes");
        setNotes(res.data);
        setLoading(false);
        setRateLimited(false); // Assuming successful fetch means not rate limited
      } catch (error) {
        console.error("Error Fetching Notes:", error);
        setLoading(false);
        if(!error.response.status === 429)
          {setRateLimited(true); // Assuming an error means rate limited
      }else{
        toast.error("Failed to load the resource")
      }
    }
    finally{
      setLoading(false);
    }
    };

    fetchNotes();
  }, []);


   return (
    <div className='min-h-screen'>
      <Navbar/>
      {isRateLimited && <RateLimitedUI/>}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && <div className='text-center text-primary py-10'>
        Loading Notes</div>}

        {notes.length > 0 && !isRateLimited}
        <div className='grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3'>
{
  notes.map(note=>
   <NoteCard key={note._id} note={note}/>>
  )
}

        </div>

      </div>

      </div>
  )
}

export default HomePage