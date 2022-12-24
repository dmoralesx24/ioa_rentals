import React, { useEffect, useState } from "react";
import { Container, Segment } from "semantic-ui-react";
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file




const GuestSearch: React.FC = () => {
    // const [state, setState] = useState({
    //     startDate: new Date(),
    //     endDate: addDays(new Date(), 7),
    //     focusedInput: null,
    //     key: 'selection'
    // });

    const [state, setState] = useState([
        {
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        key: 'selection'
        }
    ]);

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

    return (
        <Container textAlign="center">
            <Segment color='blue'>
            {/* <DateRange
                editableDateInputs={true}
                onChange={item => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
            /> */}

            </Segment>
        </Container>
    )
}

export default GuestSearch;