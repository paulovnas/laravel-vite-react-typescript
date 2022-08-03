interface Model {
    id: number,
    created_at: string,
    updated_at: string
}

export interface IUser extends Model {
    name: string,
    nickname: string,
    email: string,
    email_verified_at: string | null
}