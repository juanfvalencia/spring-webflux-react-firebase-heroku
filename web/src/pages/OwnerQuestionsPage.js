import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchOwnerQuestions, deleteQuestion } from '../actions/questionActions'
import { Question } from '../components/Question'
import swal from 'sweetalert';

const OwnerQuestionsPage = () => {

    const questions = useSelector(state => state.question);
    const userId = useSelector(state => state.auth.uid);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOwnerQuestions(userId))
    }, [dispatch, userId]);

    useEffect(() => {
        if (questions.redirect) {
            dispatch(fetchOwnerQuestions(userId))
        }
    }, [questions.redirect, dispatch, userId]);

    const onDelete = (id) => {
        swal({
            tittle: "¿Eliminar?",
            text: "¡Recuerda, si eliminas la pregunta no podras recuperarla!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((eliminar) => {
            if (eliminar) {
                swal("¡Se ha eliminado con exito!",{
                    icon: "success",
                });
                dispatch(deleteQuestion(id))
            } else {
                swal("uff, siempre es bueno rectificar");
            }
        });
    }


    const renderQuestions = () => {
        if (questions.loading) return <p>Loading questions...</p>
        if (questions.hasErrors) return <p>Unable to display questions.</p>

        return questions.questions.map(question => <Question
            key={question.id}
            question={question}
            excerpt onDelete={onDelete} />)
    }

    return (
        <section>
            <h1 className="text-center p-4">Questions</h1>
            <hr></hr>
            <br></br>
            {renderQuestions()}
        </section>
    )
}

export default OwnerQuestionsPage
