import { useState } from "react";
import { TABLE_ROWS } from "../../static/table-rows.js";
import { USERS } from "../../static/users.js";
import { v4 } from "uuid";
import { FaTrash } from "react-icons/fa";

const UserCrud = () => {
  // Bu yerga tekshirish oson bo‘lishi uchun ma'lumot kirib qo‘ydim
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "alisohib",
      email: "ali@example.com",
      password: "pass123",
      birthDate: "2001-05-12",
      gender: "male",
    },
    {
      id: 2,
      username: "zaynab95",
      email: "zaynab@mail.com",
      password: "zaynabpwd",
      birthDate: "1995-09-21",
      gender: "female",
    },
    {
      id: 3,
      username: "rahmat_01",
      email: "rahmat01@gmail.com",
      password: "rahmatpass",
      birthDate: "2000-12-03",
      gender: "male",
    },
    {
      id: 4,
      username: "nilufar_dev",
      email: "nilufar.dev@mail.com",
      password: "nilufar123",
      birthDate: "1999-07-18",
      gender: "female",
    },
    {
      id: 5,
      username: "javohirx",
      email: "javohirx@x.com",
      password: "javpass99",
      birthDate: "1998-02-28",
      gender: "male",
    },
    {
      id: 6,
      username: "shaxnozaa",
      email: "shaxnoza@gmail.com",
      password: "shaxpass",
      birthDate: "1996-03-14",
      gender: "female",
    },
    {
      id: 7,
      username: "murod_k",
      email: "murod.k@mail.uz",
      password: "mur0dkey",
      birthDate: "2002-11-10",
      gender: "male",
    },
    {
      id: 8,
      username: "fatimah",
      email: "fatimah@info.uz",
      password: "fatima456",
      birthDate: "1997-04-26",
      gender: "female",
    },
    {
      id: 9,
      username: "said_dev",
      email: "said.dev@gmail.com",
      password: "s4iddev",
      birthDate: "2003-06-09",
      gender: "male",
    },
    {
      id: 10,
      username: "shahlo_q",
      email: "shahlo.q@mail.com",
      password: "shahlo789",
      birthDate: "1994-08-01",
      gender: "female",
    },
  ]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    const user = {
      id: v4(),
      username,
      email,
      password,
      birthDate,
      gender,
    };
    setUsers((p) => [...p, user]);
    setUsername("");
    setEmail("");
    setPassword("");
    setBirthDate("");
    setGender("");
  };
  const handleDelete = (id) => {
    setUsers((p) => p.filter((user) => user.id !== id));
  };

  return (
    <div className="flex items-start justify-center h-[100vh] bg-[#000] gap-20 pt-20">
      <div className="form w-[456px] px-5 py-[30px] flex flex-col items-center rounded-[1.5%] bg-white">
        <h1 className="text-[30px] font-extrabold mb-5">Signup Form</h1>
        <form
          action=""
          className="w-[100%] flex flex-col gap-3"
          onSubmit={addUser}
        >
          <div className="username flex flex-col">
            <label htmlFor="username" className="font-bold mb-1.5">
              Full Name
            </label>
            <input
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="text"
              placeholder="Enter your username"
              name="username"
              className="px-2.5 py-2 border-2 border-[#dfdfdf] rounded-[5px]"
            />
          </div>
          <div className="email flex flex-col">
            <label className="font-bold mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              placeholder="Enter your email address"
              name="email"
              className="px-2.5 py-2 border-2 border-[#dfdfdf] rounded-[5px]"
            />
          </div>
          <div className="password flex flex-col">
            <label className="font-bold mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Enter your password"
              name="password"
              className="px-2.5 py-2 border-2 border-[#dfdfdf] rounded-[5px]"
            />
          </div>
          <div className="date flex flex-col">
            <label className="font-bold mb-1.5" htmlFor="date">
              Birth date
            </label>
            <input
              required
              value={birthDate}
              onChange={(event) => setBirthDate(event.target.value)}
              type="date"
              placeholder="dd/mm/yyyy"
              name="date"
              className="px-2.5 py-2 border-2 border-[#dfdfdf] rounded-[5px]"
            />
          </div>
          <div className="gender flex flex-col">
            <label className="font-bold mb-1.5" htmlFor="gender">
              Gender
            </label>
            <select
              required
              value={gender}
              onChange={(event) => setGender(event.target.value)}
              name="gender"
              id=""
              className="px-2.5 py-2 border-2 border-[#dfdfdf] rounded-[5px]"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male" autoFocus>
                male
              </option>
              <option value="female">female</option>
            </select>
          </div>
          <button className="bg-[#01987a] text-white rounded-[5px] py-2.5 mt-5">
            Submit
          </button>
        </form>
      </div>
      <table className="w-[1000px] table-auto border-collapse rounded-lg overflow-hidden">
        <thead className="bg-[#009879] text-white rounded-t-lg text-left">
          <tr>
            {TABLE_ROWS.map((row, index) => (
              <th className="p-4" key={index}>
                {row}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="even:bg-white odd:bg-[#f4f4f4]" key={user.id}>
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{user.username}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.password}</td>
              <td className="p-4">{user.birthDate}</td>
              <td className="p-4">{user.gender}</td>
              <td className="p-4 text-red-500">
                <button onClick={() => handleDelete(user.id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserCrud;
