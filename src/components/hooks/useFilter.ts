import { useMemo, } from "react"
import { sortListByID, sortListByName } from "../../constants/sorting"
import { APIResponse } from "../typings/typings"

type SortFunction = (a: APIResponse, b:APIResponse) => number

export const useFilter = (listing: any[], filters: string[], sort: string) => {
    const filteredValues = useMemo(() => {
        const sortDictionary: Record<string, SortFunction> = {
            "name": sortListByName,
            "id": sortListByID
        }

        return filters.length > 0 ? listing.filter(obj => filters.includes(obj.category)).sort(sortDictionary[sort]) : listing.sort(sortDictionary[sort])
    }, [filters, listing, sort])

    return filteredValues
}