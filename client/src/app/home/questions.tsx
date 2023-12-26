"use client"
import React from 'react'
import { useState } from 'react';
import { addQuestion } from '../Providers/useApi';
import { useQuery, useQueryClient } from '@tanstack/react-query';

interface Question {
    id : number;
    question: string;
    userId : number;
}
const Questions = () => {
    const [question, setQuestion] = useState("");
    const mutation = addQuestion()
    const queryClient = useQueryClient();
    const {data, isLoading, isError} = useQuery<Question[]>({
        queryKey: ["question"],
        queryFn : ()=>
            fetch("http://localhost:5000/question").then((res) => res.json()),
    })
    if (isError) {
        return (
          <main className="mt-4 flex min-h-screen flex-col items-center">
            Error fetching data
          </main>
        );
      }
      const getStorage = localStorage.getItem("user") || '{"data": {"id": "1"}}';
      const storage = JSON.parse(getStorage)
      const handleAddQuestion = async () => {
        setQuestion("")
        await mutation.mutate({ userId: storage.data.id, question });
        queryClient.invalidateQueries({queryKey: ["question"]})
      };

     
  return (
    <div className="p-4 mx-auto flex flex-col gap-8 items-center mt-[65px] ">
    <h1 className="text-white text-4xl font-bold whitespace-nowrap">
      Ask us
    </h1>
    <div className="flex max-w-[590px] flex-col items-stretch">
      <div className=" iphone:ml-40  flex w-full  items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
        <input
          className=" iphone:w-36  text-white bg-transparent  text-opacity-50 text-xl font-medium w-[500px] "
          placeholder="Ask us  "
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          className="text-white text-opacity-50 text-xl font-medium self-start"
          onClick={handleAddQuestion}
        >
          <div className='iphone:mr-[400px]'>+</div>
        </button>
        
      </div  >

      <div className=' iphone:ml-48'>
        {
          data?.map((ques , key) => (
          <ul key={key} className=' iphone:text-center'>
              <li className=' iphone:w-40  text-white border-2 mt-2 p-2 w-f  '> {key +1} {ques.question}</li>
          </ul>
          ))
        }
      </div>
    </div>
  </div>
  )
}

export default Questions