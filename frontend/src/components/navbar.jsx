import { Link } from 'react-router';
import { PlusIcon } from 'lucide-react';
import toast from 'react-hot-toast'

function Navbar() {
  return (
    <header className='bg-base-300 border-base-content/10'>
        <div className='mx-auto max-w-6xl p-4 '>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-primary font-mono tracking-tight '>dhana</h1>
                <div className="flex items-center gap-4">
                    <Link to={'/create'} className='btn btn-primary rounded-2xl bg-[#00FF9D] text-black'>
                        <PlusIcon className='size-5' />
                        <span>New Note</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar