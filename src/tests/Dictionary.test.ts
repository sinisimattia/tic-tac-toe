import { Dictionary } from '../classes/Dictionary'

test("Dictionary construction and JSON conversion", () => {
    let dictionary = new Dictionary<String>([
        ["name", "Mattia"],
        ["name", "Not Mattia"]
    ])

    expect(dictionary.toJson()[0].value).toBe("Mattia")
})

test("Find element in dictionary", () => {
    let dictionary = new Dictionary<any, Number>([
        [1, "Mattia"],
        [2, 18],
    ])

    expect(dictionary.find(1)).toBe("Mattia")
})