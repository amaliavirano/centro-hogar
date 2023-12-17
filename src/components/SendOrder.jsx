import React from 'react';
import { useState } from 'react';
import { collection, getFirestore, addDoc } from 'firebase/firestore';
import { Input, Box, Button } from '@chakra-ui/react'; 



const SendOrder = () => {
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const db = getFirestore();
    const orderCollection = collection(db, 'orden');

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            nombre,
            email,
        };

        addDoc(orderCollection, order).then(({ id }) => {
            setId(id);
            setFormSubmitted(true);
        });
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="45vh" 
        >
            <h2 style={{ fontWeight: 'bold' }}>Finalizar compra</h2>
            {!formSubmitted && (
                <form onSubmit={handleSubmit} style={{ width: '500px' }}>
                    <Input
                        type='text'
                        placeholder='Nombre'
                        mb={2} 
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <Input
                        type='email'
                        placeholder='Email'
                        mb={2} 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type='submit' colorScheme="red" size="md" mb={4}>Enviar</Button>
                </form>
            )}
            {formSubmitted && <p>Id de la compra: {id}</p>}
            {formSubmitted && <Button onClick={() => setFormSubmitted(false)}>Realizar otra compra</Button>}
        </Box>
    );
};

export default SendOrder;
