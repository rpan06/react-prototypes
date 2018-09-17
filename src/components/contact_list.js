import React, {Component} from 'react';
import ContactCard from './contact_card'

export default props => {
    const list = props.contacts.map((item,index)=>(
        <ContactCard key={index} contact={item}/>
    ))
    return (
        <div className='col-8'>
            <div className="row">
                {list}
            </div>
        </div>
    )
}
