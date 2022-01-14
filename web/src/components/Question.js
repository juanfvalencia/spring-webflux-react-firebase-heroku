import React from 'react'
import { Link } from 'react-router-dom'

export const Question = ({ question, excerpt, onDelete, setCategorySearch }) => {

  const findCategory = () => {
    setCategorySearch(question.category)
  }
  
  return <article className={excerpt ? 'question-excerpt' : 'question'}>
    <div class="row">

        <div class="col-md-auto">
          <img src={question.photoUrl ? question.photoUrl : "https://i.ibb.co/1rkvVY3/foto-anonimus-profile.png"}></img>
        </div>

          <div className='col-md-auto'>
          <h2><div dangerouslySetInnerHTML={{__html:question.question}} /></h2>
            <p onClick={findCategory} > 
              <a className='text-decoration-underline'>{question.category}</a>  - 
            <small>{question.type}</small>
          </p>
    
        <div className='row'>
    
        <div className="col-md-auto">
          {excerpt && (
          <Link to={`/question/${question.id}`} className="btn btn-prymary btn-lg btn-block">
            View Question
          </Link>
          )}
        </div>
          <div className='col-md-auto'>   
          {onDelete && (
            <button className="button right" onClick={() => onDelete(question.id)}>DELETE</button>
          )}
          </div>
        </div> 
      </div>
    </div>
  </article>
}
          
