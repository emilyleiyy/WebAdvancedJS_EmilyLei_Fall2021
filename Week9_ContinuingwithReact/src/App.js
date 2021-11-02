import './App.css';
import Header from './Components/Header';
import Tiles from './Components/Tiles';
import Sections from './Components/Sections';

//import Project from './Components/Projects';

import {data} from './Data/data';
import {list} from './Data/list';

const App = () => {

  console.log("App is fine")

  return (
    <div className="App">

      <Header source = "https://i.ytimg.com/vi/Y6kr5b7Qgk4/maxresdefault.jpg"/>
      
      <h1>My Work</h1>

      <div className="all-tiles">
          {data.map((data)=>{

              return(

                <Tiles key={data.id}
                    id = {data.id}
                    source = {data.img}
                    title = {data.title}
                    catagory = {data.category}
                    date = {data.date}
                    info={data.info}

                />

              )

          })

          }

      </div>



      <h1>Internship Experience</h1>

      <div className="all-sections">
        {list.map((list)=>{
          return(
            <Sections key={list.id}
                    id = {list.id}
                    name = {list.name}
                    duration = {list.duration}
                    description1 = {list.description1}
                    description2 = {list.description2}
                    description3 = {list.description3}
                />
          )
        })
        }
      </div>

     
      
    </div>


          
  );
}

export default App;





// <div className="project"  id="project">
// {data.map((data)=>{

//   return (
//     <Project
//       id = {data.id}
//       source = {data.img}
//       title = {data.title}
//       info = {data.info}
//     />

//   )

// })}


// </div>