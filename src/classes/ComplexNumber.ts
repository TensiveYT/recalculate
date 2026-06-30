
/* code */
export class ComplexNumber {
	/**
	 * The real part of the complex number.
	 */
    real: number

	/**
	 * The imaginary part of the complex number.
	 */
	imag: number

	/**
	 * Alias for `ComplexNumber.real`.
	 */
	get x() {
		return this.real
	}
	set x(value) {
		this.x = value
	}

	/**
	 * Alias for `ComplexNumber.imag`.
	 */
	get y() {
		return this.imag
	}
	set y(value) {
		this.y = value
	}

	constructor(real?: number, imag?: number) {
		this.real = real ?? 0
		this.imag = imag ?? 0
	}

	toString() {
		if (this.real === 0 && this.imag === 0)
			return '0'

		let base = ''

		if (this.real !== 0) {
			// add the real part
			base += this.real.toString()
		}

		if (this.real !== 0 && this.imag !== 0) {
			// add the operator
			base += ' ' + (this.imag < 0 ? '-' : '+') + ' '
		}
            
		if (this.imag !== 0) {
			// add the imaginary part
			base += this.imag === 1 || this.imag === -1
				? 'i' 
				: Math.abs(this.imag).toString() + 'i'
					
		}

		return base
	}
}