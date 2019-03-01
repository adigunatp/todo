import React from 'react'
import PropTypes from 'prop-types'
import { editTodo } from '../actions'
import { connect } from 'react-redux'

const Todo = ({ id, dispatch, onClickToggle, onClickDelete, onClickDuplicate, onClickEdit, completed, text}) => {
  let input
  return(
    <div>
      <li>
        <h4
          onClick={onClickToggle}
          style={{
            textDecoration: completed ? 'line-through' : 'none',
            display: 'inline-block',
            marginRight: '5px'
          }}
        >
          {text}
        </h4>
        <button onClick={onClickDelete}>Delete</button>
        <button onClick={onClickDuplicate}>Duplicate</button>
        <div style={{display: completed ? 'none' : 'block'}}>
          <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(editTodo(id, input.value))
            input.value = ''
          }}>
            <input ref={node => input = node}></input>
            <button type='submit' onClick={onClickEdit}>Edit</button>
          </form>
        </div>
      </li>
    </div>
  )
}

Todo.propTypes = {
  onClickToggle: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickDuplicate: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default connect() (Todo)
