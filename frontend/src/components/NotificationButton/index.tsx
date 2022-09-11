import axios from 'axios';
import icon from '../../assets/img/Notification-icon.svg'
import { BASE_WHATEVER } from '../../utils/request';

import './styles.css'

type props =
{
    saleId: number;
}

function handleClick(iden: number)
{
    axios(`${BASE_WHATEVER}/Sales/${iden}/notification`)
         .then(resposta => {
            console.log("Sucesso");
         })
}

function NotificationButton({saleId} : props)
 {
   
    return( 
           <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
               <img src={icon} alt="Notificar" />
           </div> 
           )
  
 }

export default NotificationButton
