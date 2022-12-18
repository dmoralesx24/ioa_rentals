import React, { useState } from 'react'
import { Modal, Icon, Message, Container, Segment, Button } from 'semantic-ui-react';

// Pass props of:
// size - put the size of the modal
// floated - where you want the delete button to sit on the page.
// item - text that says what you're about to delete
// delete - method that deletes item when you click "Confirm"

const Reserve = (props) => {
    const [open, setOpen] = useState(props.open ? props.open : false);

    return (
        <Modal
            id='reserveModal'
            centered
            size={props.size} open={open}
            trigger={
                <Button floated={props.floated} className={props.className ? props.className : null} color='blue' onClick={() => setOpen(true)}>
                    <span>Check Availablity</span>
                </Button>
            }
            closeIcon onClose={() => setOpen(false)}
            header={<h2>Reserve</h2>}
            content={
                <Message
                    color='blue'
                    content={
                        <Container textAlign='center'>
                            <h2>Current Availablity</h2>
                            <Segment basic textAlign={"center"}>
                                <Button floated='left' content={'Cancel'} onClick={() => setOpen(false)} />
                                <Button floated='right' color='blue' content={'Reserve'}  />
                            </Segment>
                            <br />
                        </Container>
                    }
                />
            }
        />
    )
}

export default Reserve
