

import { Contact } from '../../models/contact.class';
import ContactProfile from '../pure/ContactProfile';


const ContactComponent = () => {

  const defaultContact = new Contact('Yoan', 'Estrada', 'yoa"prueba.com', false);

  return (
    <div>
      <div>
        Your Contact:
      </div>
      <div>
        <ContactProfile contact={ defaultContact } />
      </div>

    </div>
  );
};





export default ContactComponent;
