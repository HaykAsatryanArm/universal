import React, { useState } from "react"

import { Routes, Route } from "react-router-dom"

import { Home, About, Product, SelectedProduct, Services, CoWorkers, Contact } from "./Pages"


import { Header, Footer, FormPopup, Popup } from "./Components"

const App = () => {

    const [activePage, setActivepage] = useState('գլխավոր')

    const [status, setStatus] = useState(false)


    const [popup, setPopup] = useState(null)
    const [formPopup, setFormPopup] = useState(null)

    return (
        <div className={popup || formPopup ? "grandComponent" : ""}>
            <Header active={activePage} setActive={setActivepage} />




            {formPopup ? <FormPopup setFormPopup={setFormPopup} setPopup={setPopup} setStatus={setStatus} /> : <></>}
            {popup ? <Popup text={"ՄԵՐ ՄԱՍՆԱԳԵՏԸ ԿԱՊ ԿՀԱՍՏԱՏԻ ՁԵԶ ՀԵՏ"} setPopup={setPopup} status={status} /> : <></>}




            
            <Routes>
                <Route path={"universal/"} element={<Home setActive={setActivepage} popup={popup} setPopup={setPopup} setStatus={setStatus} />} />
                <Route path={"universal/about"} element={<About setActive={setActivepage} />} />
                <Route path={"universal/product"} element={<Product setActive={setActivepage} />} />
                <Route path={"universal/product/:id"} element={<SelectedProduct setActive={setActivepage} />} />
                <Route path={"universal/services"} element={<Services setActive={setActivepage} setFormPopup={setFormPopup}  />} />
                <Route path={"universal/co-workers"} element={<CoWorkers setActive={setActivepage} />} />
                <Route path={"universal/contact"} element={<Contact setActive={setActivepage} setStatus={setStatus} setPopup={setPopup} />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
