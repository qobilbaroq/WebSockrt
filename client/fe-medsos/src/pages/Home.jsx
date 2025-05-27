import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../redux/action/authAction";
import Card from "../components/Card";
import SendStory from "../components/SendStory";
import Chat from "../components/Chat";

const Home = () => {
  const profile = useSelector((root) => root?.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile(profile?.token));
  }, []);

  const data = [
  {
    username: "Joshua",
    caption: "aku sedang jalan jalan di taman",
    imageUrl: "https://dummyimage.com/75x75/999/000",
  },
  {
    username: "Tania",
    caption: "lagi duduk di balkon dengan secangkir kopi dan melihat pemandangan yang sangat indah, tapi sayang cuma bisa di nikmati seorang diri",
    imageUrl: "",
  },
  {
    username: "Adit",
    caption: "lihat burung di langit",
    imageUrl: "https://dummyimage.com/75x75/333/fff",
  },
  {
    username: "rizal",
    caption: "sedang pusing dengan codingan ",
    imageUrl: "",
  },
];

  return (
    <>
      <div className="flex gap-10 justify-center p-10 font-fontt">
        <div className="flex flex-col w-[34rem] p-5 border-2 rounded-3xl">
        {data.map((item, index) => (

          <Card 
            key={index}
            username={item.username}
            caption={item.caption}
            imageUrl={item.imageUrl}
          />
        ))}
        
        </div>
        <div className="flex flex-col gap-5">
          <SendStory />
          <Chat />
        </div>
      </div>
    </>
  );
};

export default Home;
