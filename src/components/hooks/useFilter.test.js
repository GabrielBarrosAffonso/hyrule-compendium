import { renderHook } from "@testing-library/react"
import { useFilter } from "./useFilter"

const mockedList = [
    {
        category: "equipment",
        description: "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
        dlc: false,
        drops: null,
        id: 153,
        image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
        name: "item 1"
    },
    {
        category: "monsters",
        description: "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
        dlc: false,
        drops: null,
        id: 153,
        image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
        name: "item 2"
    },
    {
        category: "creatures",
        description: "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
        dlc: false,
        drops: null,
        id: 153,
        image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
        name: "item 3"
    }
]


const mockedFilters = [
    "equipment",
    "creatures"
]

const expectedResult = [
    {
        category: "equipment",
        description: "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
        dlc: false,
        drops: null,
        id: 153,
        image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
        name: "item 1"
    },
    {
        category: "creatures",
        description: "A spirit of fire has taken the form of this giant dragon. Making its home in the Eldin region, it's said to have served the Spring of Power since ancient times. An old saying goes, \"The dragon ascends to the heavens as the sun begins to set,\" but nobody has witnessed this in the current age. The flames that coat its body make it dangerous to get near, but Dinraal bears no ill will toward people.",
        dlc: false,
        drops: null,
        id: 153,
        image: "https://botw-compendium.herokuapp.com/api/v3/compendium/entry/dinraal/image",
        name: "item 3"
    }
]


it('test useFilter Hook', () => {
    const { result } = renderHook(() => useFilter(mockedList, mockedFilters))
    expect(result.current).toStrictEqual(expectedResult)
})