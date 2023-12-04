export const categories = [
    "All", 
    "Creatures",
    "Equipment",
    "Materials",
    "Monsters",
    "Treasure",
]

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}