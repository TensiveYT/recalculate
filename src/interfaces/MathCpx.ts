/* import: local classes */
import { ComplexNumber } from '../classes/ComplexNumber.js'

/* declaration */
/**
 * Complex math operations.
 */
export interface MathCpx {
	/**
	 * Converts a value to a {@link ComplexNumber}.
	 *
	 * - If the input is already a {@link ComplexNumber}, it is returned unchanged.
	 * - If the input is a real number, it is converted to `a + 0i`.
	 *
	 * @param N The value to convert.
	 */
	toComplex(N: number | ComplexNumber): ComplexNumber

	/**
	 * Returns the complex conjugate of the given number.
	 *
	 * If the input is a real number, it is treated as a complex number with zero imaginary part,
	 * and the result is identical to the input. If the input is a complex number, the sign of the
	 * imaginary component is inverted while the real component remains unchanged.
	 *
	 * @param Z The real/complex number to conjugate.
	 * @returns The complex conjugate of the input as a {@link ComplexNumber}.
	 */
	conjugate(Z: number | ComplexNumber): ComplexNumber

	/**
	 * Adds two real or complex values.
	 *
	 * @param a First operand.
	 * @param b Second operand.
	 * @returns The sum of the two operands.
	 */
	add(A: number | ComplexNumber, B: number | ComplexNumber): ComplexNumber

	/**
	 * Subtracts two real or complex values.
	 *
	 * @param a First operand.
	 * @param b Second operand.
	 * @returns The difference of the two operands.
	 */
	sub(A: number | ComplexNumber, B: number | ComplexNumber): ComplexNumber

	/**
	 * Multiplies two real or complex values.
	 * @param a First operand
	 * @param b Second operand.
	 * @returns The product of the two operands.
	 */
	mul(A: number | ComplexNumber, B: number | ComplexNumber): ComplexNumber

	/**
	 * Raises a value to a power in the complex number system.
	 *
	 * @param a Base value.
	 * @param b Exponent value.
	 * @returns The power of the two operands.
	 */
	pow(A: number | ComplexNumber, B: number | ComplexNumber): ComplexNumber
}