import React, {useEffect} from "react";
import {db} from '../../firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const About = () => {
    useEffect(() => {
        // handleSubmit();
        console.log('About page has loaded!!!!');
    }, [])

    const handleSubmit = async () => {
        // e.preventDefault()
        try {
          await addDoc(collection(db, 'tasks'), {
            title: 'testing time',
            description: 'These examples are tests',
            completed: false,
            created: Timestamp.now()
          })
            //   onClose()
        } catch (err) {
            console.log('any error?')
          alert(err)
        }
        console.log('created example worked!');
    }

    return (
        <p>About</p>
    )
}

export default About;