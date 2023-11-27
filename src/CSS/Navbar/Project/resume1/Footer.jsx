import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>

        <div>
            <h1>GET IN TOUCH</h1>
            <a href="varneswarup@gmail.com">varneswarup@gmail.com</a>
            <br />
            <a href="tel:+919834813404">+91 9891813404</a>
        </div>
        
        <div className='footer1'>

            <h2>
                <button ><a href="/">Piono Website</a></button>
            </h2>

            <h2>
                <button><a href="/">Profile Card</a></button>
            </h2>
            <h2>
                <button><a href="/">VideoCall</a></button>
            </h2>

            <h2>
                <button><a href="/">Ecommerce</a></button>
            </h2>

            <h2>
                <button><a href="/">Movie Website</a></button>
            </h2>

        </div>

        <div>
            <div className='footerlogo'>
                <div><i className="fa-brands fa-facebook"></i></div>
                <div><i className="fa-brands fa-linkedin"></i></div>
                <div><i className="fa-brands fa-twitter"></i></div>
            </div>
            <p className='footerlogo1'>@copywrite Sudesh Gowada</p>
        </div>
        
    </div>
  )
}

export default Footer