import redeveloperlogo from '../assets/relogo.png';
import '../styles/Logo.css';

export default function Logo (){
  return(
    <div className='redeveloper-logo-container'> 
      <img
        src={redeveloperlogo}
        alt='RE Developer Logo'
        className='redeveloper-logo'
      />
    </div>
  );
}