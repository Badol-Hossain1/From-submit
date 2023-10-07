import useInputState from "../../hook/hook";

const CustomHook = () => {
  const nameState = useInputState("done");
  //   console.log(nameState.value);
  const handleSubmit = (e) => {
  
    e.preventDefault();
    console.log(nameState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input {...nameState} type="email" id="" name="email" />
        <br />

        <input type="submit" value="submitff" />
      </form>
    </div>
  );
};

export default CustomHook;
