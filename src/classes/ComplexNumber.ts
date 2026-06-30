
/* code */
export class ComplexNumber {
	constructor(
		/**
		 * The real part of the complex number.
		 */
		public x: number = 0, 
		/**
		 * The imaginary part of the complex number.
		 */
		public y: number = 0
	) {}

	toString() {
		if (this.x === 0 && this.y === 0)
			return '0'

		let base = ''

		if (this.x !== 0) {
			// add the real part
			base += this.x.toString()
		}

		if (this.x !== 0 && this.y !== 0) {
			// add the operator
			base += ' ' + (this.y < 0 ? '-' : '+') + ' '
		}
            
		if (this.y !== 0) {
			// add the imaginary part
			if (this.x === 0 && this.y < 0)
				base += '-'

			base += this.y === 1 || this.y === -1
				? 'i'
				: Math.abs(this.y).toString() + 'i'
					
		}

		return base
	}
}