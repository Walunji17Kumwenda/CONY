import { NavLink } from 'react-router-dom';

const Headerbar = () => {

  return( 
    <div className="flex flex-row justify-items-end ">
    <div>
      <NavLink to="Homepage"><img className=" py-1 px-1 mx-5 my-6 flex  mx-auto w-11 h-11" src="./menu.png" alt="Menu"/> </NavLink>
       </div>
    <div><h2 className="absolute top-0 right-0 h-16 w-16 ... mr-10 pt-6 text-2xl font-bold text-orange-500/100">CONNY</h2></div>
    </div>
  
);
}

export default Headerbar;