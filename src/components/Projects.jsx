import { useState, React} from 'react'
import items from './CardData'
import Cards from './Cards'
import Button from './Button';
import {Link} from 'react-router-dom'
import{FaTwitter, FaGithub, FaLinkedin, FaHome} from 'react-icons/fa'
import "./Projects.css"

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories);

const Projects = () => {

  const [menuItem, setMenuItem] = useState(items);
  const [buttons] = useState(allCategories);

  //Filter Function
  const filter = (button) =>{

    if(button === 'All'){
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter(item => item.category ===  button);
    setMenuItem(filteredData)
  }


  return (
    <div className='projo'>
        <div className="navbar">
        <div className='alemba'>Alemba</div>
          <div className="socials">
              <Link to='/'><FaHome className='icons'/></Link>
              <Link to='https://www.linkedin.com/in/alex-kiragu-754690219/'><FaLinkedin className='icons'/></Link>
              <Link to='https://twitter.com/alemba97'><FaTwitter className='icons'/></Link>
              <Link to='https://github.com/Alemba-Alex'><FaGithub className='icons'/></Link>
          </div>
        </div>
        <div className="info2">
            <h1>Projects</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nam adipisci soluta officia at commodi iure illo natus blanditiis consequuntur ipsa temporibus hic fugit, veritatis recusandae debitis enim sequi magni!</p>
        </div>
            <Button button={buttons} filter={filter}/>
            <Cards menuItem={menuItem}/>
        </div>
  )
}

export default Projects