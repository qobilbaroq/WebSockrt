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

  return (
    <>
      <div className="flex gap-10 justify-center p-10 font-fontt">
        <div className="flex flex-col w-[34rem] p-5 border-2 rounded-3xl">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
