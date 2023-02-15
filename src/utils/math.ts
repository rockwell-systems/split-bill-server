export const mathUtils = {
    generateRandom: (length: number): string => {
        if (length <= 0) {
            throw new Error('mathUtils.generateRandom: length must be greater than zero.')
        }
        let maxString = ''
        Array(length)
            .fill('9')
            .map((x) => {
                maxString += x
            })
        const max = Number(maxString)
        const min = 0
        const random = Math.floor(Math.random() * (max - min + 1) + min)
        return (random + '').padStart(4, '0')
    },
}
