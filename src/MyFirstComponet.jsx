export default function MyFirstComponent() {
  
  return (
    <div className="mb-6">
      <div>
        <h1>
          Abdulrahman 
        </h1>
        <button className={"py-1.5 px-2 bg-amber-400 cursor-pointer btn "}  onClick={SayHello} > click Me </button>
      </div>
    </div>
  );
}

function SayHello() {
  alert("Hello, welcome to my first React component!");
}