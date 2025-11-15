import React, { useState } from "react";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";
import Header from "../../components/layout/Header";
import { UserProps, UserData } from "../../interfaces";

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserProps[]>(users);

  const handleAddUser = (userData: UserData) => {
    const newUser: UserProps = {
      id: userList.length + 1,
      ...userData,
    };
    setUserList([...userList, newUser]);
  };

  console.log(userList)
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
        <h1 className=" text-2xl font-semibold">Users Content</h1>
        <button
          className="bg-blue-700 px-4 py-2 rounded-full text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Add User
        </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {
            userList?.map((user: UserProps, key: number) => (
              <UserCard key={key} {...user} />
            ))
          }
        </div>
      </main>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users;
