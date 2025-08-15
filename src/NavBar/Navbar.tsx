import { Link  } from 'react-router-dom'
import logo from "/src/assets/logo.png"

const Navbar = () => {
  return (
    <>
    <header className='w-full h-[80px] bg-white'>
      <nav className='w-full h-full flex justify-center'>
        <div className='w-[95%] h-full flex'>
        
        {/* ===============LOGO================ */}
        <div className='w-1/3 flex items-center h-full justify-start'>
          <img src={logo} alt="..." className='h-full'/>
        </div>
        {/* ==============LINKS=============== */}
        <div className='relative w-1/3 h-full'>
            <ul className='w-full h-full flex items-center justify-center gap-x-4'>
              <li>
                <Link to="/" className='font-semibold text-sm hover:opacity-50 hover:cursor-pointer'>HOME</Link>
              </li>
              <li>
                <Link to="/" className='font-semibold text-sm hover:opacity-50 hover:cursor-pointer'>PRODUCTS</Link>
              </li>
              <li>
                <Link to="/" className='font-semibold text-sm hover:opacity-50 hover:cursor-pointer'>SERVICES</Link>
              </li>
              <li>
                <Link to="/" className='font-semibold text-sm hover:opacity-50 hover:cursor-pointer'>CONTACT</Link>
              </li>
            </ul>
        </div>
        {/* ==============AUTH================ */}
        <div className='h-full w-1/3 flex items-center justify-end'>
          <button className="rounded-xl px-4 py-2 text-semibold text-white bg-[var(--neon-orange)] hover:opacity-50 hover:cursor-pointer hover:rounded-lg">SIGN IN</button>
        </div>

        </div>  
      </nav>
    </header>
    </>
  )
}

export default Navbar