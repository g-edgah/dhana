import { Link } from 'react-router';
import { PenSquareIcon, Trash2Icon } from 'lucide-react';

import { formatDate } from '../lib/utils.js'

function NoteCard({note}) {

    const id = note._id;
    
  return (
    <Link 
        to={`/note/${id}`}
         className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D] rounded-2xl"
    >
        <div className='card-body'>
          <h3 className='card-title text-base-content'>{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3" >{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className='text-sm text-base-content/60'>{formatDate(new Date(note.createdAt))}</span>
            <div className='flex flex-row justify-center items-center gap-1'>
              <PenSquareIcon className='size-4' />
              <button className='btn btn-ghost btn-xs text-error'>
                <Trash2Icon className='size-4' />
              </button>
            </div>
          </div>
        </div>
    </Link>
  )
}

export default NoteCard