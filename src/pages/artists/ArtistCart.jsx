import React from "react";
import { LuBadgeInfo } from "react-icons/lu";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function ArtistCart({ name, image }) {
  return (
    <div class="w-full overflow-hidden border-2 border-slate-300 p-3 pb-4 rounded-sm">
      <img class="rounded-sm mb-4" src={image} alt={name} />
      <p class="font-IRanSans md:text-lg font-semibold text-red-700">{name}</p>
      <div class="flex justify-center text-3xl md:text-4xl mt-2 text-slate-700">
        <a href="#">
          <CiFacebook className="hover:scale-105 transition-all duration-300" />
        </a>
        <Link href="#" class="mx-1">
          <LuBadgeInfo className="hover:scale-105 transition-all duration-300" />
        </Link>
        <a href="#">
          <CiInstagram className="hover:scale-105 transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}
