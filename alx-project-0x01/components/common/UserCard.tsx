import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">@{username}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-500">Email: {email}</p>
        <p className="text-sm text-gray-500">Phone: {phone}</p>
        <p className="text-sm text-gray-500">Website: {website}</p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-700">Address</h3>
        <p className="text-sm text-gray-500">{address.street}, {address.suite}</p>
        <p className="text-sm text-gray-500">{address.city}, {address.zipcode}</p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-700">Company</h3>
        <p className="text-sm text-gray-500">{company.name}</p>
        <p className="text-sm text-gray-500 italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
