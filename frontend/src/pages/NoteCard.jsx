import { Trash2Icon } from 'lucide-react'
import React from 'react'

const NoteCard = ({note}) => {
  return (
    <div>
        <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg tranistion-all duration-200 border-t-4 border-solid border-[#00FF90]">

<div className='card-body'>

        <h3 className='card-title text-base-content'>{note.title}</h3>
        <p className='text-base-content/70 line-clamp-3'>{note.content}</p>
        <div className='card-actions justify-between items-center mt-4'>
            {note.createdAt}
        </div>
        <div className='flex items-center gap-1'>
<PenSquareIcon className="size-4"/>
<Trash2Icon className='size-4'/>

        </div>

</div>
        </Link>

    </div>
  )
}

export default NoteCard