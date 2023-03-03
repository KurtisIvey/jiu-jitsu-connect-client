import React from "react";
import CreatePost from "../components/CreatePost";
import Navbar from "../components/Navbar";

type Props = {};

const Profile = (props: Props) => {
  const posts = [
    {
      date: "january 1, 2023",
      postContent:
        "Apple pie soufflé dragée liquorice caramels tootsie roll toffee jelly-o gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie roll wafer. Tootsie roll cotton candy apple pie cake jelly beans tiramisu marzipan cotton candy.",
      likes: [{ user: "jeff" }, { user: "zoe" }],
      comments: [
        {
          user: "jeff",
          commentContent:
            " gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
        {
          user: "zoe",
          commentContent:
            "essert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
      ],
    },
    {
      date: "january 2, 2023",
      postContent:
        "The Apple pie soufflé dragée liq jelly-o gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie roll wafer. Tootsie roll cotton candy apple pie cake jelly beans tiramisu marzipan cotton candy.",
      likes: [{ user: "jeff" }, { user: "zoe" }],
      comments: [
        {
          user: "jeff",
          commentContent:
            " gummi bears. Gummies toffee muffin marshmallow dessert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
        {
          user: "zoe",
          commentContent:
            "essert. Pudding halvah jelly cupcake apple pie tootsie ro",
        },
      ],
    },
  ];

  return (
    <div className=" h-screen">
      <Navbar />
      <main className="flex flex-col space-y-4">
        <div
          id="profilePhotoCol"
          className="flex flex-col items-center mx-auto mt-10 space-y-2"
        >
          <img
            className="rounded-full  w-auto max-h-[200px] border-white border-2"
            src="https://kitsunebackfire.github.io/portfolio/static/media/headshot.2c1b0e6f396d86cf1bcb.jpeg"
            alt="user photo"
          />
          <div className="flex flex-col items-center space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              Kurtis Ivey
            </h2>
            <h3 className="text-gray-600/80">124 Friends</h3>
          </div>
        </div>
        <div className="mx-5 mt-4 border-b-2 border-gray-300" />
        <div className="flex flex-col">
          <CreatePost />
        </div>
      </main>
    </div>
  );
};

export default Profile;
