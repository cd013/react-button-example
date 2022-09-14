import React from "react";
import { RegisterButton } from "./RegisterButton";

export const RegisterForm = () => {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="w-96 p-6 m-auto shadow-md lg:max-w-xl border border-gray-400 rounded-lg">
        <h1 className="text-3xl font-semibold text-center">Create your profile</h1>
        <div className="mt-6">
          <div className="my-2">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
              E-Mail
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="max@blicksolutions.de"
            />
          </div>
          <div className="my-6">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-800">
              Name
            </label>
            <input
              type="name"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Max"
            />
          </div>
          <div className="my-6">
            <label htmlFor="lastname" className="block text-sm font-semibold text-gray-800">
              Last name
            </label>
            <input
              type="lastname"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Mustermann"
            />
          </div>
          <RegisterButton />
        </div>
      </div>
    </div>
  );
};
