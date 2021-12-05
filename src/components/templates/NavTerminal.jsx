import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { change_state } from '../../redux/actions/NavOptionAction'

//Styled Components and CSS
import { NavContainer, PLeft } from './style/navTerminal.js'
import './style/style.css'

export default function NavTerminal() {
  const [isOpen, setIsOpen] = useState(true);
  const [textLeft, setTextLeft] = useState('Help');
  const [titleCenter, setTitleCenter] = useState('Wet-Terminal');
  const dispatch = useDispatch()
  const navOptionState = useSelector(state => state.navOptionState)

  function changeLocalState () {
    if(isOpen) {
      dispatch(change_state(isOpen))
      setIsOpen(false)
      setTextLeft('')
      setTitleCenter('Preference')
    } else {
      dispatch(change_state(isOpen))
      setIsOpen(true)
      setTextLeft('Help')
      setTitleCenter('Web-Terminal')
    }
  }

  return (
    <NavContainer>
      <PLeft>{textLeft}</PLeft>
      <h1>{titleCenter}</h1>
      <div 
        className={navOptionState.classHamburger} 
        onClick={changeLocalState}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </NavContainer>
  )
}
