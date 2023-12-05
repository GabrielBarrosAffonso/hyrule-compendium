import { useMemo, } from "react"

export const useFilter = (listing: any[], filters: string[]) => {

    const filteredValues = useMemo(() => {
        return filters.length > 0 ? listing.filter(obj => filters.includes(obj.category)) : listing
    }, [filters, listing])

    return filteredValues
}