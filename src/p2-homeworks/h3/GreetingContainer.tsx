import React, {ChangeEvent, useState, KeyboardEvent} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.currentTarget.value.trim() === "") {
            setError("name is required!")
            setName('')
        } else {
            setName(e.currentTarget.value)
            error && setError('')
        }
    }

    const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        name && e.key === "Enter" && addUser()
    }

    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
        error && setError('')
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onKeyDown={onKeyDown}
        />
    )
}

export default GreetingContainer