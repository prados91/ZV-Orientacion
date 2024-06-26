import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import './Question.css'

function Question({ question, onSaveAnswer }) {
    const [answer, setAnswer] = useState('');

    const handleSave = () => {
        if (answer.trim() === '') {
            //alert('Por favor, escribe una respuesta.');
            Swal.fire({
                title: `Escribe una respuesta antes de confirmar`,
                icon: "error",
                confirmButtonColor: "#00b7b7",
                confirmButtonText: "OK",
            });
            return;
        }
        onSaveAnswer(answer);
        setAnswer('');
    };


    return (
        <div className='container p-0'>
            <p>{question.id} - {question.question}</p>
            <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                rows="4"
                cols="50"
                placeholder="Escribe tu respuesta aquí..."
            ></textarea>
            <Link onClick={handleSave} className='btn btn-success mb-3 mt-2'>Guardar Respuesta</Link>
        </div>
    );
}

export default Question;