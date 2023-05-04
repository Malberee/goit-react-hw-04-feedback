import React, { useState } from 'react'
import { Title } from './App.styled.jsx'
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notification from './Notification'

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const countTotalFeedback = () => {
		return good + neutral + bad
	}

	const countPositiveFeedbackPercentage = () => {
		return Math.round((good * 100) / countTotalFeedback())
	}

	const onLeaveFeedback = (feedback) => {
		if (feedback === 'good') setGood((prevState) => prevState + 1)
		if (feedback === 'neutral') setNeutral((prevState) => prevState + 1)
		if (feedback === 'bad') setBad((prevState) => prevState + 1)
		// this.setState({
		// 	[feedback]: this.state[feedback] + 1,
		// })
	}

	const total = countTotalFeedback()

	return (
		<>
			<Section title="Please leave feedback">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={onLeaveFeedback}
				/>
			</Section>
			<Section title="Statistics">
				{total === 0 ? (
					<Notification message="There is no feedback" />
				) : (
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback()}
						positivePercentage={countPositiveFeedbackPercentage()}
					/>
				)}
			</Section>
		</>
	)
}
export default App
