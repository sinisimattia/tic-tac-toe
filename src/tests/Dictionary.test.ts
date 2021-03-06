import { Dictionary } from '@/classes/Dictionary'

test("Dictionary construction and JSON conversion", () => {
    const dictionary = new Dictionary<String>([
        ["name", "Mattia"],
        ["name", "Not Mattia"]
    ])

    expect(dictionary.content[0].value).toBe("Mattia")
})

test("Find element in dictionary", () => {
    const dictionary = new Dictionary<any, Number>([
        [1, "Mattia"],
        [2, 18],
    ])

    expect(dictionary.find(1)).toBe("Mattia")
})