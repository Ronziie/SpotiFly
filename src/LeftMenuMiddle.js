import React, { useEffect } from 'react'
import ReactTooltip from 'react-tooltip'

export default function LeftMenuMiddle({title, MenuObject}) { //prop
 
  useEffect(() => {
    const allLi = document.querySelector('.MenuContainer ul').querySelectorAll('li');
    
    //everytime the menu is hovered over remove active class that highlights the menu
    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    
    allLi.forEach( n => n.addEventListener('click', changeMenuActive));
  }, []);
 
  return (
    <div className='MenuContainer'>
      <p className='title'>{title}</p>

      <ul>
          {
              MenuObject && MenuObject.map((LeftMenuMiddle) => (
                <li key={LeftMenuMiddle.id}>
                    <a href="#">
                      <i>{LeftMenuMiddle.icon}</i>
                      <span>{LeftMenuMiddle.name}</span>
                    </a>
                </li>
              ))
          }
      </ul>
      <ReactTooltip effect="float" type="dark" place="top" />
    </div> 
  )
}
