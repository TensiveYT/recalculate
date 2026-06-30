/* import: local classes */
import { ComplexNumber } from '../classes/ComplexNumber.js'

/* declaration */
/**
 * Complex math operations.
 */
export interface MathCpx {
	/**
	 * Converts a value to a `ComplexNumber`.
	 *
	 * - If the input is already a `ComplexNumber`, it is returned unchanged.
	 * - If the input is a real number, it is converted to `a + 0i`.
	 *
	 * @param input The value to convert.
	 */
	toComplex(input: number | ComplexNumber): ComplexNumber

	/**
	 * Adds two real or complex values.
	 *
	 * @param a First operand.
	 * @param b Second operand.
	 * @returns The sum of the two operands.
	 */
	add(a: number | ComplexNumber, b: number | ComplexNumber): ComplexNumber

	/**
	 * Subtracts two real or complex values.
	 *
	 * @param a First operand.
	 * @param b Second operand.
	 * @returns The difference of the two operands.
	 */
	sub(a: number | ComplexNumber, b: number | ComplexNumber): ComplexNumber

	/**
	 * Multiplies two real or complex values.
	 * @param a First operand
	 * @param b Second operand.
	 * @returns The product of the two operands.
	 */
	mul(a: number | ComplexNumber, b: number | ComplexNumber): ComplexNumber

	/**
	 * Raises a value to a power in the complex number system.
	 *
	 * @param a Base value.
	 * @param b Exponent value.
	 * @returns The power of the two operands.
	 */
	pow(a: number | ComplexNumber, b: number | ComplexNumber): ComplexNumber
}