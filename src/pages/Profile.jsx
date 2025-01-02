import { FiEdit2 } from "react-icons/fi";
import InputBox from "../components/InputBox";
import Button from "../components/Buttons/Button";

const Profile = () => {
  const user = {
    firstName: "Jhon",
    lastName: "Doe",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    about: "",
    language: "English",
    Links: {
      instagram: "",
      facebook: "",
      google: "",
      linkedin: "",
      website: "",
    },
  };
  return (
    <>
      <div className="mx-5 my-8 flex flex-col w-full justify-center items-center">
        <h2 className="my-4 font-bold text-4xl">
          {user.firstName + user.lastName}
        </h2>
        <div className="relative">
          <div className="profile_pic relative w-28 h-28">
            {/* Avatar */}
            <img
              className="rounded-full w-full h-full object-cover"
              src={user.avatar}
              alt="Profile Picture"
            />

            {/* Edit Button */}
            <button className="editbtn absolute bottom-1 right-1  text-gray bg-white border border-black p-1 rounded-full shadow-lg">
              <FiEdit2 className="text-lg" />
            </button>
          </div>
        </div>
        <form action="">
          <div className="firstName mt-10">
            <InputBox
              type="text"
              value={user.firstName}
              className="bg-white w-[400px]"
              placeholder="First Name"
            />
          </div>
          <div className="lastName mt-5">
            <InputBox
              type="text"
              value={user.lastName}
              className="bg-white w-[400px]"
              placeholder="Last Name"
            />
          </div>
          <div className="about mt-5">
            <InputBox
              type="text"
              value={user.about}
              className="bg-white w-[400px]"
              placeholder="About"
            />
          </div>
          <div className="language mt-5">
            <select
              id="language"
              name="language"
              className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-[400px] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="zh">Chinese</option>
            </select>
          </div>
          <hr />
          <div className="links mt-10">
            <label>Links</label>
            <div className="flex items-center mt-5 w-[400px]">
              <select className="text-gray-500 py-2 px-4 border border-r-0 border-gray-300">
                <option value="http">
                  http://
                </option>
                <option value="https">
                  https://
                </option>
              </select>
              <InputBox
                value={user.website}
                type="text"
                placeholder="Website URL"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-full shadow-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center mt-5 w-[400px]">
              <span className=" text-gray-500 py-2 px-4 border border-r-0 border-gray-300">
                https://www.instagram.com/
              </span>
              <InputBox
                value={user.instagram}
                type="text"
                placeholder="Profile URL"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-full shadow-sm focus:outline-none"
              />
            </div>
            <div className="flex items-center mt-5 w-[400px]">
              <span className=" text-gray-500 py-2 px-4 border border-r-0 border-gray-300">
                https://www.linkedin.com/
              </span>
              <InputBox
                type="text"
                value={user.linkedin}
                placeholder="Profile URL"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-full shadow-sm focus:outline-none"
              />
            </div>
            <div className="about mt-5 flex">
              <InputBox
                type="text"
                value={user.google}
                placeholder="Gmail"
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 w-[70%] rounded-l-md shadow-sm focus:outline-none "
              />
              <span className="bg-white text-gray-500 py-2 px-4 w-[30%] rounded-r-md text-center border border-l-0 border-gray-300">
                @gmail.com
              </span>
            </div>
          </div>
          <div className="savebtn mt-5 flex">
            <Button
              buttonLabel="Save"
              backgroundColor="black"
              color="white"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
