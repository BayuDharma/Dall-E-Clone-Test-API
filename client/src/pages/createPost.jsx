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
  
  return (
    <section className="max-w-7x1 mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create The Imagination</h1>
      </div>
    </section>
  )
}

export default CreatePost