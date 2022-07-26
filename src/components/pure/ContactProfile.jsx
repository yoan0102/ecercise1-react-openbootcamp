import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactProfile = ({ contact }) => {
  return (
    <div>
      <div>
        Nombre: { contact.name}
      </div>
      <div>
        Apellido: {contact.lastName}
      </div>
      <div>
        Email: {contact.email}
      </div>
      <div>
        Contacto: { contact.conected ? 'en línea': 'No Disponible' }
      </div>
    </div>
  );
};





export default ContactProfile;