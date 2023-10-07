import { useState } from "react";

const StateSubmit = () => {
  const [name, setName] = useState();
  console.log("🚀 ~ file: StateSubmit.jsx:5 ~ StateSubmit ~ name:", name);
  const handleSubmit = (e) => {
    
    setName(e.target.value);
  };
  return (
    <div>
      <div>
        <form>
          <input onChange={handleSubmit} type="text" name="name" />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
};

export default StateSubmit;
