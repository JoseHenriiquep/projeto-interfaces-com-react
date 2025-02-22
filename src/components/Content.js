import React, { useState, useEffect, use } from 'react'
import { Container, Form, FormFeedback, FormGroup, Label, Input, Button } from 'reactstrap'
import '../styles.css';

export default function Content(){

    const [formData, setFormData] = useState(
        {
            nome: '',
            email: '',
            avaliacao: ''
        }
    );
    const [optionAvaliacao, setOptionAvaliacao] = useState([]);

    useEffect(() => {
        fetch("https://api.npoint.io/effbd6ac0f28dca1eab7")
        .then((response) => {
            if(!response.ok) {
                throw new Error("Erro ao buscar os dados")
            }
            return response.json();
        })
        .then((data) => {
            setOptionAvaliacao(data);
        })
        .catch((error) => {
            console.log(`Sem resposta ${error.message}`)
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        const avaliacaoSelected = optionAvaliacao.find(option => option.value == formData.avaliacao)?.name 
        
        const confirmationMessage = `Olá ${formData.nome}, <${formData.email}> seu feedback: ${avaliacaoSelected} foi enviado!`

        if (formData.nome.length === 0 || formData.email.length === 0) {
            alert("Preencha todos os campos")
        } else {
            alert(confirmationMessage); 
        }
         
    }

    return(
        <>
            <Container>
                <h1 className='title-form'>Envie sua Avaliação</h1>    
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="nome">
                            Nome
                        </Label>
                        <Input
                        id="nome"
                        name="text"
                        type="text"
                        valid={formData.nome.length > 0 ? true : null}
                        invalid={formData.nome.length === 0 ? true : null}
                        onChange={(e) => setFormData({...formData, nome: e.target.value})}
                        placeholder="Digite seu nome"
                        />
                        <FormFeedback>Digite seu nome antes de enviar.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">
                        Email
                        </Label>
                        <Input
                        valid={formData.email.length > 0 ? true : null}
                        invalid={formData.email.length === 0 ? true : null}
                        id="Email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        <FormFeedback>Digite seu email antes de enviar.</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="avaliacao">
                            Avaliação
                        </Label>
                        <Input
                            id="avaliacao"
                            name="avaliacao"
                            type="select"
                            value={formData.avaliacao}
                            onChange={(e) => setFormData({...formData, avaliacao: e.target.value})}
                        >  
                            {optionAvaliacao.length ? (
                            optionAvaliacao.map((option, index) => (
                                <option key={index} value={option.value} >
                                    {option.name}
                                </option>
                            ))
                            ) : (
                                <option value="">Carregando...</option>
                            )}
                        </Input>
                        <FormFeedback>Selecione uma opção antes de enviar.</FormFeedback>
                    </FormGroup>
                    <Button id='btn-submit'>Enviar</Button>
                </Form>
            </Container>
        </>
    )
};