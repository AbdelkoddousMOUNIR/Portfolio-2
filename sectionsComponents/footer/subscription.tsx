
export default function Subscription() {
  return (
    <div className="w-[40%] flex flex-col  items-center gap-[5px] text-white sm:w-full">
      <h3 className="font-medium opacity-80">to be one of the best clients</h3>
      <h1 className="text-xl font-medium">subscribe to our weekly offers</h1>
      <form action="" className="flex mt-[10px]">
        <input
          type="text"
          placeholder="Email"
          className="px-3 rounded-l-md w-[200px] outline-none border-none text-color2"
        />
        <input
          type="submit"
          value="subscribe"
          className="bg-color2 py-[7px] px-[16px] rounded-r-md cursor-pointer"
        />
      </form>
    </div>
  );
}
