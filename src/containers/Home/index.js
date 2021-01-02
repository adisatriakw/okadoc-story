import React from 'react'
import Button from '../../components/atoms/Button/button'

const Home = () => {
    return (
        <div className="container mx-auto">
            <div className="py-6">
                <h1 className="text-5xl text-gray-600 tracking-wide font-bold">Okadoc</h1>
            </div>
            <h3 className="mb-3 text-2xl text-gray-400 tracking-wide font-medium">Button</h3>
            <div className="grid grid-cols-5 gap-4">
                <Button variant="primary">Call to Book</Button>
            </div>
        </div>
    )
}

export default Home