import "../styles/createprod.css";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const CreateProd = () => {
  const title = useRef();
  const description = useRef();
  const price = useRef();
  let getRole;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch("http://localhost:8000/role", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key: localStorage.getItem("auth_token"),
        }),
      }).then((res) => res.json());
      console.log(response);
      if (response.role != "admin") navigate("/NotFound");
    };

    fetchData();
  }, []);

  async function HandleRequest() {
    let data = new FormData();
    let imagedata = document.querySelector('input[type="file"]').files[0];
    console.log(imagedata);
    data.append("title", title.current.value);
    data.append("image", imagedata);
    data.append("description", description.current.value);
    data.append("price", price.current.value);
    // data.append("key", localStorage.getItem('auth_token'))
    const response = await fetch("http://localhost:8000/products", {
      method: "POST",
      body: data,
    });
  }
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
        <div className="card-body">
          <h2 className="card-title">Fill in the blanks</h2>
          <input
            ref={title}
            type="text"
            placeholder="Type Title here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            ref={description}
            type="text"
            placeholder="Type Description here"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
          <input
            ref={price}
            type="number"
            placeholder="Type Price here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => HandleRequest()}>
              Create Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProd;
