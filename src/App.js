import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Article from './componenttt/Article';

function App() {

   const [reddit,setReddit]=useState('webdev')
   const [articles,setArticles]=useState([ ])

   useEffect(() =>{
    fetch(`https://www.reddit.com/r/"+${reddit}+".json?limit=80`)
    .then(res=>res.json())
    .then(data=>
      
      {
        console.log(data.data.children)
        setArticles(data.data.children)
      })
   },[reddit])
   return (
    <div className="App">
    <header className="App-header">
      <h2>
        <input className="input" value={reddit} onChange={(e)=>setReddit(e.target.value)} ></input>
         
      </h2>
      <div>
        <p>Type the subreddit name you want to find than the latest post will be shown here </p>
      </div>
      </header>
      <div className="article">
        {
         articles?.map((data,index) =>
            <Article data={data} id={index} ></Article>
          )
        }
      </div>
    
    </div>
  );
}

export default App;
