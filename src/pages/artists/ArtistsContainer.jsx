import React from "react";
import PageTitle from "../../components/PageTitle";
import ArtistCart from "./ArtistCart";

import artist1 from './../../assets/images/artists/team-member-1.jpg'
import artist2 from './../../assets/images/artists/team-member-2.jpg'
import artist3 from './../../assets/images/artists/team-member-3.jpg'
import artist4 from './../../assets/images/artists/team-member-4.jpg'
import artist5 from './../../assets/images/artists/team-member-5.jpg'
import artist6 from './../../assets/images/artists/team-member-6.jpg'
import artist7 from './../../assets/images/artists/team-member-7.jpg'
import artist8 from './../../assets/images/artists/team-member-8.jpg'


const data = [
    {
        id: '01',
        name: 'محمد علی رضوی',
        image: artist1
    },
    {
        id: '02',
        name: 'محمد رضا قاسمی',
        image: artist2
    },
    {
        id: '03',
        name: 'علی رضا انوری',
        image: artist3
    },
    {
        id: '04',
        name: 'پروانه قاسمی',
        image: artist4
    },
    {
        id: '05',
        name: 'فاطمه جوادی',
        image: artist5
    },
    {
        id: '06',
        name: 'شمس‌الله اکبری',
        image: artist6
    },
    {
        id: '07',
        name: 'کاظم مددی',
        image: artist7
    },
    {
        id: '08',
        name: 'قاسم حسینی',
        image: artist8
    },
]

export default function ArtistsContainer() {
  return (
    <section class="pt-24 md:pt-32 text-center md:w-[80%] mx-auto">
      <PageTitle title="هنرمندان" />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-5 mx-[15%] md:mx-[5%] mt-8 md:mt-12">
        {data.map(item => {
            return <ArtistCart key={item.id} name={item.name} image={item.image} />
        })}
      </div>
    </section>
  );
}
