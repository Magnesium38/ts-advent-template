export {}

declare global {
	interface Array<T> {
		max(): T extends number ? T : undefined;
		sum(): T extends number ? T : undefined;
	}
}

Array.prototype.max = function () {
	return this.reduce((max, curr) => curr > max ? curr : max)
}

Array.prototype.sum = function () {
	return this.reduce((prev, curr) => prev + curr, 0)
}
