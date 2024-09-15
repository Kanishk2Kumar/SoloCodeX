import {LightTheme} from '../assets/images';
import {hamburger} from "../assets/icons";
import { navLinks } from "../constants";
import Button from './Button';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={LightTheme} alt="Logo"
                width={120}
                height={50}
                />
            </a>
            <ul className='flex-1 flex justify-center gap-16 max-lg items-center max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                    <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-300'
                    >
                    {item.label}
                    </a>
                    </li>
                ))}
                <Button
                  label="Register"
                  backgroundColor="bg-gradient-custom"     /* Custom Background Color */
                  textColor="text-white"            
                  borderColor="border-black"  
                  fullWidth={false}                 
                />
            </ul>
            <div className='hidden max-lg:block'>
                <img 
                    src={hamburger}
                    alt='Hamburger'
                    height={25}
                    width={25}
                />
            </div>
        </nav>
    </header>
  )
}

export default Nav