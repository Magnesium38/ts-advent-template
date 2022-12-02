import '@/array-extensions'

import fs from 'fs'

const parseDay = (day: string | undefined): number => {
	if (day === undefined) {
		return NaN
	}

	return parseInt(day, 10)
}

const day = parseDay(process.argv[2])

if (isNaN(day) || day < 1 || day > 25) {
	console.error('Usage `yarn run day <1-25>`')
} else {
	const file = `./src/day${day.toFixed(0).padStart(2, '0')}`
	const input = fs.readFileSync(`${file}/input.txt`, 'utf8').trim()

	const { pt1, pt2 } = (await import(file)) as {
		pt1: (input: string) => unknown,
		pt2: (input: string) => unknown,
	}

	const start = performance.now()

	const pt1Result = pt1(input)
	const pt2Result = pt2(input)

	const end = performance.now()

	console.log('Part One:', pt1Result)
	console.log('Part Two:', pt2Result)
	console.log('Elapsed (ms):', Math.round((end - start) * 1000) / 1000)
}
