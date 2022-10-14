import React from 'react';

const Lightmode = () => {

    const togglebtn = ()=>{
        alert("hi click")
        console.log(alert);
    }
  return (
    <div>
 <a href='#' className='btn' onClick={()=> togglebtn}>Click</a>
    </div>
  );
}

export default Lightmode;
