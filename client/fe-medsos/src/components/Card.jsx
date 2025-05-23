import { FaRegHeart, FaUserAlt } from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FiRepeat } from "react-icons/fi";

const Card = ({
  username = "username",
  caption = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis nisi vel nunc eleifend, et finibus lorem consectetur Donec eget aliquet urna. Fusce eget consectetur dolor. Suspendisse consequat ipsum vitae elit iaculis, nec tempor purus porttitorInteger sit amet massa at ipsum consequat sodales. Curabitur hendrerit a lectus vitae tincidunt. Integer erat odio, dictum sit amet odio pulvinar, vestibulum commodo augue. Phasellus eu luctusex. Fusce gravida blandit sapien, quis lobortis tellus dignissim porttitor.",
  imageUrl = "",
}) => {

  return (
    <>
      <div className="flex gap-5">
        <div className="flex items-center justify-center p-3 w-11 h-11 rounded-full border-2 border-slate-300">
          <FaUserAlt />
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-semibold text-lg">{username}</h1>
            <p>
            {caption}
            </p>
          </div>
          {imageUrl && (
          <div>
              <img
                src={imageUrl}
                alt="gambar"
                className="h-96 w-72 rounded-xl object-cover"
              />
          </div>
          )}
          <div className="flex gap-10 text-xl">
            <FaRegHeart />
            <BiMessageSquareDetail />
            <FiRepeat />
            <PiPaperPlaneTilt />
          </div>
        </div>
      </div>
      <hr className="my-5 border-slate-400" />
    </>
  );
};

export default Card;
