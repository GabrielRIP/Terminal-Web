import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { change_state } from '../../redux/actions/NavOptionAction'

//Styled Components and CSS
import {
  NavContainer,
  PLeft
} from './style/navTerminal.js'
import './style/style.css'

export default function NavTerminal() {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch()
  const navOptionState = useSelector(state => state.navOptionState)

  function changeLocalState () {
    if(isOpen) {
      dispatch(change_state(isOpen))
      setIsOpen(false)
    } else {
      dispatch(change_state(isOpen))
      setIsOpen(true)
    }
  }

  return (
    <NavContainer>
      <PLeft>Help</PLeft>
      <h1>WebSite Terminal</h1>
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
