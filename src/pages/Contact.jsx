import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { lazy, useRef } from "react";
const Magnet = lazy(()=>import('../components/Magnet'));
import VariableProximity from '../components/VariableProximity';




const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const containerRef = useRef(null);
  

  const submitHandler = () => {
    toast.success("Thank you for giving your valuable message.");
  };

  return (
    <div className="w-full flex flex-col gap-3 px-10 bg-gray-600 text-white items-center">
      {/* this is all headings */}
      <div className="heading text-2xl md:text-3xl font-thin text-center mt-10">
        Get in Touch
      </div>
      <div className="heading2 uppercase w-full text-6xl md:text-9xl font-medium text-center">
        
        {/* this is hover effect from variableProximity file  */}
        <div
         ref={containerRef}
         style={{position: 'relative'}}>
         <VariableProximity
          label={'contact us'}
          className={'variable-proximity-demo'}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff='linear'
         />
        </div>
      </div>

      {/* this is container  */}
      <div className="container w-full flex flex-col md:flex-row gap-10">
        
        {/* first part text */}
        <div className="part1 w-full md:w-1/2 flex justify-center items-center text-center md:text-left">
          <div className="headingFirst text-xl md:text-3xl tracking-tighter leading-relaxed font-thin">
            We are
            <Magnet padding={50} disabled={false} magnetStrength={10}>
            <span className="text-rose-500 bg-gray-800 mx-5 px-2 py-1 rounded-lg font-medium">
              💖 Virat Elight Series 💖
            </span>
            </Magnet>
            <br />
            And we are here to serve!
            <br />
            How can we help you?
          </div>
        </div>

        {/* second part form */}
        <div className="part2 w-full md:w-1/2">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="w-full mx-auto py-10 rounded-lg flex flex-col justify-center items-center px-4"
          >
            {/* This is for Name */}
            <div className="text-lg font-thin w-full">Name</div>
            <input
              {...register("Name", { required: true })}
              className="w-full border-b outline-0 px-4 py-2"
              placeholder="Enter Your Name"
            />
            {errors.Name && (
              <p className="text-red-400 text-sm">Name is required.</p>
            )}{" "}
            <br />
            {/* This is for Email */}
            <div className="text-lg font-thin w-full">Email</div>
            <input
              {...register("Email", { required: true })}
              className="w-full border-b outline-0 px-4 py-2"
              placeholder="Enter Your Email"
            />
            {errors.Email && (
              <p className="text-red-400 text-sm">Email is required.</p>
            )}{" "}
            <br />
            {/* select options */}
            <select
              {...register("category", { required: "What's in your mind." })}
              className="w-full border-b outline-0 px-4 py-2"
            >
              <option className="text-black" value="Default">
                {" "}
                ~ What's in your mind. ~{" "}
              </option>
              <option className="text-black" value="Sugggestion">
                Sugggestion
              </option>
              <option className="text-black" value="Opinion">
                Opinion
              </option>
              <option className="text-black" value="Technical Problem">
                Technical Problem
              </option>
              <option className="text-black" value="Submission Problem">
                Submission Problem
              </option>
              <option className="text-black" value="Advertiising">
                Advertiising
              </option>
              <option className="text-black" value="Internal issues">
                Internal issues
              </option>
            </select>
            <br />
            {/* this is textarea  message */}
            <div className="text-lg font-thin w-full mb-2">Message : </div>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full border outline-0 px-4 py-2 min-h-[5rem]"
              placeholder="Write your message here..."
            ></textarea>{" "}
            <br />
            {/* submit button */}
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <button
                onClick={handleSubmit(submitHandler)}  type="submit"
                className="w-full px-4 py-2 rounded-lg text-lg font-semibold cursor-pointer bg-sky-500 text-white">
                Submit
              </button>
            </Magnet>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
