export interface IconsType {
    id: string,
    Icon: string
}
export interface InfoType {
    text: string
    icons: IconsType[]
}

export interface SubmenuType {
    title: string
    description: string
    Icon: string
    img_url: string
    info: InfoType
}