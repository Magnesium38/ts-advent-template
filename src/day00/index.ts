export function pt1(input: string) {
	return null
}

export function pt2(input: string) {
	return null
}


const input = ``
const partOneAnswer: ReturnType<typeof pt1> = null
const partTwoAnswer: ReturnType<typeof pt2> = null


if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest
	const cleanInput = (input: string): string => input.split('\n').map(s => s.trim()).join('\n').trim()

	it.concurrent('solves part one', () => {
		const sample = cleanInput(input)

		const result = pt1(sample)

		expect(result).toBe(partOneAnswer)
	})

	it.concurrent('solves part two', () => {
		const sample = cleanInput(input)

		const result = pt2(sample)

		expect(result).toBe(partTwoAnswer)
	})
}
