import React, { useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState("")
    const onTextChange = (e) => {
        const text = e.target.value
        console.log("text",text);
        setSearch(text)
    }
    const lessons = [
      {name : 'Math', point: 80},
      {name : 'English', point: 80},
      {name : 'History', point: 80},
    ]
    const filteredLessons = lessons.filter(lesson =>
        lesson.name.toLowerCase().includes(search.toLowerCase())
    )
    console.log('filteredLessond',filteredLessons);
  return (
    <div>
        <input type="text" placeholder='Search' onChange={onTextChange}/>
        {filteredLessons.map(lesson => <h1>{lesson.name}-{lesson.point} </h1>)}
    </div>
  )
}

export default Search
