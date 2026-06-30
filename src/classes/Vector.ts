/* code */
export class Vector {
	readonly components: number[]
	constructor(components: number | number[]) {
		if (typeof components === 'number') {
			this.components = Array(components).fill(0)
		} else {
			this.components = components
		}
	}

	/**
	 * Returns a component of the vector.
	 * @param index The index of the component.
	 * @returns 
	 */
	get(index: number) {
		return this.components[index]
	}

	get length() {
		return Math.hypot(...this.components)
	}

	get size() {
		return this.components.length
	}
}