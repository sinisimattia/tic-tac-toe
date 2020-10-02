import { Dictionary } from '../classes/Dictionary'

test("Dictionary construction", () => {
    let dictionary = new Dictionary<String>([
        ["name", "Mattia"]
    ])

    expect(dictionary.toJson()[0].value).toBe("Mattia")
})