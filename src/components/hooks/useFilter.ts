import { useMemo, } from "react"

export const useFilter = (listing: any[], filters: string[]) => {

    const filteredValues = useMemo(() => {
        return listing.filter(obj => filters.includes(obj.category))
    }, [filters, listing])

    return filteredValues
}