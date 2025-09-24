import React, { Children, useRef, useState } from 'react'
import './Navbar.css';

const DropDownButtons = ({label,icon, items, delay= 200}) => {


    // state to check if button is Open
    const [isOpen, setIsOpen] = useState(false)

    // create a ref to all the p in right sidebar
    let dropDownSideP = useRef([])

    // timer to active dropdown
    const timerRef = useRef(null)

    // runs when mouse enters and starts timer 
    const handleMouseEnter = ()=>{
        timerRef.current = setTimeout(() =>{
            setIsOpen(true)
        }, delay)
    }

    // runs when mouse leaves and stops timer
    const handleMouseLeave = () =>{
        timerRef.current = null;
        setIsOpen(false)
    }

  return (
    <div id='secondNav'
        onClick={(e)=>{
                    if(e.target.matches('.inner')){
                        navigate('/category/products')
                    }
                }}
    >
        {
            items.map((item)=>{
                return <div className={item.class}>
                          {
                            item.icon&&item.icon
                          }                            
                          {item.name} 
                          {/* dropDown wrapper for all categories sidebar */}
                          {
                            item.children &&(
                                // map though the child to generate right sidebar
                                <div className='dropDown-wrapper' id='drop'>
                                    <div className='dropDown'>
                                        <div className='items left'>
                                            { 
                                            item.children[0].map((text, i)=>{
                                                return <p className={text.class} onMouseEnter={(e)=>console.log("Mouse")}>{text.name}</p>
                                            })
                                            }
                                        </div>
                                
                                    </div>
                                </div>
                                
                            )
                          }
                       </div>
            })
        }
        
    </div>
  )
}

export default DropDownButtons
