import { Link, useNavigate } from 'react-router';
import { ArrowLeftIcon } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast'
import axios from 'axios'

function CreatePage() {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const [ loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!(title.trim()) || !(content.trim())) {
      toast.error("both content and title fields required")
     // console.log("no title or content")
      return;
    }
    
    
    setLoading(true)
    
    try {
      console.log("submiting")
      const req = await axios.post("http://localhost:5001/api/notes/addNote",
        {
          title, content
        }
      )
      //console.log(req)
      toast.success('Note created successfully')
      navigate("/")
    } catch (error) {
      toast.error("Failed to create note");
      if(error.response.status === 429 ){
        toast.error("slow down cowboy")
      }
      console.log(error);
    } finally {
      setLoading(false);
    }

  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={'/'} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className='size-5' />
            Back to notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4"></h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input 
                    type="text"
                    placeholder='Note Title'
                    className='input input-bordered'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea 
                    placeholder='Write your note here...'
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e)=>setContent(e.target.value)} 
                  />
                </div>
                <div className="card-actions justify-end">
                  <button type='submit' className="btn btn-primary" disabled={loading}>
                    {loading ? 'creating...' : 'Create Note'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePage