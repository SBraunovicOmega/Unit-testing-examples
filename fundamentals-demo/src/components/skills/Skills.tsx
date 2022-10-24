import { useState, useEffect } from 'react'
import { SkillsProps } from './Skills.types'

export const Skills = (props: SkillsProps) => {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const nesto = () => {
    return false
  }
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1010)
    nesto()
  }, [])
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
