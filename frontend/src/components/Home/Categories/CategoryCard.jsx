export default function CategoryCard({ icon, categoryName, totalCourse }) {
  return (
    <div className="category-card:relative category-card:top-0 category-card:transition-[top] category-card:duration-300 category-card:ease-linear category-card:hover:-top-[10px] flex h-[234px] w-[234px] cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl border border-[#e1d9d9] hover:shadow-lg">
      <img src={icon} alt="" />
      <p className="text-space-cadet text-[18px] font-bold">{categoryName}</p>
      <p className="text-medium-gray text-[12px]">{totalCourse}</p>
    </div>
  );
}
