import { CoOrganizationLogosClient } from "./ui/co-org-logo";
import { Heading } from "./ui/text";

const logos = [
  {
    name: "Company 1",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747171/pather%20logo/pagmkfmpwxmpa8szlvcy.jpg  ",
  },
  {
    name: "Company 2",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747142/pather%20logo/e4zln7v0g3nrh0vs92qd.jpg",
  },
  {
    name: "Company 3",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747111/pather%20logo/wpp20uugpj4gegwaxqit.jpg",
  },
  {
    name: "Company 4",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747074/pather%20logo/lfwclyhudaxhntxmnt59.jpg",
  },
  {
    name: "Company 5",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1730747023/pather%20logo/g6o2riwdeghed8rw8jr1.jpg",
  },
  {
    name: "Company 6",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/an4uoqfpuhitlpzc1myq.png  ",
  },
  {
    name: "Company 7",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/afcvjzohrxc4gnuii3yc.png",
  },
  {
    name: "Company 8",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/itr0sezg2mkyt0noyfvl.png",
  },
  {
    name: "Company 9",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/mh9motuym8f1arxtpuo9.png",
  },
  // {
  //   name: "Company 10",
  //   src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/itr0sezg2mkyt0noyfvl.png",
  // },
  {
    name: "Company 11",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/g72rqpt4qzdklz65m7fk.png",
  },
  {
    name: "Company 12",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851537/pather%20logo/qocmy2rrykfmnu6dux4r.png",
  },
  {
    name: "Company 13",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/q5dipjuspnolhmo89ice.png",
  },
  {
    name: "Company 14",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/wof7mjclg6enfwy9rn4j.jpg",
  },
  {
    name: "Company 15",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/mrr8gerkfpxbtyh5zf6j.png",
  },
  {
    name: "Company 16",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/hrw6gvrtobrrqo0wjccf.png",
  },
  {
    name: "Company 17",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/ynau5ksxnsbj1g5uksyo.png",
  },
  {
    name: "Company 18",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851536/pather%20logo/rtxy4umx3biiy9vavngd.png",
  },
  {
    name: "Company 19",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/kaddc5taamdylr5mlbj5.png",
  },
  {
    name: "Company 20",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/afcvjzohrxc4gnuii3yc.png",
  },
  {
    name: "Company 21",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/o364fjzisxo0v4i0n00t.png",
  },
  {
    name: "Company 22",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/t6kdjntladvqjodxrp9k.png",
  },
  {
    name: "Company 21",
    src: "https://res.cloudinary.com/dwlhesiyi/image/upload/v1727851535/pather%20logo/e9rswjjfuimtl5ipzp7g.png",
  },

];

export default function CoOrganizationLogos() {
  return (
      <section className="w-full py-8 mt-8 ">
      <div className="container mx-auto px-4 md:px-6  ">
        {/* <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl md:ml-24 text-center mb-8 text-pretty  ">
         
        </h2> */}
        <Heading as="h3" className="mt-2  text-center">
                Our Co-Organizers
                </Heading>
        <CoOrganizationLogosClient logos={logos} />
      </div>
    </section>
  );
}
