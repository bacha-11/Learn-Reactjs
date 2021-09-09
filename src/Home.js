import { useState } from "react";


function Home() {
    let [data, setdata] = useState()
    let [print, setprint] = useState(false)

    function getData(val) {
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

            <input type='text' onChange={getData}></input>
            <button onClick={() => setprint(true)}>print data</button>

        </div>
    )
}

export default Home;