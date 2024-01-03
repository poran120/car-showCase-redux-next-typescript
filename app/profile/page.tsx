"use client";
import { CustomButton } from "@/components";
import Tabs from "@/components/Tabs";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Profile = ({}) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  //logic
  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    router.push("/");
  }

  return (
    <section className="w-full h-3/4 grid grid-cols-[300px_minmax(300px,_1fr)_200px] px-[40px] pt-6 bg-slate-100 gap-2">
      <div className="profile__container flex items-center justify-center bg-white">
        <div className="profile__intro items-center">
          <h4 className="text-left font-bold mb-8 text-green-600">Profile </h4>
          <div className="flex items-center justify-center">
            <Image
              className="rounded mb-2"
              src={session?.user?.image || "/default-user-image.jpg"}
              alt="User Photo"
              width={120}
              height={120}
            />
          </div>
          <h6 className="font-bold text-center">{session?.user?.name}</h6>
          <div className="flex items-center justify-center">
            <CustomButton
              title="Add New Appearance"
              containerStyles="bg-blue-500 text-white font-bold rounded-full mt-5 custom-btn-effect"
            />
          </div>
          <Tabs />
          <button onClick={() => signOut()} className="font-bold">
            Sign Out
          </button>
        </div>
      </div>
      <div className="bg-white">No Data Available!!</div>
      <div className="bg-white">Data Nai!!</div>
    </section>
  );
};

export default Profile;
