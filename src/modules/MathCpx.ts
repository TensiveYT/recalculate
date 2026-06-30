/* import: local interfaces */
import { MathCpx as MathCpxType } from '../interfaces/MathCpx.js'

/* import: local classes */
import { ComplexNumber } from '../classes/ComplexNumber.js'

/* code */
export const MathCpx: MathCpxType = {
	toComplex(v: number | ComplexNumber) {
		return v instanceof ComplexNumber
			? v
			: new ComplexNumber(v, 0)
	},
	conjugate(input: number | ComplexNumber) {
		let A = this.toComplex(input)

		let complex = new ComplexNumber(A.x, -A.y)
		return complex
	},
	add(a: number | ComplexNumber, b: number | ComplexNumber) {
		let A = this.toComplex(a)
		let B = this.toComplex(b)

		let complex = new ComplexNumber(
			A.x + B.x, 
			A.y + B.y
		)

		return complex
	},
	sub(a: number | ComplexNumber, b: number | ComplexNumber) {
		let A = this.toComplex(a)
		let B = this.toComplex(b)

		let complex = new ComplexNumber(
			A.x - B.x, 
			A.y - B.y
		)

		return complex
	},
	mul(a: number | ComplexNumber, b: number | ComplexNumber) {
		let A = this.toComplex(a)
		let B = this.toComplex(b)
		
		let complex = new ComplexNumber(
			A.x * B.x - A.y * B.y, 
			A.x * B.y + A.y * B.x
		)
		
		return complex
	},
	pow(a: number | ComplexNumber, b: number | ComplexNumber) {
		let XY = this.toComplex(a)
		let UV = this.toComplex(b)

		if (XY.x === 0 && XY.y === 0)
			return new ComplexNumber(0, 0)

		let x = XY.x, y = XY.y
		let u = UV.x, v = UV.y

		let r = Math.hypot(x, y)
		let T = Math.atan2(y, x)

		let A = u * Math.log(r) - v * T
		let B = u * T + v * Math.log(r)
		
		let complex = new ComplexNumber(
			Math.exp(A) * Math.cos(B), 
			Math.exp(A) * Math.sin(B)
		)
		
		return complex
	}
}