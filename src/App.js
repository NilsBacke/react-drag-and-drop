import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'
import './App.css'

function App() {
	const text = 'Sample Text'
	const [{ opacity }, dragRef] = useDrag({
		item: { type: ItemTypes.CARD, text },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.5 : 1
		})
	})
	return (
		<div className='App'>
			{text} ref={dragRef} style={{ opacity }}
		</div>
	)
}

export default App
