export default function Contacts({contacts}){
    return(
        <ul>
            {contacts && contacts.map(contact => (
                <li>{contact.name}: {contact.number}</li>
            ))}
        </ul>
    )
}