import React, { useState } from 'react'
import { Form } from 'react-bootstrap';

export default function AddToDo({ addToDo }) {
    const [value, setValue] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        if (!value) return;
        addToDo(value);
        setValue('');

    };

    return (
        <Form onSubmit={submitForm}>
            <Form.Control size="sm" type="text" placeholder="Add to do" value={value} onChange={e => setValue(e.target.value)} />
        </Form>
    )
}
