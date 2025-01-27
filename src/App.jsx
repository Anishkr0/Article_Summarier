import { useState } from 'react';
import React from 'react';
import axios from 'axios';


function App() {
  const [text, setText] = useState(null)
  const [summary, setSummary] = useState()
  const handleinput = (e) => {
    setText(e.target.value)
  }
  const Summarize = async () => {
    const options = {
      method: 'GET',
      url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
      params: {
        url: text,
        lang: 'en',
        engine: '2'
      },
      headers: {
        'x-rapidapi-key': '06f514909amsh7784989f243ced1p14944ejsn81e10c864754',
        'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
      }
    };
    const response = await axios.request(options)
    setSummary(response.data.summary)
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center flex-col">
      <h1 className="text-4xl font-bold text-blue-700 mb-5">Article Summarizer</h1>
      <div className="mt-5 flex items-center space-x-4">
        <input
          type="text"
          className="outline-none border border-gray-300 rounded-lg px-4 py-2 w-80 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          placeholder="Enter article URL here"
          onChange={handleinput}
        />
        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 shadow-md transition-all"
          onClick={Summarize}
        >
          Summarize
        </button>
      </div>
      <div className="mt-8 h-70 w-112 bg-gray-200 rounded-lg p-4 shadow-lg overflow-y-auto text-gray-700 px-5">
        {summary ? (
          <p className="text-base leading-relaxed">{summary}</p>
        ) : (
          <p className="text-gray-400 italic">The summary will appear here...</p>
        )}
      </div>
    </div>

  );
}

export default App; 
