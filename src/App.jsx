import AllInput from "./components/allInput/AllInput";
import CustomHook from "./components/customHook/CustomHook";
import From from "./components/from/From";
import ReusableFrom from "./components/reuableFrom/ReusableFrom";
import StateSubmit from "./components/state/StateSubmit";

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      {/* <StateSubmit /> */}
      {/* <From /> */}
      {/* <AllInput />
       */}
      {/* <CustomHook /> */}
      <ReusableFrom handleSubmit={handleSubmit} title={"signup"} />
      <ReusableFrom handleSubmit={handleSubmit} title={"signIn"} />
    </>
  );
}

export default App;
