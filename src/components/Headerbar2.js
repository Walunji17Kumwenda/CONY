import { NavLink } from 'react-router-dom';

const Headerbar2 = () => {

  return( 
    <div className="flex flex-row justify-items-end ">
    <div>
      <NavLink to="/"><img className=" py-1 px-1 mx-5 my-6 flex w-11 h-11" src="./menu.png" alt="Menu"/> </NavLink>
       </div>
    <div><h2 className="absolute top-0 right-0 h-16 w-16 ... mr-10 pt-6 text-2xl font-bold text-orange-500/100">CONY</h2></div>
    </div>
  
);
}

export default Headerbar2;