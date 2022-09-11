import type { Component } from 'solid-js';
import { createSignal, For } from 'solid-js';
import { iterableList } from '../utils/usersWnatTopay'

const UsersWantToPay: Component = () => {
    const [userInput, setUserInput] = createSignal<string>('')
    return (
        <div class='pt-10 text-black mb-10'>
            <div class='text-center'>
                <input
                    type="text"
                    placeholder="Search User"
                    class="input input-bordered input-primary w-full max-w-xs text-white"
                    value={userInput()}
                    oninput={(e) => setUserInput(e.currentTarget.value)}
                />
            </div>


            {iterableList.filter(val => val.name.includes(userInput()) || val.email.includes(userInput()) || val.phoneNumber.includes(userInput())).map((item, index) => {
                return (
                    <div class='p-5 mt-5 bg-teal-200 flex justify-around shadow-lg'>
                        <div>
                            <h2>name: {item.name}</h2>

                            <h2>phone: {item.phoneNumber}</h2>
                            <h2>email : {item.email}</h2>
                            <h2>payed : {item.payed ? 'payed' : 'not payed'}</h2>
                        </div>
                    </div>
                )
            })}


        </div>
    )
}

export default UsersWantToPay;