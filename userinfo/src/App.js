import React, { useState, useEffect } from "react";
import instance from "./axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    instance
      .post("/datapost", {
        username: username,
        email: email,
        phone: phone,
      })
      .then((res) => {
        alert("Submited");
      });
  };

  useEffect(() => {
    instance.get("/dataget").then((res) => {
      setResult(res.data.result);
    });
  });

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex gap-3 bg-gray-400 w-max p-3 m-10 rounded items-end"
      >
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            User name
          </label>
          <input
            type="text"
            name="user-name"
            id="user-name"
            placeholder="User-name"
            className="mt-1 w-full rounded-md p-2"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Email Id
          </label>
          <input
            type="email"
            name="email-id"
            id="email-id"
            placeholder="Email id"
            className="mt-1 w-full rounded-md p-2"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="text"
            name="Phone-number"
            id="Phone-number"
            placeholder="Phone Number"
            className="mt-1 w-full rounded-md p-2"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 h-12 text-sm font-medium rounded-md text-white bg-indigo-600 "
        >
          Submit
        </button>
      </form>
      <div className="bg-white shadow mt-10 px-5 overflow-y-auto rounded shadow-black mb-5 w-[700px]">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="h-16 w-full text-sm leading-none text-gray-800">
              <th className="font-normal text-left pl-4">Sl No:</th>
              <th className="font-normal text-left pl-4">Username</th>
              <th className="font-normal text-left pl-12">Email Id</th>
              <th className="font-normal text-left pl-12">Phone Number</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {result.map((item, index) => (
              <tr className="h-20 text-sm leading-none text-gray-800 bg-white hover:bg-gray-100 border-b border-t border-gray-100">
                <td className="pl-4">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    {index + 1}
                  </p>
                </td>
                <td className="pl-12">
                  <div className="flex items-center">
                    <div className="w-10 h-10">
                      <img
                        className="w-full h-full rounded"
                        src={
                          "https://avatars.dicebear.com/api/initials/" +
                          item.username +
                          ".svg"
                        }
                        alt="demo"
                      />
                    </div>
                    <div className="pl-4">
                      <p className="font-medium">{item.username}</p>
                    </div>
                  </div>
                </td>
                <td className="pl-12">
                  <p className="text-sm font-medium leading-none text-gray-800">
                    {item.email}
                  </p>
                </td>
                <td className="pl-12">
                  <p className="font-medium">{item.phone}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
