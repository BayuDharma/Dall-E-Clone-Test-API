import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from "../assets";
import { getRandomPrompt  } from "../utils";
import { Loader, FormField} from "../components";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(
    {
      name: '',
      photo: '',
      prompt: '',
    }
  );

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const generateImage = () => {}

  const handleSubmit = () => {

  }
  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt })
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold bg-clip-text text-transparent text-[32px] bg-gradient-to-r from-violet-500 from-1% via-purple-500 via-20% to-pink-500 to-100% background-animate">
          Create The Imagination
        </h1>
        <p className="mt-2 max-w-[600px] text-[#666e75] text-[14px]">
          Create your imagination with stunning visual image generated by DALL-E 
        </p>
      </div>

      <form className="mt-16 max-w-3xl text-[#666e75]" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField 
          LabelName="Your Name"
          type="text"
          name="name"
          placeholder="Maybe Someone"
          value={form.name}
          handleChange={handleChange}
          />

          <FormField 
          LabelName="Write your Imagination"
          type="text"
          name="prompt"
          placeholder="a pencil and watercolor drawing of a bright city in the future with flying cars"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-violet-500 focus:border-violet-500 
          w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img 
              src={form.photo} 
              alt={form.prompt} 
              className="w-full h-full object-contain"/>
            ) : (
              <img 
              src={preview} 
              alt="preview" 
              className="w-3/12 object-contain opacity-20" />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center rounded-lg bg-gray-200">
                <Loader />
              </div>
            )}
          </div>

          <div className="mt-2 flex gap-5">
              <button type="button" onClick={generateImage} className="text-white bg-green-600 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                {generatingImg ? 'Making Ur Imagination...' : 'Generate'}
              </button>
          </div>

          <div>
            <p className="mt-2 text-[#666e75] text-[14px]"> Once you created the image with your imagination,you can share it to the universe</p>
            <button type="submit" className="mt-3 text-white bg-violet-500 font-medium rounded-md text-sm w-full sm:auto px-5 py-2.5 text-center">
              {loading ? 'Sharing...' : 'Share To The Universe'}
            </button>
          </div>

        </div>
      </form>
    </section>
  )
}

export default CreatePost;