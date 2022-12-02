export {}

declare global {
	interface Array<T> {
		max: () => T extends number ? T : undefined,
		sum: () => T extends number ? T : undefined,
	}
}

Array.prototype.max = function max(this: Array<number>) {
	return this.reduce((max, curr) => (curr > max ? curr : max))
}

Array.prototype.sum = function sum(this: Array<number>) {
	return this.reduce((prev, curr) => prev + curr, 0)
}
