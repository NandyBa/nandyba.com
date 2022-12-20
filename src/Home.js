import { FaTwitter, FaLinkedin } from "react-icons/fa";


function Home() {
  return (
    <>
      <div className="big-card">
        <div>
          <h2>Nandy BÂ</h2>
          <h1>DeFi Specialist | Advisor | Blockchain builder</h1>
          <h2>
            <a href='https://twitter.com/Nandy_ba'><FaTwitter/></a>
            <a href='https://linkedin.com/in/nandyba'><FaLinkedin/></a>
          </h2>
        </div>
        
      </div>
        <div>
          <div className="card">
            <h2>DeFi</h2>
            <h3>Resources recomandées:</h3>
            <ul>
              <li><a href='https://www.youtube.com/@Finematics'>Finematics</a></li>
              <li><a href='https://aave.com'>Aave</a> • <a href='https://docs.aave.com'>Docs</a></li>
              <li><a href='https://bridge.connext.network/'>Connext Bridge</a> • <a href='https://li.fi'>Li.fi</a></li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Home
