import React, { useEffect, useState } from 'react';

const Darkmode = () => {
  
    
    const [theme, setTheme] = useState("light-theme")

    const toggleTheme = ()=>{
      

        
    theme === "dark-theme" ? setTheme('light-theme') : setTheme("dark-theme")
    

    }

    useEffect(()=>{
        document.body.className = theme;
    }, [theme])
  return ( <>
      <header>
        <a href='#' alt='logo'>Karan Technical</a>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </nav>
      </header>
      {/* main section  */}
      <main>
        <section>
            <div className='container grid grid-two-column'>
            <div className='hero-section-data'>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eum,
             optio fuga quidem praesentium sunt rerum facilis eius amet, fugiat libero magni
             magnam vitae corporis quisquam assumenda! Consequuntur, iusto, iste!
            </p>
            <a href="#" className='btn' onClick={()=> toggleTheme()}>Toggle Mode</a>

            </div>
            <div className='hero-section-image'>
            <img src='https://images.pexels.com/photos/2663802/pexels-photo-2663802.jpeg' alt='karanjpg'/>

            </div>


            </div>
        </section>
      </main>
    </>
  )
  
}

export default Darkmode;
