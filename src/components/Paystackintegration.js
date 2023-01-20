import PayStackPop from "@paystack/inline-js";
import { Container, Form, Segment, Button } from 'semantic-ui-react'
import { useState } from "react";


const Paystactintegration = ()=>{
    const [email, setEmail] = useState("")
    const [amount, setAmount] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name, setLast_name] = useState("")
    const pay_with_paystack =(e)=>{
        e.preventDefault()
        const paystack = new PayStackPop()
        paystack.newTransaction({
            key: "pk_test_73c64387acd09ac195b487d3175c36597f341b84",
            amount: amount * 100,
            email,
            firstname: first_name,
            lastname: last_name,
            onSuccess(transaction){
                let message = `Payment Complete! Refereence ${transaction.reference}`
                alert(message)
                setAmount("")
                setEmail("")
            },
            onCancel(){
                alert("You have cancelled the transaction")
            }
        })
    }
    return(
        <Container>
            <Segment inverted>
                <Form inverted>
                    <Form.Input fluid label='Email' placeholder='example john@gmail.com' value={email} onChange={e=>setEmail(e.target.value)} />
                    <Form.Input fluid label='Amount' placeholder='Amount' value={amount} onChange={e => setAmount(e.target.value)} />
                    <Form.Input fluid label='First name' placeholder='First name' value={first_name}  onChange={e => setFirst_name(e.target.value)}/>
                    <Form.Input fluid label='Last name' placeholder='Last name' value={last_name} onChange={e => setLast_name(e.target.value)}/>
                    <Button type='submit' onClick={pay_with_paystack}>Submit</Button>
                </Form>
            </Segment>
        </Container>
    )
}

export default Paystactintegration;