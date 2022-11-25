import React from 'react';
import { Form, Field } from 'react-final-form';

export default function Register() {
  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-lg lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-cyan-800">
          Sign up
        </h1>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email">
                {({ input }) => (
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      {...input}
                      className="block w-full px-4 py-2 mt-2 text-cyan-800 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                )}
              </Field>
              <Field name="password">
                {({ input }) => (
                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      {...input}
                      className="block w-full px-4 py-2 mt-2 text-cyan-800 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                )}
              </Field>
              <Field name="confirm">
                {({ input }) => (
                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-800"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      {...input}
                      className="block w-full px-4 py-2 mt-2 text-cyan-800 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                )}
              </Field>
              <div className="mt-6">
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-800 rounded-md hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600">
                  Sign up
                </button>
              </div>{' '}
            </form>
          )}
        />
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          Don't have an account?{' '}
          <a
            href="/login"
            className="font-medium text-cyan-700 hover:underline"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
