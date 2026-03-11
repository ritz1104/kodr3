import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="p-20">
      <form onSubmit={handleSubmit(submitHandler)}>
        <label>Name : </label>
        <input
          className="border rounded-md"
          {...register("Name", {
            required: "Name is Required",
            minLength: {
              value: 3,
              message: "Min 3 lenght",
            },
            maxLength: {
              value: 20,
              message: "Maximum length reached",
            },
          })}
          type="text"
        />
        {errors.Nae && <p className="text-red-500">{errors.Name.message}</p>}
        <label className="ml-2">Age : </label>
        <input
          className="border  rounded-md"
          {...register("Age")}
          type="Number"
        />
        <label className="ml-2">Email : </label>
        <input
          className="border rounded-md"
          {...register("Email")}
          type="Email"
        />
        <input className="ml-2" type="Submit" />
      </form>
    </div>
  );
};

export default App;
