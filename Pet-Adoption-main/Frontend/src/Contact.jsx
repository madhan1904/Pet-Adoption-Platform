import { useState } from "react";
import { mailreq } from "./Services/Postrequest";

function Contact(props) {
  const owner_email = props.email;
  console.log(owner_email);

  const [adopterData, setAdopterData] = useState({
    name: "",
    email: "",
    phoneno: "",
    address: "",
    desc: "",
    owner_email: owner_email,
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setAdopterData({ ...adopterData, [name]: value });
  };

  const onHandleSend = (e) => {
    e.preventDefault();
    console.log(adopterData);
    mailreq(adopterData)
      .then((res) => {
        if (res.status == 200) {
          alert("Enquiry mail successfull sent");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={onHandleSend}>
          <div className="post">
            <h2>Contact</h2>
            <div className="inputBx">
              <input
                size="25"
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={onHandleChange}
              />
            </div>

            <div className="inputBx">
              <input
                size="25"
                type="email"
                placeholder="Email"
                name="email"
                required
                onChange={onHandleChange}
              />
            </div>
            <div className="inputBx">
              <input
                size="25"
                type="number"
                placeholder="Phone no"
                name="phoneno"
                required
                onChange={onHandleChange}
              />
            </div>
            <div className="inputBx">
              <textarea
                size="25"
                type="text"
                placeholder="Gimme your address"
                name="address"
                required
                onChange={onHandleChange}
              ></textarea>
            </div>
            <div className="inputBx">
              <textarea
                size="25"
                type="text"
                placeholder="Tell the owner about your keen intrest and involvement in his/her pets"
                name="desc"
                required
                onChange={onHandleChange}
              ></textarea>
            </div>
            <div className="inputBx">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
