import React, { useState } from "react";
import '../index.css';
const Contact = () => {
  const [data , setData] = useState({
    Fullname: "",
    phone: "",
    address: "",
  });
  const Input = (event) =>{
      const {name , value } = event.target;
       setData((preVal)=>{
        return {
          ...preVal,
          [name] : value,
        };
      });
  };
  const Submit=(e)=>{
    e.preventDefault();
    alert(
      `Your Form is Submitted ${data.Fullname}`
    )
  }

  return (
    <>
      <div className=" cont">
        <h1 className="text-center">Contact Us</h1>
     
      <div className="container ">
        <div >
          <div className="form col-md-6 col-10 ">
            <form onSubmit={Submit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">FullName</label>
                  <input
                    type="Text"
                    className="form-control"
                    id="inputEmail4"
                    name="Fullname"
                    value={data.Fullname}
                    onChange={Input}
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group  col-md-6 ">
                  <label for="inputPassword4">Phone</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputPassword4"
                    name="Phone"
                    value={data.Phone}
                    onChange={Input}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="form-group col-md-6 ">
                <label for="inputAddress ">Address</label>
                <input
                  type="text"
                  className="form-control "
                  id="inputAddress"
                  name="Address"
                  value={data.Address}
                  onChange={Input}
                  placeholder="1234 Main St"
                />
              </div>
              
              <div className="form-row ">
                <div className="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option value=""></option>
                    <option value ="Kanpur">Kanpur</option>
                    <option value ="Chennai">Chennai</option>
                    <option value ="Lucknow">Lucknow</option>
                    <option value ="Kanpur">Kanpur</option>
                    <option value ="Kanpur">Kanpur</option>

                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">PinCode</label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
              </div>
              <div className="form-group">
                <div className="form-check p-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label className="form-check-label" for="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <button  type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
