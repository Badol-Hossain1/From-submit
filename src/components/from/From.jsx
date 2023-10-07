const From = () => {
  const handleSubmit = (e) => {
    console.log("🚀 ~ file: From.jsx:3 ~ handleSubmit ~ e:", e.target.name.value);
    e.preventDefault();
    console.log("from submit");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default From;
