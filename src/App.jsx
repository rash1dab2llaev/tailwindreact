import frame1 from "./img/frame1.png";
import logo from "./img/logo.png";
import e1 from "./img/e1.png";
import "./App.css";

function App() {
  return (
    <div className="App bg-[#171836] ">
      <div className="lg:container mx-auto">
        {/* navbar */}
        <div className="flex justify-between xs:items-center   p-5 xs:flex-col sm:flex-row ">
          <div className="flex justify-between  xs:flex-col sm:flex-row sm:w-[300px] md:w-[350px]  xl:w-[450px] ">
            <img src={logo} alt="" className="xs:w-[100px] xs:mx-auto" />
            <div className="text-[#fff] flex justify-between xs:my-3  xs:w-[250px] sm:w-[200px] md:w-[250px]">
              <a href="#">home</a>
              <a href="#">course</a>
              <a href="#">home</a>
              <a href="#">home</a>
            </div>
          </div>
          <div>
            <select name="" id="" className=" bg-inherit text-[#fff] ">
              <option value="">eng</option>
              <option value="">ru</option>
            </select>
            <a href="#" className="bg-[#F5443B] py-2 px-5 rounded-[10px] ">
              login
            </a>
          </div>
        </div>
        {/* first block */}
        <div className="flex justify-between text-[#9A9CCB99] xs:flex-col xs:text-center sm:flex-row  p-3">
          <div className="md:w-[500px]">
            <img src={frame1} alt="" />
          </div>
          <div className="md:w-[400px] lg:w-[450px] ">
            <h1 className=" xs:text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px]  text-[#fff] font-700">
              Grow Your Skills <br /> To Advance Your <br /> Career Path.
            </h1>
            <p className="py-5">
              We have something big for you who want to level up!
            </p>
            <input
              type="text"
              placeholder="What do you want to learn..."
              className=" bg-[#1F2143]  w-full h-[40px] text-center "
            />
            <p className="py-3">Suggestions</p>
            <div className="flex justify-between flex-wrap">
              <p className="border-2 border-[#9A9CCB99] p-1 rounded-[10px]">
                UI UX Design
              </p>
              <p className="border-2 border-[#9A9CCB99] p-1 rounded-[10px]">
                CSS Fundamental
              </p>
              <p className="border-2 border-[#9A9CCB99] p-1 rounded-[10px]">
                3D Design Illustration
              </p>
              <p className="border-2 border-[#9A9CCB99] p-1 rounded-[10px]">
                Website Development
              </p>
              <p className="border-2 border-[#9A9CCB99] p-1 rounded-[10px]">
                Logo Design
              </p>
              <p className="border-2 border-[#9A9CCB99] p-1 rounded-[10px]">
                Icon Design
              </p>
            </div>
          </div>
        </div>

        {/* second -block */}
        <div className=" flex justify-between ">
          <div className=" xl:w-[100px] ">
            <img src={e1} alt="" />
            <div>
              <p>Get New Friends</p>
              <p>
                You will meet new friends in some of classes that you take. Say
                hello to them and make friends, it will be so much warm
                friendship!
              </p>
            </div>
          </div>
          <div  className=" xl:w-[340px] "> 
            <img src={e1} alt="" />
            <div>
              <p>Get New Friends</p>
              <p>
                You will meet new friends in some of classes that you take. Say
                hello to them and make friends, it will be so much warm
                friendship!
              </p>
            </div>
          </div>
          <div  className=" xl:w-[340px] ">
            <img src={e1} alt="" />
            <div>
              <p>Get New Friends</p>
              <p>
                You will meet new friends in some of classes that you take. Say
                hello to them and make friends, it will be so much warm
                friendship!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
