import "./globals.css";
import colorsList from "./constant.json";
import Button from "./components/Button";
import { FaArrowRight } from "react-icons/fa";

function Home({
  id,
  text = "Button",
  Icon = FaArrowRight,
  height = 55,
  width = 180,
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  p-24 bg-[#1c1c1c]">
      <Button id={1} text="anime" />

      <div className="w-72 h-44 flex justify-center items-center bg-[#f4f4f4]">
        <button className="p-0.5 overflow-hidden inline shadow-2xl shadow-[#3a2744] hover:shadow-[#4b2774] rounded-[18px]  group hover:animate-animationOnHover animate-animationOnLeave bg-btn-gradient-rotation">
          <span
            style={{ "--height": height + "px", "--width": width + "px" }}
            className="overflow-hidden skew-x-2 group-hover:skew-x-0 text-black relative rounded-[16px] w-[var(--width)] h-[var(--height)] grid grid-cols-[repeat(100,1%)] grid-rows-[repeat(2,50%)] bg-[#d9d9d9] "
          >
            {colorsList.map((k, i) => (
              <span
                style={{
                  "--shadow-color": k + "60",
                  "--span-background": k + "50",
                }}
                key={k}
                className="w-full z-10 h-full hover:bg-[var(--span-background)] hover:shadow-btnSpanShadow"
              ></span>
            ))}
            {colorsList.map((k, i) => (
              <span
                style={{
                  "--shadow-color": k + "60",
                  "--span-background": k + "50",
                }}
                key={k}
                className="w-full z-10 h-full  hover:bg-[var(--span-background)] hover:shadow-btnSpanShadow"
              ></span>
            ))}

            <span className="-skew-x-2 absolute w-full justify-center px-1  flex gap-2 items-center  group-hover:skew-x-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {" "}
              {text}
              <Icon className="group-hover:translate-x-1.5 text-sm transition duration-500 " />
            </span>
          </span>
        </button>
      </div>
    </main>
  );
}

export default Home;
