export type User = {
  id: string
  name: string
  password?: string
}

export type AuthContextType = {
  user: User | null
  authenticated: boolean
  login: (name: string, password: string) => boolean
  logout: () => void
  register: (name: string, password: string) => boolean
  loading: boolean
}
