import video1 from './video/video waves.mp4'
import audio1 from './Audio/Gali Gali - KGF 128 Kbps.mp3'
const Html = ()=>{
    return(
        <div>
            <center><h1>Welcome to HTML</h1></center>
            <img src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height={'500px'} width={'49%'}></img>
            <br />
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">Youtube</a>
            <br/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FZYhL_bVQUQ?si=RE8i2K-bw0Ci_8h8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4962920468033!2d73.91112091090366!3d18.50646176953215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1fceb8377%3A0xb160caad3213fedf!2sKumar%20Primus!5e0!3m2!1sen!2sin!4v1700566349275!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            <br/>
            <video src={video1} height={'500px'} width={'100%'} autoPlay loop muted></video>
            <audio src={audio1} controls></audio>


            <table border={'1px'} width={'50%'}>
                <thead>
                    <td>Name</td>
                    <td>Sal</td>
                    <td>Job</td>
                </thead>
                <tbody>
                <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>JE</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td rowSpan={2}>JE</td>
                    </tr>
                    <tr>
                    <td>A</td>
                        <td>10</td>
                        {/*<td>JE</td>*/}
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>JE</td>
                    </tr>
                    <tr>
                        <td>A</td>
                        <td>10</td>
                        <td>JE</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>@copywrite shubham nikam</td>
                    </tr>
                </tfoot>
            </table>

        </div>
    )
}


export default Html
