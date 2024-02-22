import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* left side */}

        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-5xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-lg text-white">
              Tech
            </span>
            Verse
          </Link>
          <p className="text-sm mt-5">
            This is the home for the tech enthusiast people where you can learn
            and find different blog related to modern technology.
          </p>
        </div>

        {/* right side  */}

        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your UserName" />
              <TextInput
                type="text"
                placeholder="name"
                id="username"
              />
            </div>

            <div>
              <Label value="Your Email" />
              <TextInput
                type="text"
                placeholder="name@gmail.com"
                id="email"
              />
            </div>

            <div>
              <Label value="Your Password" />
              <TextInput
                type="text"
                placeholder="********"
                id="password"
              />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>

            <div className="flex gap-2 mt-5">
              <span>Already have an account?</span>
              <Link to='/sing-in' className='text-blue-500'>
                Sing In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
