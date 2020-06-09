import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Components/Layouts'
import Exercises from './Components/Exercises'
import { muscles, exercises } from './store.js'

export default class extends Component {
  state = {
    exercises
  }

  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise

      exercises[muscles] = exercises[muscles] ? [...exercises[muscles], exercise] : [exercise]
      return exercises
    }, {})
    )
  }

  handleCaterorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState((previous))
  }

  render() {
    const exercises = this.getExercisesByMuscles(),
    { category } = this.state

    return <Fragment>
      <Header />
      <Exercises
      category = {category}
      exercises={exercises}/>
      onSelect={this.handleExerciseSelected}

      <Footer
        category={category}
        muscles = {muscles}
        onSelect= {this.handleCaterorySelected}
      />
    </Fragment>
  }
} 