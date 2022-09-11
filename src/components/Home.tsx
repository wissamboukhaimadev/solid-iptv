import type { Component } from 'solid-js';
import { Routes, Route } from '@solidjs/router'
import UsersWantToPay from './UsersWantToPay';
import UserPayed from './UserPayed';

const Home: Component = () => {
    return (
        <div >
            <div>
                <a href='/' class='pr-20 hover:text-red-500'>Users Want To Pay</a>
                <a href='/userspayed' class='pl-20 hover:text-red-500'>Users Payed</a>
            </div>
            <Routes>
                <Route path='/' component={UsersWantToPay} />
                <Route path='/userspayed' component={UserPayed} />
            </Routes>
        </div>
    )
}

export default Home;