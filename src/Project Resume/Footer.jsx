import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <section className="footersec">
        <div className="footdiv1">
            <h1>GET IN TOUCH</h1>
            <p>sudeshmd1997@gmail.com</p>
            <p>+918123265859</p>
        </div>
        <div className="footdiv2">
        <h2><button id='headerbtn'><a href="https://krisumovie.netlify.app/">Movie Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisuecommerce.netlify.app/">Ecom Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisugooglmeet.netlify.app/?roomID=1J5V4">Videocalling Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisupixaby.netlify.app/">Pixaby Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisucontactform.netlify.app/">Contact Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisubirthaday.netlify.app/">B'day Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisuweather.netlify.app/">Weather Website</a></button></h2>
        <h2><button id='headerbtn'><a href="https://krisupiano.netlify.app/">Piano Website</a></button></h2>
        
        </div>
        <div className="footdiv3">
                     <article className='footart'>
                     <div className='navicon'><i className="fa-brands fa-facebook"></i></div>
                        <div className='navicon'><a href='https://in.linkedin.com/in/sudesh-gowda-md-sudesh-12432a159'><i className="fa-brands fa-linkedin"></i></a></div>
                        <div className='navicon'><i className="fa-brands fa-twitter"></i></div>
                     </article>
                        <br></br>
                        <p>@copywrite sudeshGowda</p>
        </div>
        </section>
    </div>
  )
}

export default Footer