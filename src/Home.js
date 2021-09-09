import { useState } from "react";


function Home() {
    let [data, setdata] = useState()
    let [check, setcheck] = useState()
    let [print, setprint] = useState(false)

    function getData(val) {
        console.log(val.target.value)
        setdata(val.target.value)
        setprint(false)
    }
    return (
        <div>
            {
                print ?
                    <h1>Home {data}</h1>
                    : null
            }

            <input type='checkbox' onChange={getData} />
            <input type='text' onChange={getData}></input>
            
            <button onClick={() => setprint(true)}>print data</button>

        </div>
    )
}

export default Home;