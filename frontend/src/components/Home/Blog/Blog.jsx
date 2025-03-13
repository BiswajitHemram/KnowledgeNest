import { BlogPic1, BlogPic2, BlogPic3 } from "../../../assets/Home";
import SectionHeader from "../SectionHeader";

export default function Blog() {
  const blogDatabase = [
    {
      id: crypto.randomUUID(),
      image: BlogPic1,
      date: "November 16, 2024",
      title: "Three Pillars of User Delight",
      descirption:
        "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is",
      category: ["Research", "UI/UX"],
    },
    {
      id: crypto.randomUUID(),
      image: BlogPic3,
      date: "September 24, 2017",
      title: "UX Mapping Methods",
      descirption:
        "Visual-design principles can be applied consistently throughout the process of",
      category: ["Research", "UI/UX"],
    },
    {
      id: crypto.randomUUID(),
      image: BlogPic2,
      date: "March 13, 2014",
      title: "Agile Development Projects and Usability sdf asf sadf ",
      descirption:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, maxime? Nam officiis et sint illum a voluptatibus dolores praesentium excepturi dolorum perspiciatis aliquam laborum possimus, ab ipsa veniam error labore doloremque cumque minima ipsum reiciendis fugit. Delectus quasi quo illo libero aliquid, magni adipisci alias ea eum quisquam, a mollitia officia distinctio soluta exercitationem dignissimos quam et nihil, itaque eligendi totam voluptas rem! Ab sequi aut magnam soluta itaque, ipsam molestias impedit ex perspiciatis non culpa cumque veniam nulla aliquam odio ipsum dolorem sapiente optio hic repellendus! Enim quia nobis debitis ratione eaque nisi animi cum autem praesentium hic! Amet?",
      category: ["Programming", "Research", "UI/UX"],
    },
  ];

  const getDescription = (word, count = 90) => {
    return word.split("").slice(0, count).join("") + "...";
  };

  return (
    <>
      <SectionHeader
        miniHeading="Our Blog"
        heading="Explore Our Latest Blogs"
        subtext="Explore expert insights, industry trends, and valuable tips through our latest blog posts, carefully curated to help you grow and learn."
        showButton={true}
        btnText="View All Blogs"
      />

      <div className="ml:px-6 mt-5 grid grid-cols-[repeat(1,1fr)] justify-center gap-8 py-8 sm:grid-cols-[repeat(1,620px)] sm:gap-10 lg:grid-cols-[repeat(2,minmax(460px,500px))] lg:gap-6 xl:grid-cols-[repeat(2,592px)] xl:gap-8">
        {blogDatabase.map((item, idx) => {
          if (idx == 2) {
            return (
              <div
                key={idx}
                className="sm:gap-10 lg:col-[2/3] lg:row-[1/_span_2]"
              >
                <img src={item.image} alt="" className="w-full" />
                <p className="text-medium-sea-green mt-5">{item.date}</p>
                <h4 className="ml:max-w-[300px] category-card:max-w-[435px] text-space-cadet mt-3 max-w-[250px] truncate text-[18px] font-semibold">
                  {item.title} Agile Development Projects and Usability sdf asf
                  sadf
                </h4>
                <p className="text-medium-gray mt-2">
                  {getDescription(item.descirption, 150)}
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5 font-medium">
                  {item.category.map((tag) => {
                    return (
                      <p
                        key={tag}
                        className="rounded-full bg-[#faceee] px-[15px] py-0.5 text-[#C11574]"
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={idx}
                className="flex flex-col gap-6 sm:flex-row sm:gap-10 lg:gap-6 xl:gap-10"
              >
                <img
                  src={item.image}
                  alt=""
                  className="lg:h-[200px] lg:w-[50%]"
                />
                <div className="">
                  <p className="text-medium-sea-green">{item.date}</p>
                  <h4 className="text-space-cadet mt-3 text-[18px] font-semibold lg:w-[207px] lg:truncate xl:w-[256px]">
                    {item.title}
                  </h4>
                  {/* length of character without 3 dot(...) is 88 */}
                  <p className="text-medium-gray mt-2">
                    {getDescription(item.descirption)}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5 font-medium">
                    {item.category.map((tag, idx) => {
                      return (
                        <p
                          key={tag}
                          className="rounded-full bg-[#faceee] px-[15px] py-0.5 text-[#C11574]"
                        >
                          {tag}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
