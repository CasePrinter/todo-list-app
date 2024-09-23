export interface ProjectPayload {
    id?: number
    title: string
    description: string
    createdDate: Date
    updatedDate: Date
    userId?: number
    deadlineDate: Date
    priority: string
    status: string
}