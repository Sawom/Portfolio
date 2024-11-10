import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='mx-2  font-bold text-xl font-serif'>Md. Abdur Rashid</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl'>
          <a href='https://www.linkedin.com/in/abdur-rashid-sawom-3379a0262/'> <FaLinkedin/></a> 
          <a href='https://github.com/Sawom'> <FaGithub /></a> 
        </div>
    </nav>
  )
}

export default Navbar;