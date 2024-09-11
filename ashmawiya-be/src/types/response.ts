export type User = {
    id?: number, username: string, email: string, password?: string
}

export type Course = {
    id?: number, title: string, url: string, videoDuration: number}


export type Message = {
    message: string
}