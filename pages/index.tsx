/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import type { NextPage } from 'next';
import { Field, Form } from 'react-final-form';

const Home: NextPage = () => {
  const onSubmit = (e) => { console.log(e); };
  return (
    <div>
      <h3>
        WELOCOME TO
        <b> PRIORITY</b>
      </h3>
      <hr />

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>Login</label>
            <Field name="email">
              {({ input }) => (<input type="email" placeholder="Enter Email" {...input} />)}
            </Field>
            <Field name="password">
              {({ input }) => (<input type="password" placeholder="Password" {...input} />
              )}
            </Field>
            <button type="submit">Login</button>
          </form>
        )}
      />

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>Sign up</label>
            <Field name="email">
              {({ input }) => (<input type="email" placeholder="Enter Email" {...input} />)}
            </Field>
            <Field name="password">
              {({ input }) => (<input type="password" placeholder="Password" {...input} />)}
            </Field>
            <Field name="confirm">
              {({ input }) => (<input type="password" placeholder="Confirm password" {...input} />)}
            </Field>
            <button type="submit">Sign up</button>
          </form>
        )}
      />

    </div>
  );
};

export default Home;
