/* import: local classes */
import { Vector } from '../classes/Vector.js'

/* import: local interfaces */
import { MathVec as MathVecType } from '../interfaces/MathVec.js'

/* code */
export const MathVec: MathVecType = {
	add: (A: Vector, B: Vector) => {
		if (A.size !== B.size)
			throw new RangeError(`Cannot take the sum of vectors that are different sizes.`)

		return new Vector(
			A.components.map((c, i) => c + B.components[i])
		)
	},
	
	sub: (A: Vector, B: Vector) => {
		if (A.size !== B.size)
			throw new RangeError(`Cannot take the difference of vectors that are different sizes.`)

		return new Vector(
			A.components.map((c, i) => c - B.components[i])
		)
	},
	
	dot: (A: Vector, B: Vector) => {
		if (A.size !== B.size)
			throw new RangeError(`Cannot take the dot product of vectors that are different sizes.`)

		let sum = 0;

		for (let i = 0; i < A.size; i++) {
			sum += A.components[i] * B.components[i]
		}

		return sum
	},
	
	scale: (V: Vector, factor: number) => {
		return new Vector(
			V.components.map((c, i) => c * factor)
		)
	}
}