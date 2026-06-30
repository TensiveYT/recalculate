/* import: local interfaces */
import { MathCpx as MathCpxType } from '../interfaces/MathCpx.js'

/* import: local classes */
import { ComplexNumber } from '../classes/ComplexNumber.js'

/* code */
export const MathCpx: MathCpxType = {
	toComplex: (N) => {
		return typeof N === 'number'
			? new ComplexNumber(N, 0)
			: N
	},
	conjugate: (Z) => {
		let zx = typeof Z === 'number' ? Z : Z.x,
		    zy = typeof Z === 'number' ? 0 : Z.y

		return new ComplexNumber(
			zx,
			-zy
		)
	},
	add: (A, B) => {
		let ax = typeof A === 'number' ? A : A.x,
		    ay = typeof A === 'number' ? 0 : A.y

		let bx = typeof B === 'number' ? B : B.x,
		    by = typeof B === 'number' ? 0 : B.y
		
		return new ComplexNumber(
			ax + bx, 
			ay + by
		)
	},
	sub: (A, B) => {
		let ax = typeof A === 'number' ? A : A.x,
		    ay = typeof A === 'number' ? 0 : A.y

		let bx = typeof B === 'number' ? B : B.x,
		    by = typeof B === 'number' ? 0 : B.y

		let complex = new ComplexNumber(
			ax - bx, 
			ay - by
		)

		return complex
	},
	mul: (A, B) => {
		let ax = typeof A === 'number' ? A : A.x,
		    ay = typeof A === 'number' ? 0 : A.y

		let bx = typeof B === 'number' ? B : B.x,
		    by = typeof B === 'number' ? 0 : B.y 
		
		return new ComplexNumber(
			ax * bx - ay * by, 
			ax * by + ay * bx
		)
	},
	pow: (A, B) => {
		let ax = typeof A === 'number' ? A : A.x,
		    ay = typeof A === 'number' ? 0 : A.y

		let bx = typeof B === 'number' ? B : B.x,
		    by = typeof B === 'number' ? 0 : B.y 

		if (ax === 0 && ay === 0)
			return new ComplexNumber(0, 0)

		let r = Math.hypot(ax, ay)
		let T = Math.atan2(ay, ax)

		let l = Math.log(r)

		let As = bx * l - by * T
		let Bs = bx * T + by * l

		let e = Math.exp(As)
		
		return new ComplexNumber(
			e * Math.cos(Bs), 
			e * Math.sin(Bs)
		)
	}
}