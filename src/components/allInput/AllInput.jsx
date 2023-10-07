import { useEffect, useRef } from "react";

const AllInput = () => {
  const nameRef = useRef(null);
  const handleSumit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  useEffect(()=> {
    nameRef.current.focus()
  },[])
  return (
    <div>
      <form onSubmit={handleSumit}>
        <input ref={nameRef} type="text" name="name" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default AllInput;
