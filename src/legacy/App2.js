import { useState, useEffect } from 'react'

function App() {
	const [ counter, setValue ] = useState(0)
  const [ keyword, setKeyword ] = useState('')
	const onClick = () => { setValue((prev) => prev + 1) }
  const onChange = (event) => { setKeyword(event.target.value) }
  console.log('i run all the time')
  const iRunOnlyOnce = () => {
    console.log('I run only once')
    if (keyword !== '' && keyword.length > 5) {
      console.log('SEARCH FOR ', {keyword})
    }
  }
  useEffect(iRunOnlyOnce, [keyword])
  useEffect(() => {console.log('call the API')}, [])
	return (
		<div>
      <h1>{ keyword }</h1>
      <input value={ keyword } type="text" placeholder='Search Here...' onChange={ onChange } />
			<h1>{ counter }</h1>
			<button onClick={ onClick }>Click me</button>
		</div>
	)
}

export default App