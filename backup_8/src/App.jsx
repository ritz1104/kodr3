import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {

  const [userData, setuserData] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const getData = async () => {

    setLoading(true)

    try {
      const response = await axios.get('https://picsum.photos/v2/list', {
        params: {
          page: page,
          limit: 10
        }
      })

      const data = response.data
      setuserData(data)

    } catch (error) {
      console.error('Error fetching data:', error)
    }

    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [page])


  return (
    <div className="bg-black min-h-screen w-full p-10">

      {loading && (
        <h1 className="text-white text-center text-2xl">Loading...</h1>
      )}

      <div className="w-full flex flex-wrap gap-12">
        {userData.map((item) => (
          <div key={item.id} className="card w-60 h-60 bg-amber-50 mt-10 rounded-md">

            <img
              className="w-full h-40 object-cover"
              src={item.download_url}
              alt=""
            />

            <h1 className="text-lg font-bold mt-2 text-center">
              {item.author}
            </h1>

          </div>
        ))}
      </div>


      <div className="w-full flex mt-10 items-center justify-center gap-10">

        <button
          className="w-20 h-10 bg-red-500 rounded-md"
          onClick={() => page > 1 && setPage(page - 1)}
        >
          Prev
        </button>

        <button
          className="w-20 h-10 bg-green-500 rounded-md"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default App;