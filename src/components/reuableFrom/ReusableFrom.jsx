// eslint-disable-next-line react/prop-types
const ReusableFrom = ({ title, handleSubmit }) => {
  const handleS = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.password.value,
      email: e.target.email.value,
    };
    console.log("🚀 ~ file: ReusableFrom.jsx:11 ~ handleS ~ data:", data);
    handleSubmit(data);
  };
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <form onSubmit={handleS}>
          <input type="email" id="" name="email" />
          <br />
          <input type="password" id="" name="password" />
          <br />
          <input type="submit" value="submitff" />
        </form>
      </div>
    </div>
  );
};

export default ReusableFrom;
