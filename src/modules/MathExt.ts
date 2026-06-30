/* import: local interfaces */
import { MathExt as MathExtType } from '../interfaces/MathExt.js'

/* code */
export const MathExt: MathExtType = {
	lerp: (start, end, factor) =>
		start + (end - start) * factor,

	max: (value, max) =>
		value > max ? max : value,

	min: (value, min) =>
		value < min ? min : value,

	clamp: (value, min, max) =>
		value < min ? min : (value > max ? max : value),

	mean: (...values) => 
		values.reduce((a, b) => a + b) / values.length,

	median: (...values) => {
		if (values.length < 1)
			throw new RangeError('Tried to take the median of a set with a length less than 1.')

		values = values.sort((a, b) => a - b)

		let half = Math.floor(values.length / 2)

		return (
			// length is odd
			values.length % 2 === 1 ?
				values[half]
			 
			// length is even, so we take the average of the left and the right
			:
				(values[half - 1] + values[half]) / 2
		)
	}
}