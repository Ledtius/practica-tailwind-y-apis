function App() {
  return (
    <>
      <div className="flex justify-center gap-2 bg-blue-500 animate-bounce p-2 rounded-3xl w-full cursor-pointer transition-colors hover:bg-amber-200  ">
        <p className="text-white w-fit">Hola</p>
        <p className="text-white w-fit">Hola</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <p className="text-white w-fit">Hola</p>
        <p className="text-white w-fit">Hola</p>
      </div>
    </>
  );
}

export default App;
