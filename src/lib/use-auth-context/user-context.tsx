import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type User = {
  firstName: string
  lastName: string
  age: number
}

type Permissions = 'ADMIN' | 'SUPER_ADMIN' | 'USER'

type TUserContext = {
  user: User
  setUser: Dispatch<SetStateAction<User>>
  permissions: Permissions
  setPermission: Dispatch<SetStateAction<Permissions>>
}

export const UserContext = createContext<TUserContext>({
  user: { firstName: '', lastName: '', age: 20 },
  setUser: () => {},
  permissions: 'ADMIN',
  setPermission: () => {},
})

type Props = {
  children: ReactNode
}

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User>({
    firstName: 'Jon',
    lastName: 'Doe',
    age: 20,
  })

  const [permissions, setPermission] = useState<Permissions>('ADMIN')

  return (
    <UserContext.Provider value={{ user, setUser, permissions, setPermission }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const { user, setUser } = useContext(UserContext)

  return { user, setUser }
}

export const useUserPermissions = () => {
  const { permissions, setPermission } = useContext(UserContext)

  return { permissions, setPermission }
}
