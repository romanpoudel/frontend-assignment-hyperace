"use client"

import { store } from '@/app/redux-toolkit/store'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'

export function ReactProvider({children}:{children:React.ReactNode}){
    return(
        <Provider store={store}>
            <Navbar />
            {children}
        </Provider>
    )
}