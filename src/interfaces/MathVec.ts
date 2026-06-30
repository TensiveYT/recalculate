/* import: local classes */
import { Vector } from '../classes/Vector.js'

/* declaration */
/**
 * Defines common mathematical operations for vectors.
 */
export interface MathVec {
	/**
	 * Returns the sum of two vectors.
	 *
	 * @param A - The first vector.
	 * @param B - The second vector.
	 * @returns A new vector representing `A + B`.
	 */
	add(A: Vector, B: Vector): Vector

	/**
	 * Returns the difference between two vectors.
	 *
	 * @param A - The vector to subtract from.
	 * @param B - The vector to subtract.
	 * @returns A new vector representing `A - B`.
	 */
	sub(A: Vector, B: Vector): Vector

	/**
	 * Computes the dot product of two vectors.
	 *
	 * @param A - The first vector.
	 * @param B - The second vector.
	 * @returns The scalar dot product of the two vectors.
	 */
	dot(A: Vector, B: Vector): number

	/**
	 * Multiplies a vector by a scalar.
	 *
	 * @param V - The vector to scale.
	 * @param factor - The scalar multiplier.
	 * @returns A new vector with each component multiplied by `factor`.
	 */
	scale(V: Vector, factor: number): Vector
}