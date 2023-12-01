import React, { useState, useEffect } from 'react'

import { useTheme } from './ThemeContext'
import NotesContainer from './NotesContainer'
import { GlobalStyle, ButtonSpan } from './styles'
import { Link } from 'react-router-dom'

function App() {
  const themeState = useTheme()
  const initialState = JSON.parse(window.localStorage.getItem('notes')) || [
    {
      createdOn: new Date(),
      edit: true
    }
  ]
  const [notes, setNotes] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = () => {
    const tempNotes = [...notes]
    const result = { createdOn: new Date(), edit: true }
    tempNotes.push(result)
    setNotes(tempNotes)
  }

  const onDelete = idx => {
    const tempNotes = [...notes]
    tempNotes.splice(idx, 1)
    setNotes(tempNotes)
  }

  const createNotesContainer = () => {
    return notes.map((note, idx) => (
      <NotesContainer
        key={note.createdOn}
        note={note}
        idx={idx}
        onDelete={() => onDelete(idx)}
      />
    ))
  }

  return (
    <>
      <GlobalStyle />
      <div>
      <Link className="absolute right-0 border-2 border-green-500 m-4 py-2 px-5 rounded-xl hover:bg-green-500 transition delay-1 font-bold" to={'/login'}>Login Now</Link>
        <h1>
          React Markdown Note{' '}
          {themeState.dark ? (
            <ButtonSpan role="img" aria-label="sun" onClick={themeState.toggle}>
              🌞
            </ButtonSpan>
          ) : (
            <ButtonSpan
              role="img"
              aria-label="moon"
              onClick={themeState.toggle}
            >
              🌙
            </ButtonSpan>
          )}
        </h1>
      </div>
      <button onClick={() => addNote()} type="button">
        Add New Note
      </button>
      <br />
      <br />
      {createNotesContainer()}
    </>
  )
}

export default App
