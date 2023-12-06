export interface APIResponse {
  name: string, // string; entry name
  id: number,  // integer; ID as shown in compendium
  category: string, // string; "equipment"
  description: string, // string; short paragraph
  image: string, // string; URL of image
  common_locations: string[] | unknown, // array of strings or null for unknown; where the entry is commonly seen
  drops?: string[] | unknown,
  dlc?: boolean,
  properties?: {
    attack: number, // integer; damage the entry does (0 for sheilds and arrows)
    defense: number, // integer; defense the entry offers (0 for equipment that aren't shields)
    effect: string, // string; special effect of the weapon (e.g. "wind razor"), empty if none
    type: string // string; type of weapon (e.g. "one-handed weapon")
  }
  hearts_recovered?: number, // float; health recovered when eaten raw
  cooking_effect?: string, // string; special effect when used in a dish/elixir (e.g. "stamina recovery"), empty if none
  fuse_attack_power?: number // integer; damage added when fused with a weapon
  edible?: boolean
}

export interface ThemeInterface {
    compendium: APIResponse[], 
    loading: boolean,
    setCompendium: React.Dispatch<React.SetStateAction<APIResponse[]>>,
}

export type SortFunction = (a: APIResponse, b:APIResponse) => number