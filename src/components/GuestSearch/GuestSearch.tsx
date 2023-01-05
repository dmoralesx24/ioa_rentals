import React, { useEffect, useState } from "react";
import { Container, Segment, Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './guestSearch.css';

const GuestSearch: React.FC = () => {
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    useEffect(() => {
        // handleSubmit();
        console.log('Guest Search component has loaded!!!!');
    }, []);

    // const handleSubmit = async () => {
    //     // e.preventDefault()
    //     try {
    //       await addDoc(collection(db, 'tasks'), {
    //         title: 'testing time',
    //         description: 'These examples are tests',
    //         completed: false,
    //         created: Timestamp.now()
    //       })
    //         //   onClose()
    //     } catch (err) {
    //         console.log('any error?')
    //       alert(err)
    //     }
    //     console.log('created example worked!');
    // }

    //TODO: i need to create a grid within this segment to display everthing on a single row. might need to use my build formComponent.
    return (
        <Container textAlign="center">
            <Segment color='blue'> 
            <div className='input-icons'>
                <Icon className='icon' name='calendar alternate'/>
                <DatePicker
                    className='input-field'
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                    setDateRange(update);
                    }}
                    isClearable={true}
                >
                    <Icon name='calendar alternate'/>
                </DatePicker>
            </div>
            </Segment>
        </Container>
    )
}

export default GuestSearch;