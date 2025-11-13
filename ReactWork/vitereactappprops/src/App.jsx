import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './component/Gallery'
import ICard from './component/ICard'
import Book from './component/Book'
import StateHandling from './component/StateHandling'
import ImageManipulation from './component/ImageManipulation'

function App() {

  //   const student=
  //   [{
  // name:"Ansh",
  // age:19,
  // barnch:"CSE",
  // college:"ABES Engineering College",
  // location:"Ghazibad"
  //   },
  //   {
  // name:"Ram",
  // age:20,
  // barnch:"CSE",
  // college:"ABES Engineering College",
  // location:"Ghazibad"
  //   },
  //   {
  // name:"Vansh",
  // age:20,
  // barnch:"IT",
  // college:"ABES Engineering College",
  // location:"Ghazibad"
  //   }
  // ]

  // const books =
  //   [{
  //     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8aQMYwqo2nRqq8Ag8or6qRZaiWD244xJ5g&s",
  //     title: "NP bali",
  //     price: "500",
  //     publisher: "abc"
  //   },
  //   {
  //     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0kjDJdXkb2cXAoZfhsntpVotCbRXg-nBPA&s",
  //     title: "Galvin",
  //     price: "500",
  //     publisher: "abc"
  //   },
  //   {
  //     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5V_85yAdiEh3To8JIfmLYgNUw9y0QJXuGJw&s",
  //     title: "RD Sharma",
  //     price: "500",
  //     publisher: "abc"
  //   },
  //   {
  //     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvpG2U9ZTdAv5-DiKr-D7gRU-zXDmHttYYQ&s",
  //     title: "Python",
  //     price: "500",
  //     publisher: "abc"
  //   },
  //   ]
  return (
    // <div className='wrap'>
    //   {/* <h2>ABES Engineering College</h2> */}
    //   {/* <Gallery/> */}
    //   {/* <ICard name="Kirti Jain" age="20" branch="CSE" college="ABES" location="Ghaziabad"></ICard>
    //  <ICard name="Swasti Jain" age="20" branch="CSE" college="ABES" location="Ghaziabad"></ICard> */}


    //   <Book src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8aQMYwqo2nRqq8Ag8or6qRZaiWD244xJ5g&s" title="NP bali" price="500" publisher="abc" />
    //   <Book src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0kjDJdXkb2cXAoZfhsntpVotCbRXg-nBPA&s" title="Galvin" price="500" publisher="abc" />
    //   <Book src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5V_85yAdiEh3To8JIfmLYgNUw9y0QJXuGJw&s" title="RD Sharma" price="500" publisher="abc" />
    //   <Book src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUvpG2U9ZTdAv5-DiKr-D7gRU-zXDmHttYYQ&s" title="Python" price="500" publisher="abc" />

    //   {/* {student.map((ele,indes)=>(
    //   <ICard data={ele} />
    // ))}
    //  */}

    //   {/*      
    //   {books.map((ele,indes)=>(
    //   <Book data={ele} />
    // ))} */}


    // </div>

    <div>
      {/* <StateHandling></StateHandling> */}
      <ImageManipulation></ImageManipulation>
    </div>
  )
}

export default App
